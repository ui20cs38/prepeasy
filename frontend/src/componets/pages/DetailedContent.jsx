import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailedContent = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const  thumbnailEmbed = (url) => {
    const regex = /youtu.be\/(\w+)/;
    const match = url.match(regex);
    const videoId = match ? match[1] : null;
    return (
      videoId
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const base_url = "http://localhost:5000/detailedcontent";
        const url = `${base_url}?id=${id}`;
        const response = await axios.get(url);
        setData(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h3>{data.title}</h3>
      <div>
        <iframe width="335px" height="189px" src={`https://www.youtube.com/embed/${thumbnailEmbed(data.link)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <span>{data.description}</span>
    </>
  );
};

export default DetailedContent;


// import axios from 'axios';
// import React from 'react';
// import { useParams } from 'react-router-dom';

// const DetailedContent = async () => {
//     const { id } = useParams();
//     console.log("id from DetailedContent.jsx is::", id);
//     const base_url = "http://localhost:5000/detailedcontent";
//     const url = `${base_url}?id=${id}`;
//     const { data } = await axios.get(url);
//     // console.log("fetched data for DETAILED-CONTENT:",data);
//     console.log("fetched DETAILED-CONTENT:",data[0].title);
//   return (
//     <h1>ok:{data[0].title}</h1>
//   )
// }

// export default DetailedContent