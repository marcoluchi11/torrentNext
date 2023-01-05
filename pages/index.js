import Image from "next/image";
import { useContext } from "react";
import Form from "../components/Form";
import Layout from "../components/Layout";
import { TorrentContext } from "../context/context";
import logo from "./../images/logoSlogan.png";

export default function Home() {
  const { loading } = useContext(TorrentContext);
  return (
    <>
      <Layout>
        <section className="flex flex-col justify-center items-center">
          <Image src={logo} alt="holis" width={500} height={500} />
          <Form />
        </section>

        {loading && (
          <div className="fixed right-10 bottom-20 z-50 text-white px-5 py-2 bg-indigo-500 rounded-md  ">
            <h1 className="">Loading {loading}...</h1>
          </div>
        )}
      </Layout>
    </>
  );
}
