import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center content-center py-60">
      <h1 className="text-4xl font-bold ">Sorry , Page Not Found :(</h1>
      <h2 className="my-5 text-2xl ">Go to home 👇</h2>
      <Link className="btn btn-primary" to="/">
        Back home
      </Link>
    </div>
  );
}

export default PageNotFound;
