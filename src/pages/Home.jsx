import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import SearchBar from "../components/SearchBar";
import requests from "../Requests";

const Home = ({ user }) => {
  return (
    <div className="scrollbar-hide">
      <Main />
      <SearchBar />
      <Row
        user={user}
        rowID="1"
        title="Upcoming"
        fetchURL={requests.requestUpcoming}
      />
      <Row
        user={user}
        rowID="2"
        title="Popular"
        fetchURL={requests.requestPopular}
      />
      <Row
        user={user}
        rowID="3"
        title="Top Rated"
        fetchURL={requests.requestTopRated}
      />
      <Row
        user={user}
        rowID="4"
        title="Trending"
        fetchURL={requests.requestTrending}
      />
      <Row
        user={user}
        rowID="5"
        title="Horror"
        fetchURL={requests.requestHorror}
      />
    </div>
  );
};

export default Home;
