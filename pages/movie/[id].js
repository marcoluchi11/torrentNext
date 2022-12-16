import MovieInfo from "../../components/MovieInfo";
import Layout from "./../../components/Layout";
const SingleMovie = ({ result }) => {
  return (
    <Layout>
      <section className="bg-indigo-200  flex flex-col md:flex-row justify-center items-center  rounded-md py-5">
        <MovieInfo result={result} />
      </section>
    </Layout>
  );
};

export default SingleMovie;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=89a340b7`);

  const result = await res.json();

  return { props: { result } };
};
