import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const ResponsiveNavbar = ({ user, logOut }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {screenWidth > 640 ? (
        <Navbar user={user} logOut={logOut} />
      ) : (
        <MobileNavbar user={user} logOut={logOut} />
      )}
    </>
  );
};

export default ResponsiveNavbar;
