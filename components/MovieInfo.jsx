import { nanoid } from "nanoid";
import Image from "next/image";

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
  } = result;
  return (
    <>
      <div>
        <Image
          className="rounded-xl mx-10"
          width={300}
          height={300}
          src={Poster}
          alt={Title}
        />
      </div>
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-3xl">
          {Title} ({Year})
        </h1>
        <h3 className="text-xl ">{Genre}</h3>
        <p className="text-center">{Plot}</p>

        <div className="text-center">
          <h3>Director</h3>

          <p>{Director}</p>
        </div>

        <div className="text-center">
          <h3>Writer</h3>
          <p>{Writer}</p>
        </div>
        <div className="text-center">
          <h3>Language</h3>
          <p>{Language}</p>
        </div>
        <div className="text-center">
          <h3>Awards</h3>
          <p>{Awards}</p>
        </div>
        <div className="text-center">
          <h1>Ratings</h1>
          {Ratings.map((rating) => (
            <div key={nanoid()}>
              <h2>{rating.Source}</h2>
              <p>{rating.Value}</p>
            </div>
          ))}
        </div>
        <p>{Awards}</p>
      </div>
    </>
  );
};

export default MovieInfo;
