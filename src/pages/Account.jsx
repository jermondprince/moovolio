import React from "react";
import SavedShows from "../components/SavedShows";
import reels5 from "../img/reels5.jpg";

const Account = ({ user }) => {
  return (
    <>
      <div className="w-full text-white">
        <img className="w-full h-[350px] object-cover" src={reels5} alt="/" />
      </div>
      <SavedShows user={user} />
    </>
  );
};

export default Account;
