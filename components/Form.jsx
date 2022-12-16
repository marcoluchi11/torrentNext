import { useState } from "react";
import Loading from "./Loading";
import SearchResult from "./SearchResult";
const Form = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => setSearch(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?s=${search}&apikey=89a340b7`
      );
      const { Search: response } = await res.json();
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
          <button
            className="bg-blue-500 w-full hover:bg-teal-700 text-md rounded-md text-white font-bold text-xl p-2 md:w-2/4"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>

      {movies.length ? (
        <SearchResult movies={movies} loading={loading} />
      ) : null}
    </>
  );
};

export default Form;
