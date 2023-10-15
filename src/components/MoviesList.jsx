import React from "react";
import { getMoviesByName } from "../hooks/useFetch";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../hooks/useContextGlobal";

function MoviesList() {
  const { data, error, isPending } = getMoviesByName(" ");
  const { color } = useContextGlobal().state;
  data && console.log(data.docs[1]);
  return (
    <>
      <div className="mb-10">
        <h1
          className="text-2xl text-slate-700 font-semibold mb-6  rounded-[3px] text-center tablet:text-xl"
          style={{ backgroundColor: color }}
        >
          Recommended for you
        </h1>{" "}
        {isPending && <Loader />}
        {error && (
          <h1 className="text-2xl text-center text-red-600 font-extrabold">
            {error}
          </h1>
        )}
        <ul className="grid grid-cols-1 desktop:gap-5 desktop:gap-y-[50px] desktop:grid-cols-3 laptop:grid-cols-2 ">
          {data &&
            data.docs.map((item) => {
              return (
                <li
                  key={item.id}
                  className="card w-96 bg-base-100 shadow-xl hover-element tablet:mx-auto tablet:w-full tablet:mb-4"
                >
                  <Link to={`movie-detail/${item.id}`}>
                    <figure>
                      <img
                        className="rounded-[11px]"
                        srcSet={item.backdrop}
                        alt="Movie Backdrop Image"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title tablet:text-[15px]">
                        {item.alternativeName}
                        <div className="badge badge-secondary">{item.year}</div>
                      </h2>
                      <p className="tablet:text-[11px]">
                        {item.description.substring(0, 130)}...
                      </p>
                      <div className="card-actions justify-end">
                        {item.countries.map((genre) => {
                          return (
                            <div
                              key={genre}
                              className="badge badge-outline tablet:text-[13px]"
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
      </div>
    </>
  );
}

export default MoviesList;
