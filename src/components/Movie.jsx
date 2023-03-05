import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie, user }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const movieID = doc(db, "users", `${user?.email}`);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(!saved);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      // alert("Please log in to save a movie");
      navigate("/signup");
    }
  };
  return (
    <>
      <div className="w-[240px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-full  cursor-pointer relative p-2 inline-block">
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p
            onClick={handleActive}
            className={`whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center ${
              isActive === true ? "hidden" : ""
            }`}
          >
            {movie?.title}
          </p>
          <p
            onClick={handleActive}
            className={`whitespace-normal text-[10px] md:text-sm font-bold h-full text-center flex justify-center items-center ${
              isActive === false ? "hidden " : ""
            }`}
          >
            {movie?.overview}
          </p>
          <p onClick={saveShow}>
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-gray-300" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
