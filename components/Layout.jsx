import Head from "next/head";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="bg-gray-600 min-h-screen">
      <Head>
        <title>Busca Tu Torrent</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
