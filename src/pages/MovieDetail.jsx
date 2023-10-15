import React from "react";
import { getById } from "../hooks/useFetch";
import { useLocation, Link } from "react-router-dom";
import Loader from "../components/Loader";

function MovieDetail() {
  const id = useLocation().pathname.slice(13);
  console.log(id);
  const { data, error, isPending } = getById(id);
  return (
    <div className="align-element">
      {isPending && <Loader />}
      {error && (
        <h1 className="text-2xl text-center text-red-600 font-extrabold">
          {error}
        </h1>
      )}
      {data && (
        <div className="shadow-xl my-20 mx-auto rounded-[8px] desktop:w-[900px] laptop:my-18 tablet:my-15">
          <figure>
            <img
              srcSet={data.backdrop.url}
              alt={`${data.alternativeName} movie image`}
            />
          </figure>
          <div className="card-body tablet:px-5 laptop:px-8 desktop:px-10">
            <h2 className="card-title font-bold text-3xl mx-auto  tablet:text-2xl">
              {data.alternativeName}
            </h2>
            <p className="text-xl italic  tablet:text-[13px]">
              <span>Year: </span> <span>{data.year}y</span>
            </p>
            <p className="mb-3">
              <span className="font-bold block italic">About Film:</span>
              <span className="pl-3  tablet:text-[13px]">
                {data.description}
              </span>
            </p>
            <p>
              <span className="font-bold">Budget: </span>
              {data.budget.value}
              {data.budget.currency}
            </p>
            {data.audience && (
              <div>
                <h1 className="font-bold">Audience: </h1>
                {data.audience.map((adn) => {
                  return (
                    <div key={adn.country}>
                      <span className="font-semibold ml-2">{adn.country}:</span>{" "}
                      <span className="italic">{adn.count} times</span>
                    </div>
                  );
                })}
              </div>
            )}
            <div className="card-actions justify-center  items-center">
              <h1>Countries:</h1>
              {data.countries.map((country) => {
                return (
                  <div className="badge badge-outline" key={country.name}>
                    {country.name}
                  </div>
                );
              })}
            </div>
            <div className="card-actions justify-center  items-center">
              <h1>Genres: </h1>
              {data.genres.map((genre) => {
                return (
                  <div className="badge badge-outline" key={genre.name}>
                    {genre.name}
                  </div>
                );
              })}
            </div>
            <div className="card-actions justify-end">
              <Link className="btn btn-secondary" to="/">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
