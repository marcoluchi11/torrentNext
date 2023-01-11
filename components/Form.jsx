import { useState } from "react";
import Error from "./Error";
import Loading from "./Loading";
import SearchResult from "./SearchResult";

const Form = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e) => setSearch(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?s=${search}&apikey=89a340b7`
      );

      const result = await res.json();
      if (result.Response === "False") {
        setError(result.Error);
        return;
      }
      setError("");
      const { Search: response } = result;
      setLoading(false);
      setMovies(response);
      setSearch("");
    }, 3000);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center  py-10 px-5 w-screen">
          <input
            className="bg-gray-200 rounded-md w-full md:w-2/4 border-none font-italic mb-6 p-2 leading-tight focus:outline-none"
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Search your movies or show..."
            aria-label="Search"
            value={search}
            onChange={handleChange}
          />
          {error && <Error message={error} />}
          <button
            className="bg-blue-500 flex justify-center items-center w-full hover:bg-teal-700 text-md rounded-md text-white font-bold text-xl p-2 md:w-2/4 "
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            Search
          </button>
        </div>
      </form>
      {loading && <Loading />}
      {movies.length ? <SearchResult movies={movies} /> : null}
    </>
  );
};

export default Form;
