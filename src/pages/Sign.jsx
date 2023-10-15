import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sign() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [gender, setGender] = useState("");
  const handleDelte = () => {
    localStorage.removeItem("user");
  };
  const handleSubmit = (e) => {
    const dataUser = {
      name,
      mail,
      pass,
      gender,
    };
    localStorage.setItem("user", JSON.stringify(dataUser));
  };

  return (
    <div className="align-element">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="card w-96 bg-base-100 shadow-xl my-[82px] mx-auto"
      >
        {JSON.parse(localStorage.getItem("user")) ? (
          <div className="px-3">
            <h1 className="text-2xl text-center font-bold my-4">
              {JSON.parse(localStorage.getItem("user")).name}, You are already
              signed up
            </h1>
            <h2 className="text-center text-xl font-bold mb-4">
              Enter the button 👇
            </h2>
            <Link className="btn btn-secondary w-full mb-4" to="../user">
              My Profile
            </Link>
            <Link to="/" className="btn btn-primary ml-auto mb-5">
              BAck home
            </Link>
          </div>
        ) : (
          <div className="card-body">
            <h2 className="card-title">Sign Up</h2>
            <p className="mb-3">This is necessary for wider use of the site</p>
            <label>
              <input
                type="text"
                placeholder="...@gmail.com"
                className="input input-bordered input-success w-full max-w-xs mb-3"
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
            </label>
            <label>
              <input
                required
                type="text"
                placeholder="Your name"
                className="input input-bordered input-success w-full max-w-xs mb-3"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
            <label>
              <input
                required
                type="password"
                placeholder="Create Password"
                className="input input-bordered input-success w-full max-w-xs mb-3"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </label>
            <label className="join flex justify-center mb-3">
              <input
                required
                className="join-item btn"
                type="radio"
                name="options"
                aria-label="Male"
                onClick={() => {
                  setGender("male");
                }}
              />
              <input
                required
                className="join-item btn"
                type="radio"
                name="options"
                aria-label="Female"
                onClick={() => {
                  setGender("female");
                }}
              />
            </label>
            <button className="btn btn-primary">SIgn up</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Sign;
