const { Console } = require('console');
const express = require('express');
const { METHODS } = require('http');
const app = express()
const mongoose = require('mongoose');
const { consumers } = require('stream');
const bcrypt = require("bcrypt")
const cors = require('cors');
app.use(cors());
require("./userschema")
require("./contentSchema")

const mongopassword = encodeURIComponent("Ram@123456", "UTF-8");

const url = `mongodb+srv://kd061218:${mongopassword}@cluster0.5zvfh4t.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url).then(()=>{
    console.log("mongodb connected");
}).catch((e)=>{
    console.log(e);
})


const user = mongoose.model("UserDev")
const content = mongoose.model("ContentDev")


app.use(express.json());

app.post("/register", async(req, res) =>{
    let {name, email, password} = req.body;
    console.log(req.body)
    // name="h2"
    // email="h123"
    // phone="143"
    // password="harsh123"

    // 1st METHODS

    // try {
    //     await user.create({
    //         uname:name,
    //         email: email,
    //         mobile:phone,
    //     });
    //     return res.status(200).json({status:"ok"})
    //     console.log("done")
    // } catch (error) {
    //     return res.send({status:"error"})
    // }


    const isuser = await user.findOne({email:email})

    if(isuser){
        return res.status(400).json({status:"ok"})
    }

    // 2nd METHODS

    const person = new user({
        username:name,
        email: email,
        password:password,
        contentLikes:0,
        contentDislikes:0,
        lastMonthEarning:0,
        thisMonthEarning:0
    }) 

    await person.save()
    console.log("saved")
    return res.status(200).json({status:"ok"})

})

app.post("/login", async(req, res) =>{
    console.log(req.body)
    try {

        let {lemail, lpassword} = req.body

        if(!lemail || !lpassword){
            console.log("enter all the fields")
        }
        
        const userlogin = await user.findOne({email:lemail})
        console.log(userlogin)
        if(!userlogin){
            return res.status(300).json({status:"ok"})
        }
        const ismatch = await bcrypt.compare(lpassword, userlogin.password)

        if(ismatch){
            console.log("signin success")
            return res.status(200).json({status:"ok"})
        }
        else{
            console.log("signin failed")
            return res.status(400).json({status:"fail"})
        }



    } catch (error) {
        console.log(error)
    }
})

app.post("/ytvideo", async(req, res) =>{
    console.log(req.body)
    let {owner,
        title,
        discription,
        ytlink,
        isYT,
        isPDF,
        like,
        dislike} = req.body

        const video = new content({
            owner:owner,
        title:title,
        description:discription,
        link:ytlink,
        isYT:isYT,
        isPDF:isPDF,
        like:like,
        dislike:dislike
        }) 
    

    
    await video.save()
    console.log("content saved")
    return res.status(200).json({status:"ok"})
       
})

app.get("/ytcontent", async(req,res)=>{
    console.log("/ytcontent called finally...");
    try {
		const search = req.query.search || "";
	
		const SearchedYTContent = await content.find({
			isYT: true,
			$or: [
                { title: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } }
            ]

		});
		// console.log("from /ytcontent:- ",SearchedYTContent);
        console.log("okay cool...");
		const response = {
			SearchedYTContent
		};
		res.status(200).json(response);
	} catch (error) {
		console.log("Error occured during getting SearchedYTContent: ",error);
		res.status(500).json({ error: true, message: "allContent.js-> Internal Server Error" });
	}
});

app.get("/pdfcontent", async (req, res) => {
    console.log("/pdfcontent called finally...");
    try {
		const search = req.query.search || "";
	
		const SearchedPDFContent = await content.find({
			isPDF: true,
			$or: [
                { title: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } }
            ]

		});
		console.log("from /pdfcontent:- ",SearchedPDFContent);
        console.log("okay cool...");
		const response = {
			SearchedPDFContent
		};
		res.status(200).json(response);
	} catch (error) {
		console.log("Error occured during getting SearchedPDFContent: ",error);
		res.status(500).json({ error: true, message: "allContent.js-> Internal Server Error" });
	}
})

app.get("/detailedcontent", async (req,res) => {
    console.log("/detailedcontent called finally...");
    try {
        console.log("req.query from /detailedcontent/:id::::",req.query);
        const contentId = req.query.id;    
        const SearchedDetailedContent = await content.find({_id: contentId});
        console.log("SearchedDetailedContent====",SearchedDetailedContent);
        res.status(200).json(SearchedDetailedContent);
    } catch (error) {
        console.log("Error occured from /detailedcontent: ",error);
		res.status(500).json({ error: true, message: "/detailedcontent-> Internal Server Error" });
    }
})







app.listen(5000, ()=>{
    console.log("server started")
})