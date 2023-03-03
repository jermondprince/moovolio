import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "./Row";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [searching, setSearching] = useState("");
  const [search, setSearch] = useState("");
  const [deleteSearch, setDeleteSearch] = useState(false);
  const [movies, setMovies] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const key = "63068768c76833b0b434e24b7f444698";
  const searchRequest = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${search}&page=1&include_adult=false`;

  useEffect(() => {
    if (search === undefined || search === null || search === "") {
    } else {
      axios.get(searchRequest).then((response) => {
        setMovies(
          response.data.results.filter((movie) => movie.backdrop_path !== null)
        );
      });
    }
  }, [search, searchRequest]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearch(searching);
      setDeleteSearch(!deleteSearch);
    } else {
      setSearch("");
    }
  };
  const searchButton = () => {
    if (search !== searching) {
      setSearch(searching);
    } else {
      setSearch("");
    }
  };
  const deleteSearchButton = () => {
    setSearch("");
    setSearching("");
    setMovies([]);
  };

  return (
    <>
      <div className="w-full">
        <div className=" absolute top-[20%] left-[50%] min-[320px]:ml-[-100px] min-[425px]:ml-[-190px] sm:ml-[-260px] md:ml-[-280px] lg:ml-[-300px]">
          <div className="flex items-center relative">
            <input
              onChange={(e) => setSearching(e.target.value)}
              onKeyDown={handleKeyDown}
              className="p-4 min-[320px]:[200px] min-[425px]:w-[380px] sm:w-[420px] md:w-[460px] lg:w-[500px]"
              type="text"
              value={searching}
              placeholder={
                screenWidth > 424
                  ? "search movie, tv show, etc..."
                  : "search..."
              }
            />
            {screenWidth > 640 ? (
              <button
                onClick={searchButton}
                className="p-4 w-[100px] rounded bg-[#ff833c] text-white "
              >
                Search
              </button>
            ) : null}
            <div
              onClick={() => setDeleteSearch(!deleteSearch)}
              className="flex justify-center items-center"
            >
              {deleteSearch === false ? (
                <AiOutlineSearch
                  onClick={searchButton}
                  className={`text-3xl absolute right-0 mr-2 ${
                    screenWidth > 640 ? "hidden" : ""
                  }`}
                />
              ) : (
                <AiOutlineClose
                  id="delete-search"
                  onClick={deleteSearchButton}
                  className={`text-3xl absolute right-0 mr-2 ${
                    screenWidth > 640 ? "hidden" : ""
                  }`}
                />
              )}
            </div>
          </div>
        </div>
        {search === "" || search === undefined || search === null ? (
          ""
        ) : (
          <div className="w-full absolute top-[30%] text-center bg-black/60 lg:h-[230px] md:h-[210px]">
            <Row rowID="6" fetchURL={searchRequest} />
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
