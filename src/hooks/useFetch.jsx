import { useEffect, useState } from "react";

const headers = {
  "X-API-KEY": "FB3K7DR-7FBMYM5-H2Y9YGR-BVC2AV0",
};

function getMoviesByName(name, page = 1, limit = 15) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(
          "https://api.kinopoisk.dev/v1.2/movie/search?" +
            new URLSearchParams({
              query: name,
              page: page,
              limit: limit,
            }),
          {
            headers: headers,
          }
        );

        if (!req.ok) {
          throw new Error(req.statusText);
        }

        const movies = await req.json();
        setData(movies);
        setIsPending(false);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
        setIsPending(false);
      }
    };
    fetchData();
  }, [name]);
  return { data, error, isPending };
}

function getById(id, page = 1, limit = 1) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch("https://api.kinopoisk.dev/v1.3/movie" + id, {
          headers: headers,
        });

        if (!req.ok) {
          throw new Error(req.statusText);
        }

        const movies = await req.json();
        setData(movies);
        setIsPending(false);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
        setIsPending(false);
      }
    };
    fetchData();
  }, [name]);
  return { data, error, isPending };
}

export { getMoviesByName, getById };
