import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const MobileNavbar = ({ user, logOut }) => {
  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Handle Logout
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div data-testid="mobile-navbar" className="w-full h-full relative z-[100]">
      {/* Logo  */}
      <Link className="p-4 fixed" to="/">
        <h1 className="text-[#ff833c] text-4xl font-bold cursor-pointer">
          MOOVOLIO
        </h1>
      </Link>

      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed p-4 right-0  z-[100] cursor-pointer"
      >
        {isMenuOpen === false ? (
          <AiOutlineMenu className=" text-3xl text-[#ff833c]" />
        ) : (
          <AiOutlineClose className=" text-4xl text-white" />
        )}
      </div>

      {/* Account or Home page with Login/Signup button  */}

      {user?.email ? (
        <div
          className={`bg-[#ff833c]/95  right-0 top-0 w-[320px] p-14 h-screen text-white z-50 ${
            isMenuOpen === false ? "hidden" : "fixed"
          }`}
        >
          <div className="w-full flex flex-col items-center justify-center gap-36">
            <Link
              onClick={() => {
                setIsMenuOpen(false);
              }}
              to="/"
            >
              <p className="text-white">Home</p>
            </Link>
            <Link
              onClick={() => {
                setIsMenuOpen(false);
              }}
              to="account"
            >
              <p className="text-white">Account</p>
            </Link>
            <Link
              onClick={() => {
                setIsMenuOpen(false);
              }}
              to="about"
            >
              <p className="text-white">About</p>
            </Link>

            <button
              onClick={handleLogOut}
              className="cursor-pointer text-white"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`bg-[#ff833c]/95  right-0 top-0 w-[320px] p-14 h-screen text-white z-50 ${
            isMenuOpen === false ? "hidden" : "fixed"
          }`}
        >
          <div className="w-full flex flex-col items-center justify-center gap-36">
            <Link
              onClick={() => {
                setIsMenuOpen(false);
              }}
              to="/"
            >
              <p className="text-white">Home</p>
            </Link>
            <Link
              onClick={() => {
                setIsMenuOpen(false);
              }}
              to="about"
            >
              <p className="text-white">About</p>
            </Link>
            <Link
              to="/login"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <button className="text-white">Sign In</button>
            </Link>
            <Link
              onClick={() => {
                setIsMenuOpen(false);
              }}
              to="/signup"
            >
              <button className="cursor-pointer text-white">Sign Up</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
