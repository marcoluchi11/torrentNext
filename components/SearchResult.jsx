import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { TorrentContext } from "../context/context";

const SearchResult = ({ movies }) => {
  const { setLoading } = useContext(TorrentContext);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  return (
    <section className="flex flex-wrap max-w-5xl items-center justify-around">
      {movies.map((movie) => {
        if (movie.Poster === "N/A") {
          return null;
        }
        return (
          <div
            className="flex flex-col items-center"
            key={nanoid()}
            onClick={() => handleClick()}
          >
            <Link href={`/title/${movie.imdbID}`}>
              <Image
                className="rounded-xl hover:opacity-30"
                width={300}
                height={300}
                alt={movie.Title}
                src={movie.Poster}
              />
              <h2 className="text-center text-white font-bold">
                {movie.Title}
              </h2>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default SearchResult;
