import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";
import axios from "axios";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const base_url = "http://localhost:5000/ytcontent";
  const fetchData = async (value) => {
    try {
        console.log("value:::",value);
        const url = `${base_url}?search=${value}`;
        let { data } = await axios.get(url);
        console.log("from fetchData<-SearchBar.jsx:-",data);
        const results = data.SearchedYTContent;       
        setResults(results);
            
      } catch (error) {
        console.log("error from useEffect<-ListPage.js :- ", error);
      }

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     console.log("resssssssssp:",response);
    //     return response.json()})
    //   .then((json) => {
    //     console.log("from fetchData<-SearchBar.jsx:-",json)
    //     const results = json.filter((user) => {
    //         console.log("userrr: ", user);
    //       return (
    //         value &&
    //         user &&
    //         user.name &&
    //         user.name.toLowerCase().includes(value)
    //       );
    //     });
    //     setResults(results);
    //   });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};