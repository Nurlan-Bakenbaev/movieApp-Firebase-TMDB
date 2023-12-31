import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieRows from "./MovieRows";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
const RowSection = ({ title, fetchURL, rowId }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setFilms(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowId);
    if (slider) {
      const scrollAmount = slider.offsetWidth;
      if (slider.scrollLeft - scrollAmount <= 0) {
        slider.scrollLeft = slider.scrollWidth;
      } else {
        slider.scrollLeft -= scrollAmount;
      }
    }
  };
  const slideRight = () => {
    const slider = document.getElementById("slider" + rowId);
    if (slider) {
      const scrollAmount = slider.offsetWidth;
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div>
      <h1 className="text-white p-4 fond-bold md:text-xl">{title}</h1>
      <div className="relative flex items-center group">
        <button onClick={slideLeft}>
          <ChevronLeftIcon
            fontSize="large"
            className="text-[orange] cursor-pointer opacity-0 group-hover:opacity-100 z-10 "
          />
        </button>
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {films.map((item, id) => (
            <MovieRows key={id} item={item} />
          ))}
        </div>
        <ChevronRightIcon
          onClick={slideRight}
          fontSize="large"
          className="text-[orange] cursor-pointer opacity-0  group-hover:opacity-100 z-10"
        />
      </div>
    </div>
  );
};

export default RowSection;
