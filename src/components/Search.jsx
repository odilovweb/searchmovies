import React, { useState } from "react";
import { FaSearchengin } from "react-icons/fa6";
import { getMoviesByName } from "../hooks/useFetch";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../hooks/useContextGlobal";
function Search() {
  const { color } = useContextGlobal().state;
  const [value, setValue] = useState(null);
  const [submit, setSubmit] = useState(null);
  const { data, error, isPending } = getMoviesByName(submit);

  return (
    <>
      <form className="py-5 ">
        <div className="flex">
          <label className="mr-5">
            <input
              type="text"
              placeholder="Search for the movie you like..."
              className="w-100 w-72 input input-secondary max-[360px]:w-full"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </label>
          <button
            className="text-3xl hover:scale-110"
            onClick={(e) => {
              e.preventDefault();
              setSubmit(value);
            }}
          >
            <FaSearchengin />
          </button>
        </div>
        {value && <p className="mt-1 text-green-500 ml-1">Click enter</p>}
      </form>
      {submit && (
        <div>
          {isPending && <Loader />}
          {error && (
            <h1 className="text-2xl text-center text-red-600 font-extrabold">
              {error}
            </h1>
          )}
          {data && (
            <>
              <h1
                className="text-2xl text-slate-800 rounded-[3px] font-semibold text-center my-5 py-1 tablet:text-xl"
                style={{ backgroundColor: color }}
              >
                Search Result
              </h1>
              <ul className="grid grid-cols-1 desktop:gap-5 laptop:gap-8 desktop:gap-y-[50px] desktop:grid-cols-3 laptop:grid-cols-2">
                {data.docs.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="card w-96 bg-base-100 shadow-xl hover-element tablet:mx-auto tablet:w-[330px] tablet:mb-4 max-[500px]:w-full"
                    >
                      <Link to={`movie-detail/${item.id}`}>
                        <figure>
                          <img
                            srcSet={item.backdrop}
                            className="rounded-[11px]"
                            alt="Movie Backdrop Image"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title  tablet:text-[15px]">
                            {item.alternativeName}
                            <div className="badge badge-secondary  tablet:text-[11px]">
                              {item.year}
                            </div>
                          </h2>
                          <p className="desktop:text-[15px] laptop:text-[13px] tablet:text-[11px]">
                            {item.description.substring(0, 130)}...
                          </p>
                          <div className="card-actions justify-end">
                            {item.countries.map((genre) => {
                              return (
                                <div
                                  key={genre}
                                  className="badge badge-outline  tablet:text-[13px]"
                                >
                                  {genre}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      )}
      <br />
      <br />
    </>
  );
}

export default Search;
