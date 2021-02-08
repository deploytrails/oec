import React, { useState, useEffect } from "react";
import * as TABLE from "../../components/dashboards/styles/table.styles";
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
      <div
        className="float-left"
        css={css`
          margin-bottom: 5px;
          margin-top: 10px;
        `}
      >
        <label htmlFor="search">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none "
            onChange={(e) => searchFilterFunction(e.target.value)}
          />
        </label>
      </div>
      {toolBar && <div className="float-right">{toolBar()}</div>}
      <TABLE.TableWrapper
        css={css`
          margin-top: 20px;
        `}
      >
        <TableTh thValues={thValues} />
        <TABLE.TableTbody>
          <TableTr
            tdValues={tdValues}
            data={currentPosts}
            pageNumber={currentPage}
          />
        </TABLE.TableTbody>
      </TABLE.TableWrapper>
      <Pagination
        countPerPage={countPerPage}
        totalRecs={filteredData?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </React.Fragment>
  );
};

export default TableWrap;
