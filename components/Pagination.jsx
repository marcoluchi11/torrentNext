import ReactNextPaging from "react-next-paging";
const buttonStyles = {
  border: "1px solid #ccc",
  color: "#000",
  background: "#818CF8",
  fontSize: "1em",
  padding: 6,
  margin: 5,
  width: 60,
};

const Pagination = ({ itemsperpage, nocolumns, items, pagesspan }) => {
  return (
    <ReactNextPaging
      itemsperpage={itemsperpage}
      nocolumns={nocolumns}
      items={items}
      pagesspan={pagesspan}
    >
      {({
        getBackButtonProps,
        getFastBackButtonProps,
        getFwdButtonProps,
        getFastFwdButtonProps,
        getSelPageButtonProps,
        nopages,
        inipagearray,
        pagesforarray,
        currentpage,
        noitems,
        initialitem,
        lastitem,
        goBackBdisabled,
        goFastBackBdisabled,
        goFwdBdisabled,
        goFastFwdBdisabled,
      }) => (
        <tbody className="bg-indigo-200 text-center">
          {items.slice(initialitem, lastitem).map((item, index) => {
            return item;
          })}
          {noitems > 0
            ? [
                <tr key={"pagingrow" + 100} className="">
                  <td colSpan={nocolumns} className="text-center">
                    <button
                      style={buttonStyles}
                      {...getFastBackButtonProps()}
                      disabled={goFastBackBdisabled}
                    >
                      {"<<"}
                    </button>
                    <button
                      style={buttonStyles}
                      {...getBackButtonProps()}
                      disabled={goBackBdisabled}
                    >
                      {"<"}
                    </button>
                    {Array.from(
                      { length: pagesforarray },
                      (v, i) => i + inipagearray
                    ).map((page) => {
                      return (
                        <button
                          className="md:w-10 w-14 border-solid border-2 border-indigo-600 m-1"
                          key={page}
                          {...getSelPageButtonProps({ page })}
                          disabled={currentpage === page}
                        >
                          {page}
                        </button>
                      );
                    })}
                    <button
                      style={buttonStyles}
                      {...getFwdButtonProps()}
                      disabled={goFwdBdisabled}
                    >
                      {">"}
                    </button>
                    <button
                      style={buttonStyles}
                      {...getFastFwdButtonProps()}
                      disabled={goFastFwdBdisabled}
                    >
                      {">>"}
                    </button>
                  </td>
                </tr>,
              ]
            : null}
        </tbody>
      )}
    </ReactNextPaging>
  );
};

export default Pagination;
