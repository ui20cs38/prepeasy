import * as React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { node, number } from 'prop-types';

import IconButton from '@mui/material/IconButton';
// import Button from "@mui/material/Button"
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import ThumbDownAltSharpIcon from '@mui/icons-material/ThumbDownAltSharp';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import staticContent from '../../config/ytContentDummy.js';
// import pdfContent from "../../config/pdfContent.js";
import pdfContent from "../../config/pdfContentDummy.js"
import { Tab, Tabs, Typography } from "@mui/material";
// import Search from '../search/index.jsx';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { SearchBar } from '../search/SearchBar.jsx';
import { SearchResultsList } from '../search/SearchResultsList.jsx';


function TabPanel(props) {
  const { children, value, index } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography  component={'span'} >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: node,
  index: number.isRequired,
  value: number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


  const base_url = "http://localhost:5000/ytcontent";

  function YTpanel(search, setSearch) {
   const [allContent, setAllContent] = useState([])
   const [likes, setLikes] = useState();
  useEffect(() => {
    const getYtContent = async () => {
      try {
        console.log("search:::",search);
        const url = `${base_url}?search=${search}`;
        const { data } = await axios.get(url);
        console.log("from useEffect<-ListPage.js:-",data);
        setAllContent(data.SearchedYTContent);
      } catch (error) {
        console.log("error from useEffect<-ListPage.js :- ", error);
      }
    }
    getYtContent();
  }, [search])
        
  const handleUpVote = async () => {
    
  }
  
  
  const  thumbnailEmbed = (url) => {
    const regex = /youtu.be\/(\w+)/;
    const match = url.match(regex);
    const videoId = match ? match[1] : null;
    return (
      videoId
    );
  }

  return(
  <div style={{justifyItems:"center", border:"0px solid", margin: "auto", width: "60%", padding: "10px"}}>
            <ul style={{ border:"0px solid black", display: "flex", flexWrap: "wrap"}}>            
              <Row xs={1} md={2} className="g-4">
                {allContent.map((content) => (
                    <li className='main-card' key={content._id} style={{listStyleType:"none"}}>
                      <Col  md={12}>
                        
                        <Card style={{width: "377px", height:"430px"}} >                          
                        <Link to={`/detailedcontent/${content._id}`}>
                          <Card.Body>
                          {/* <Card.Body style={{height:"350px"}}> */}
                            <Card.Title style={{fontSize:"1em"}}>{content.title}</Card.Title>
                            <div style={{ marginLeft: 'auto', paddingRight:"15px"}}>
                              <p style={{ fontSize: "13px", fontWeight: "500", color: "rgba(119, 119, 119, 0.7)", textAlign: "left" }}>
                                post by: {content.owner.length>16?content.owner.slice(0,15)+"...":content.owner.slice(0,15)}
                              </p>
                            </div>
                            <iframe width="335px" height="189px" src={`https://www.youtube.com/embed/${thumbnailEmbed(content.link)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                             
                            <Card.Text style={{marginTop:"10px"}}>
                              {content.description.length>65?content.description.slice(0,65)+"...":content.description}
                            </Card.Text>  
                          </Card.Body>    
                        </Link>

                          <Card.Footer>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width:"100%",alignItems: 'center' }}>
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <IconButton aria-label="up vote">
                                  <ThumbUpSharpIcon />
                                </IconButton>
                                <IconButton aria-label="down vote button">
                                  <ThumbDownAltSharpIcon />
                                </IconButton>
                              </div>
                              <div style={{ }}>
                                <p style={{ margin:"1px 10px 5px 3px", fontSize:"15px", fontWeight:"500", color:"rgba(119, 119, 119, 0.7)", textAlign:'right' }}>
                                  likes: {content.like}
                                </p>
                              </div>
                            </Box>
                          </Card.Footer>
                        </Card>

                      </Col>
                    </li>
                ))}
                </Row>
            </ul>
        </div>
  )
}
 function PDFpanel(search, setSearch) {
   const [pdfContent, setPdfContent] = useState([])
   useEffect(() => {
     const fetchPdfContent = async ()=>{
       try{
        const url = `${base_url}?search=${search}`;
        const { data } = await axios.get(url);
        console.log("from useEffect<-PDFpanel.js:-",data);
        setPdfContent(data.SearchedPDFContent);
       }catch(err){
           console.error(err);
       }
   };
   fetchPdfContent();
   }, [pdfContent])

   return(


  <div style={{justifyItems:"center"}}>
            <ul style={{marginLeft:"23%", width:"850px", display: "flex", flexWrap: "wrap"}}>
                {pdfContent && pdfContent.map((content) => (
                    <li className='main-card' key={content._id}>
                      <Col>
                      <Card style={{width: "377px", height:"430px"}}>                          


                      <Card.Body>
                        <Card.Title style={{fontSize:"1em"}}>{content.title}</Card.Title>
                          <div style={{ marginLeft: 'auto', paddingRight:"15px"}}>
                            <p style={{ fontSize: "13px", fontWeight: "500", color: "rgba(119, 119, 119, 0.7)", textAlign: "left" }}>
                              post by: {content.owner.length>16?content.owner.slice(0,15)+"...":content.owner.slice(0,15)}
                            </p>
                            <h2>DOWNLOAD BUTTON HERE</h2>

                          </div>
                      </Card.Body>


                      <Card.Footer>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width:"100%",alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton aria-label="up vote">
                              <ThumbUpSharpIcon />
                            </IconButton>
                            <IconButton aria-label="down vote button">
                              <ThumbDownAltSharpIcon />
                            </IconButton>
                          </div>
                          <div style={{ }}>
                            <p style={{ margin:"1px 10px 5px 3px", fontSize:"15px", fontWeight:"500", color:"rgba(119, 119, 119, 0.7)", textAlign:'right' }}>
                              likes: {content.like}
                            </p>
                          </div>
                        </Box>
                      </Card.Footer>

                        <div >
                            <h2>DOWNLOAD BUTTON HERE</h2>
                            {/* <h2>{contnent.videoTitle}</h2> */}
                        </div>

                        <div >
                          <p className='instructions'>{content.description}</p>
                        </div>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <div style={{backgroundColor:"#0000002b", borderTopLeftRadius: "10px 10px", borderTopRightRadius: "10px 10px", borderBottomLeftRadius: "10px 10px", borderBottomRightRadius: "10px 10px"}}>
                            <IconButton aria-label="up vote" >
                              <ThumbUpSharpIcon />
                            </IconButton>
                            <IconButton aria-label="down vote button">
                              <ThumbDownAltSharpIcon />
                            </IconButton>
                          </div>
                          <div style={{ marginLeft: 'auto', paddingRight:"12px"}}>
                            <p style={{ fontSize: "15px", fontWeight: "500", color: "rgba(119, 119, 119, 0.7)", textAlign: "right" }}>
                              post by: {content.postBy}
                            </p>
                          </div>
                        </Box>
                        <p style={{ margin:"1px 0 5px 3px",fontSize: "15px", fontWeight: "500", color:"rgba(119, 119, 119, 0.7)" }}>liiikes:{content.like}{/* D:{contnent.downVotes}*/}</p>
                        </Card>
                      </Col>
                    </li>
                ))}
            </ul>
        </div>
   )
}

function ListPage() {
  const [value, setValue] = React.useState(0);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [obj, setObj] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const getYtContent = async () => {
      try {
        const url = `${base_url}?search=${search}`
        const { data } = await axios.get(url);
        // console.log("from useEffect<-ListPage.js:-",data);
        setObj(data);
      } catch (error) {
        console.log("error from useEffect<-ListPage.js :- ", error);
      }
    }
    getYtContent();
  }, [search])
  
  const [results, setResults] = useState([]);
  return (
    <div className="App">
					<img src="./images/logo.png" alt="LOGO" className="logo" />
        <div className="search-bar-container"> 
          <SearchBar setResults={setResults} />
          {results && results.length > 0 && <SearchResultsList results={results} setSearch={setSearch} />}
        </div>

        <div className="body">
          <div className="table_container">
        <Box sx={{ width: '100%' }}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="YouTube videos" {...a11yProps(0)} />
                <Tab label="PDF section" {...a11yProps(1)} />
              </Tabs>
            </Box>
          </Box>
          
          <TabPanel className="YTclass" value={value} index={0}>
            {YTpanel(search, setSearch)}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {PDFpanel()}
          </TabPanel>
        </Box>
        </div>
        </div>
      </div>
  );
}

export default ListPage;



{/* <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col  md={6}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row> */}



    // ////////////////
{/* 
                            <h2>{contnent.title}</h2>
                            <div className="this is comment">
                            </div>
                        </div>

                        <img src={contnent.link} alt="thumbnail" />

                        <div >
                          <p className='instructions'>{contnent.description}</p>
                        </div>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <div style={{backgroundColor:"#0000002b", borderTopLeftRadius: "10px 10px", borderTopRightRadius: "10px 10px", borderBottomLeftRadius: "10px 10px", borderBottomRightRadius: "10px 10px"}}>
                            <IconButton aria-label="up vote" onClick={handleUpVote}>
                              <ThumbUpSharpIcon />
                            </IconButton>
                            <IconButton aria-label="down vote button">
                              <ThumbDownAltSharpIcon />
                            </IconButton>
                          </div>
                          <div style={{ marginLeft: 'auto', paddingRight:"12px"}}>
                            <p style={{ fontSize: "15px", fontWeight: "500", color: "rgba(119, 119, 119, 0.7)", textAlign: "right" }}>
                              post by: {contnent.owner}
                            </p>
                          </div>
                        </Box>
                        <p style={{ margin:"1px 0 5px 3px",fontSize: "15px", fontWeight: "500", color:"rgba(119, 119, 119, 0.7)" }}>likes:{contnent.like}</p>
                    </li>
                ))}
            </ul>
        </div>
   )
} */}

{/* <Card.Img 
                              style={{ height: "170px", width: "335px", objectFit: "cover", objectPosition: "center" }}
                              variant="top"
                              src={thumbnailData(content.link)} 
                              alt="thumbnail" 
                            /> */}