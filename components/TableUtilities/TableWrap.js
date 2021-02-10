import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import TableTr from "./TableTr";
import TableTh from "./TableTh";
import Pagination from "./pagination";

const TableWrap = ({ thValues, tdValues, data, toolBar }) => {
  const [countPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [filteredData, setFilteredData] = useState([]);
  const indexOfLastPost = currentPage * countPerPage;
  const indexOfFirstPost = indexOfLastPost - countPerPage;
  const currentPosts = filteredData?.slice(indexOfFirstPost, indexOfLastPost);

  //Search Filter Logic Implementation
  const searchFilterFunction = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setFilteredData(data);
    else {
      const filterContent = data.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setFilteredData(filterContent);
    }
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  return (
    <React.Fragment>
      <div>
        <div
          className="float-left"
          css={css`
            margin-bottom: 5px;
            margin-top: 5px;
          `}
        >
          <label htmlFor="search">
            <input
              type="text"
              id="search"
              placeholder="Search"
              className="basicInput"
              onChange={(e) => searchFilterFunction(e.target.value)}
            />
          </label>
        </div>
        {toolBar && (
          <div
            className="float-right"
            css={css`
              margin-bottom: 5px;
              margin-top: 5px;
            `}
          >
            {toolBar()}
          </div>
        )}
        <table class="content-table">
          <TableTh thValues={thValues} />
          <tbody>
            <TableTr
              tdValues={tdValues}
              data={currentPosts}
              pageNumber={currentPage}
            />
          </tbody>
        </table>
        <Pagination
          countPerPage={countPerPage}
          totalRecs={filteredData?.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </React.Fragment>
  );
};

export default TableWrap;
