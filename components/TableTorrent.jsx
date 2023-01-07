import { nanoid } from "nanoid";
import Pagination from "./Pagination";
const TableTorrent = ({ torrentList }) => {
  const values = torrentList.map((torrent) => (
    <tr key={nanoid()}>
      <td>
        <a
          href={torrent.magnet || torrent.link || torrent.desc}
          className="underline ml-5"
        >
          {torrent.title}
        </a>
      </td>
      <td>{torrent.seeds || "-"}</td>
      <td>{torrent.peers || "-"}</td>
      <td>{torrent.size || "-"}</td>
    </tr>
  ));
  return (
    <>
      <h1 className="bg-indigo-200 text-center font-bold text-3xl">
        Torrent List
      </h1>
      <table className="table-auto w-full  rounded-md">
        <thead className="bg-indigo-400 mt-4">
          <tr className="text-center">
            <th>Title</th>
            <th>Seeds</th>
            <th>Peers</th>
            <th>Size</th>
            <th />
          </tr>
        </thead>
        <Pagination
          itemsperpage={6}
          nocolumns={5}
          items={values}
          pagesspan={10}
        />
      </table>
    </>
  );
};

export default TableTorrent;
