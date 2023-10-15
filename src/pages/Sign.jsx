import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useContextGlobal } from "../hooks/useContextGlobal";

function Sign() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [gender, setGender] = useState("");
  const { changeUser } = useContextGlobal();
  const handleSubmit = (e) => {
    const dataUser = {
      name,
      mail,
      pass,
      gender,
    };
    setName("");
    setMail("");
    setPass("");
    changeUser(dataUser);
    toast.success("You have been signed up 👍");
    localStorage.setItem("user", JSON.stringify(dataUser));
  };

  return (
    <div className="align-element">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="card bg-base-100 shadow-xl my-[82px] mx-auto w-full max-w-md"
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
            <Link to="/" className="btn btn-primary w-full mb-5 ">
              BAck home
            </Link>
          </div>
        ) : (
          <div className="card-body">
            <h2 className="card-title">Sign Up</h2>
            <p className="mb-3">This is necessary for wider use of the site</p>
            <label>
              <input
                value={mail}
                required
                type="email"
                placeholder="...@gmail.com"
                className="input input-bordered input-success w-full max-w-xs mb-3"
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
            </label>
            <label>
              <input
                value={name}
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
                value={pass}
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
            <button className="btn btn-secondary">SIgn up</button>
            <Link
              className="btn btn-primary max-w-[120px] ml-auto w-full"
              to="/"
            >
              BACK HOME
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}

export default Sign;
