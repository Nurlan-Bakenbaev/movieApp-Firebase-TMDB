import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useState, useEffect } from "react";
import { UserAuth } from "./context/AuthContext";
import { db } from "./firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth;
  useEffect(() => {
    onSnapshot(
      doc(db, "users", `${user?.email}`, (doc) => {
        setMovies(doc.data()?.savedMovies);
      })
    );
  }, [user?.email]);

  const slideLeft = () => {
    const slider = document.getElementById("slider");
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
    const slider = document.getElementById("slider");
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
    <>
      <h1 className="text-white p-4 fond-bold md:text-xl">Movies</h1>
      <div className="relative flex items-center group">
        <button onClick={slideLeft}>
          <ChevronLeftIcon
            fontSize="large"
            className="text-[orange] cursor-pointer opacity-0 group-hover:opacity-100 z-10 "
          />
        </button>
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
        {movies.map(())}
        </div>
        <ChevronRightIcon
          onClick={slideRight}
          fontSize="large"
          className="text-[orange] cursor-pointer opacity-0  group-hover:opacity-100 z-10"
        />
      </div>
    </>
  );
};

export default SavedShows;
