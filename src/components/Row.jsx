import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID, user }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 absolute left-0 group-hover:block hidden"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative"
        >
          {movies
            ?.filter(
              (movie) =>
                movie.backdrop_path !== null && movie.media_type !== "person"
            )
            .map((movie, id) => (
              <Movie key={id} movie={movie} user={user} />
            ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 absolute right-0 group-hover:block hidden"
          size={40}
        />
      </div>
    </div>
  );
};

export default Row;
