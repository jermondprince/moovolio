import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import reels3 from "../img/reels3.jpg";

const SignUp = ({ signUp }) => {
  //State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="w-full h-screen">
        <img
          className="absolute w-full h-full object-cover"
          src={reels3}
          alt="/"
        />

        <section className="fixed w-full px-4 py-52 z-50">
          <div className="flex justify-center items-center  max-w-[450px] h-[600px] m-auto bg-black/75 text-white rounded-xl">
            <div className="max-w-[420px] py-16 px-8">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form onSubmit={handleSubmit} className="flex flex-col py-4">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 w-[320px] my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 w-[320px] my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-[#ff833c] py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-center items-center text-sm">
                  <p className="py-8">
                    <span className="text-gray-600">
                      Already have an account?
                    </span>{" "}
                    <Link to="/login">Sign In</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignUp;
