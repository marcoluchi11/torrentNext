import MovieInfo from "../../components/MovieInfo";
import Layout from "../../components/Layout";
import PaginatedItems from "../../components/Pagination";
const SingleMovie = ({ result, torrentList }) => {
  return (
    <Layout>
      <section className="bg-indigo-200  flex flex-col lg:flex-row justify-center items-center  rounded-md py-5">
        <MovieInfo result={result} torrentList={torrentList} />
      </section>
      <PaginatedItems itemsPerPage={4} torrentList={torrentList} />
    </Layout>
  );
};

export default SingleMovie;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  let torrentList = [];
  const res = await fetch(
    `http://www.omdbapi.com/?i=${id}&apikey=${process.env.API_KEY}`
  );
  const result = await res.json();

  const url = `https://us-central1-buscatutorrent.cloudfunctions.net/app/torrent/${result.Title}`;
  const data = await fetch(url);
  torrentList = await data.json();

  return { props: { result, torrentList } };
};
