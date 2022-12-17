import Image from "next/image";
import Form from "../components/Form";
import Layout from "../components/Layout";
import logo from "./../images/logoSlogan.png";
export default function Home() {
  return (
    <>
      <Layout>
        <section className="flex flex-col justify-center items-center ">
          <Image src={logo} alt="holis" width={500} height={500} />
          <Form />
        </section>
      </Layout>
    </>
  );
}
