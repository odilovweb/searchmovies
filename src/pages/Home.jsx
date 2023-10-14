import React from "react";
import Search from "../components/Search";
import MoviesList from "../components/MoviesList";

function Home() {
  return (
    <div className="align-element">
      <Search />
      <MoviesList />
    </div>
  );
}

export default Home;
