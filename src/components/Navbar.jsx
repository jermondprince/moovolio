import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, logOut }) => {
  const navigate = useNavigate();

  // Handle Logout
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      data-testid="navbar"
      className="sm:flex sm:items-center sm:justify-between p-4 w-full absolute z-[100]"
    >
      {/* Logo  */}
      <Link to="/">
        <h1 className="text-[#ff833c] text-4xl font-bold cursor-pointer">
          MOOVOLIO
        </h1>
      </Link>

      {/* Account or Home page with Login/Signup button  */}

      {user?.email ? (
        <div className="sm:flex sm:items-center sm:justify-center gap-2 text-white">
          <Link to="/">
            <p data-testid="navlink" className="text-white pr-4">
              Home
            </p>
          </Link>
          <Link to="account">
            <p className="text-white pr-4">Account</p>
          </Link>
          <Link to="about">
            <p className="text-white pr-4">About</p>
          </Link>

          <button
            onClick={handleLogOut}
            className="bg-[#ff833c] rounded cursor-pointer px-6 py-2 text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="sm:flex sm:items-center sm:justify-center gap-2 text-white">
          <Link to="/">
            <p data-testid="navlink" className="text-white pr-4">
              Home
            </p>
          </Link>
          <Link to="about">
            <p className="text-white pr-4">About</p>
          </Link>
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-[#ff833c] rounded cursor-pointer px-6 py-2 text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
