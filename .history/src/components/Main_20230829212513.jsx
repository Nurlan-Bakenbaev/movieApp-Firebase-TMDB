import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
const Main = () => {
  const [movie, setMovies] = useState([]);
useEffect(()=>{
axios.get(requests.requestPopular).then((response)=>{
    setMovies(response.data)
})
},[])
console.log()
  return <div>Main</div>;
};

export default Main;
