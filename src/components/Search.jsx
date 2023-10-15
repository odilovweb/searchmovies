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
      <form className="py-5">
        <div className="flex">
          <label className="mr-5">
            <input
              type="text"
              placeholder="Search for the movie you like..."
              className="w-100 w-72 input input-secondary"
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
                className="text-2xl text-slate-800 rounded-[3px] font-semibold text-center my-5 py-1"
                style={{ backgroundColor: color }}
              >
                Search Result
              </h1>
              <ul className="grid grid-cols-1 gap-5 gap-y-[50px] desktop:grid-cols-3 laptop:grid-cols-2">
                {data.docs.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="card w-96 bg-base-100 shadow-xl hover-element tablet:mx-auto"
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
                          <h2 className="card-title">
                            {item.alternativeName}
                            <div className="badge badge-secondary">
                              {item.year}
                            </div>
                          </h2>

                          <p>{item.description.substring(0, 130)}...</p>
                          <div className="card-actions justify-end">
                            {item.countries.map((genre) => {
                              return (
                                <div
                                  key={genre}
                                  className="badge badge-outline"
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
