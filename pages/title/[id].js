import MovieInfo from "../../components/MovieInfo";
import Layout from "../../components/Layout";
import Link from "next/link";
const SingleMovie = ({ result, torrent = {} }) => {
  return (
    <Layout>
      <section className="bg-indigo-200  flex flex-col md:flex-row justify-center items-center  rounded-md py-5">
        <MovieInfo result={result} torrent={torrent} />
        <Link href="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back
          </button>
        </Link>
      </section>
    </Layout>
  );
};

export default SingleMovie;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  const res = await fetch(
    `http://www.omdbapi.com/?i=${id}&apikey=${process.env.API_KEY}`
  );
  const result = await res.json();
  const url = `https://us-central1-buscatutorrent.cloudfunctions.net/app/torrent/${result.Title}`;
  const data = await fetch(url);
  const torrent = await data.json();
  console.log(torrent);
  return { props: { result, torrent } };
};
