import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
const Main = () => {
  const [movies, setMovies] = useState([]);
useEffect(()=>{
axios.get(requests.requestPopular).then((response)=>{
    setMovies(response.data.results)
})
},[])
console.log(movies)

const movie = movies[Math.floor(Math.random()*movies.length)]
console.log(movies)
return <div className="w-full h_[100vh] text-white">
    <div className="w-full h-full">
        <img src='' alt={movie} />
    </div>
    </div>;
};

export default Main;