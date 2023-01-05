import TorrentProvider from "../context/context";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <TorrentProvider>
        <Component {...pageProps} />
      </TorrentProvider>
    </>
  );
}
