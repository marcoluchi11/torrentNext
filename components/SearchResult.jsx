import Image from "next/image";
import Loading from "./Loading";

const SearchResult = ({ movies, loading }) => {
  return (
    <section className="flex flex-wrap max-w-5xl items-center justify-around">
      {loading ? <Loading /> : null}
      {movies.map((movie, index) => (
        <div className="flex flex-col items-center" key={index}>
          <Image
            className="rounded-xl"
            width={300}
            height={300}
            alt="holis"
            src={movie.Poster}
          />
          <h2 className="text-center text-white font-bold">{movie.Title}</h2>
        </div>
      ))}
    </section>
  );
};

export default SearchResult;
