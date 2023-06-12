import React,{useState} from "react";

const Utube = () => {


  const useremail = "harshmavani06@gmail.com"



  const [title, setTitle] = useState("");
  const handelTitle = (e) =>{
    setTitle(e.target.value)
    console.log(title)
  }
  const [discription, setDiscription] = useState("");
  const handelDiscription = (e) =>{
    setDiscription(e.target.value)
    console.log(discription)
  }
  const [ytlink, setYtlink] = useState("");
  const handelYtlink = (e) =>{
    setYtlink(e.target.value)
    console.log(ytlink)
  }


  const videoUpload = async(e)=>{

    console.log("function callled")
    e.preventDefault();

    const res = await fetch("http://localhost:5000/ytvideo",{
      method: 'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
          "owner":useremail,
          "title":title,
          "discription":discription,
          "ytlink":ytlink,
          "isYT":true,
          "isPDF":false,
          "like":0,
          "dislike":0

      })

    })
    const data = res.json();
    if(res.status===200){
      alert("Content uploaded successfully")
    }
    else{
      alert("something went wrong")
    }
    console.log(data)

  }



  



  return (
    <div style={{ background: "linear-gradient(to right, #fde047, #fb923c)" }}>
      <div style={{ display: "flex", "flex-direction": "row" }}>
        <div style={{ flex: "1", "padding-top": "30px" }}>
          <div style={{ padding: "48px" }}>
            <div>
              <h1
                style={{
                  "font-size": "3rem",
                  "font-weight": "900",
                  "padding-left": "1rem",
                }}
              >
                Get your new{" "}
                <span style={{ "font-weight": "900", color: "#b91c1c" }}>
                  Income
                </span>{" "}
                source!!!
              </h1>
            </div>
            <div>
              <h3
                style={{
                  "font-size": "1.125rem",
                  "font-weight": "900",
                  "padding-left": "1rem",
                  "padding-top": "2rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </h3>
            </div>
            <div style={{ "padding-top": "75px" }}>
              <h1
                style={{
                  "font-size": "2.5rem",
                  "font-weight": "900",
                  "padding-left": "1rem",
                }}
              >
                Upload your valuable content Here and,
              </h1>
              <h1
                style={{
                  "font-size": "2.5rem",
                  "font-weight": "900",
                  padding: "1rem",
                }}
              >
                <span style={{ color: "#047857" }}>Earn Money</span> 🤑🤑.
              </h1>
              <hr style={{ border: "1px solid #000000" }} />
            </div>
          </div>
        </div>
        <div style={{ flex: "1", "padding-top": "3.5rem" }}>
          <div>
            <div
              style={{
                "justify-content": "center",
                "align-items": "center",
                display: "flex",
                "flex-direction": "column",
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  backgroundColor: "#F97316",
                  border: "2px solid #6B7280",
                  borderRadius: "0.5rem",
                  gap: "1rem",
                  height: "fit-content",
                  padding: "2rem",
                  marginTop: "3rem",
                }}
              >
                <section style={{ marginTop: "0.5rem" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <form action="">
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label
                          style={{
                            color: "#000000",
                            fontWeight: "500",
                            paddingBottom: "0.5rem",
                            fontSize: "1rem",
                          }}
                        >
                          Add Title of your content :
                        </label>
                        <input onChange={handelTitle}
                          style={{
                            border: "1px solid #1F2937",
                            borderRadius: "0.75rem",
                            fontSize: "1rem",
                            padding: "0.5rem",
                            width: "24rem",
                          }}
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Add Title"
                        />

                        <label
                          style={{
                            paddingTop: "0.5rem",
                            fontWeight: "500",
                            paddingBottom: "0.5rem",
                            fontSize: "1rem",
                          }}
                        >
                          Description :
                        </label>
                        <textarea onChange={handelDiscription}
                          id="desc"
                          name="desc"
                          rows={6}
                          cols={30}
                          style={{
                            border: "1px solid #1F2937",
                            borderRadius: "0.75rem",
                            fontSize: "1rem",
                            padding: "0.5rem",
                            width: "24rem",
                          }}
                          placeholder="Add Description"
                        />

                        <label
                          style={{
                            paddingTop: "0.5rem",
                            fontWeight: "500",
                            paddingBottom: "0.5rem",
                            fontSize: "1rem",
                          }}
                        >
                          Add YouTube Link :
                        </label>
                        <textarea onChange={handelYtlink}
                          id="tags"
                          name="tags"
                          rows={3}
                          cols={30}
                          style={{
                            border: "1px solid #1F2937",
                            borderRadius: "0.75rem",
                            fontSize: "1rem",
                            padding: "0.5rem",
                            width: "24rem",
                          }}
                          placeholder="Add YouTube Link"
                        />
                      </div>

                      <div
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <input
                          type="submit"
                          id="submit"
                          name="submit"
                          onClick={videoUpload}
                          style={{
                            backgroundColor: "yellow",
                            fontSize: "1rem",
                            padding: "0.5rem",
                            borderRadius: "0.375rem",
                            marginTop: "2rem",
                            cursor: "pointer",
                            width: "24rem",
                            
                          }}
                        />
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utube;
