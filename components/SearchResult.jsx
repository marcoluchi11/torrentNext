import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";

const SearchResult = ({ movies }) => {
  console.log(movies[0].imdbID);
  return (
    <section className="flex flex-wrap max-w-5xl items-center justify-around">
      {movies.map((movie) => (
        <div className="flex flex-col items-center" key={nanoid()}>
          <Link href={`/title/${movie.imdbID}`}>
            <Image
              className="rounded-xl"
              width={300}
              height={300}
              alt={movie.Title}
              src={movie.Poster}
            />
            <h2 className="text-center text-white font-bold">{movie.Title}</h2>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default SearchResult;
