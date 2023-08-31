import axios from "axios";
import React, { useEffect, useState } from "react";

const RowSection = ({ title, fetchURL }) => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setFilms(response.data.results);
    });
  }, [fetchURL]);
  console.log(films);
  return (
    <div>
      <h1 className="text-white p-4 fond-bold md:text-xl">{title}</h1>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {films.map((item, id) => (
            <div
              key={id}
              className="relative p-2 inline-block w-[160px] sm:w-[200px] md:w-[240px] cursor-pointer"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-1 text-white">
                <p>{}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RowSection;
