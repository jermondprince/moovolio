import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-4 p-10 items-center justify-center text-white ">
        <h2>
          Welcome to <span className="text-[#ff833c]"> MOOVOLIO</span>, your
          one-stop destination for movie-watching bliss! Our app is designed to
          simplify and enhance your movie-watching experience. With the ability
          to search and save your favorite films, create watchlists, and rate
          and review movies, you'll never forget what you've seen and what's
          next on your list.
        </h2>
        <h2>
          Our app is powered by the{" "}
          <a
            className="text-[#ff833c]"
            href="https://www.themoviedb.org/?language=en-US"
            target="_blank"
          >
            Movie Database API
          </a>
          , ensuring you always have access to the latest and greatest films, as
          well as all the information you need to make informed viewing choices.
          With a user-friendly interface and easy-to-use features, you can
          quickly and easily find the perfect movie for any occasion.
        </h2>
        <h2>
          Whether you're a casual viewer or a movie buff,
          <span className="text-[#ff833c]"> MOOVOLIO</span> has everything you
          need to keep track of your favorites and discover new films to enjoy.
          So why wait? Start building your movie library today and experience
          the ultimate in movie-watching convenience!
        </h2>
      </div>
    </>
  );
};

export default About;
