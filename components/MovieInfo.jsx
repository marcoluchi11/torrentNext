import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";

const MovieInfo = ({ result }) => {
  const {
    Title,
    Genre,
    Plot,
    Year,
    Director,
    Writer,
    Awards,
    Language,
    Poster,
    Ratings,
    Runtime,
    Actors,
  } = result;
  console.log(result);
  return (
    <>
      <div className="w-2/4 flex justify-center  text-black">
        <Image
          className="rounded-xl mx-10"
          width={400}
          height={100}
          src={Poster}
          alt={Title}
        />
      </div>
      <div className="flex flex-col justify-between items-center w-3/4 lg:w-full">
        <div className="flex flex-col w-full">
          <h1 className="text-4xl tracking-wide w-full md:text-left text-center my-3">
            {Title}
          </h1>
          <h3 className="text-xl w-full border-gray-500 border-b-2 py-2 ">
            {Year} | {Runtime}
            <span className="w-fit block text-lg px-4 rounded-full  border-2 border-black">
              {Genre}
            </span>
          </h3>
        </div>
        <div className="w-full rounded m-5">
          <h3 className="text-xl font-bold mt-5">Plot</h3>
          <p className="text-justify w-4/5 mb-5 ">{Plot}</p>
        </div>

        <div className="text-justify w-full">
          <h3 className="text-2xl font-bold">Director</h3>

          <p>{Director}</p>
        </div>

        <div className="text-justify w-full my-3 hidden md:block">
          <h3 className="text-2xl font-bold">Writer</h3>
          <p className="mt-1">{Writer}</p>
        </div>
        <div className="text-justify w-full my-3 md:block">
          <h3 className="text-2xl font-bold">Cast</h3>
          <p className="mt-1">{Actors}</p>
        </div>
        <div className="text-justify w-full mb-5 hidden md:block">
          <h3 className="text-2xl font-bold">Language</h3>
          <p className="mt-1">{Language}</p>
        </div>
        <div className="text-left w-full mb-5 mt-3 md:mt-0 mx-0">
          <h3 className="text-2xl font-bold mb-3">Awards</h3>
          <p className=" bg-yellow-400 p-3 lg:w-1/4 w-1/3 rounded-md m-0">
            {Awards}
          </p>
        </div>
        <div className="text-justify w-full mb-5 rating">
          <h3 className="text-2xl font-bold mb-2">Ratings</h3>
          {Ratings.map((rating) => (
            <div className="mb-2 w-full rounded-md" key={nanoid()}>
              <h2 className="w-3/4">{rating.Source}</h2>
              <p className="w-1/3 rounded-full px-2">{rating.Value}</p>
            </div>
          ))}
        </div>

        <Link href="/" className="w-full flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-5 mx-3">
            Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default MovieInfo;
