import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ torrentList }) {
  return (
    <>
      {torrentList && (
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div>
              <h2 className="text-2xl font-semibold leading-tight text-center">
                Torrent List
              </h2>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-justify  text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">
                        Seeds
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Peers
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Size
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {torrentList.map((torrent) => (
                      <tr key={nanoid()}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div>
                              <Link href={torrent.link || torrent.magnet}>
                                <p className="text-gray-900 whitespace-no-wrap underline">
                                  {torrent.title}
                                </p>
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap rounded-full text-center bg-green-200 ">
                            {torrent.seeds}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                          <p className="text-gray-900 bg-red-200 rounded-full text-center whitespace-no-wrap">
                            {torrent.peers}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex justify-center items-center">
                          <p className=" bg-gray-300 rounded-full px-4">
                            {torrent.size}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function PaginatedItems({ itemsPerPage, torrentList }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const torrentListSliced = torrentList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(torrentListSliced.length / itemsPerPage);
  const handlePageClick = (event) => {
    console.log((event.selected * itemsPerPage) % torrentListSliced.length);
    const newOffset =
      (event.selected * itemsPerPage) % torrentListSliced.length;
    setItemOffset(newOffset);
  };

  return (
    <div classNameName="flex flex-col items-center">
      <Items torrentList={torrentList} />
      <ReactPaginate
        classNameName="flex mt-5 w-full justify-center"
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        paaeclAssNameName=" mx-4"
        acaiveclAssNameName="text-indigo-200 cursor-text"
        paaeLinkclAssNameName="border-2 border-gray-400 p-2  "
        neatclAssNameName="bg-indigo-200 rounded-md p-1"
        praviousclAssNameName="bg-indigo-200 rounded-lg p-1"
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
