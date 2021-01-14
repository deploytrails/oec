import React, { useState, useEffect } from "react";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import css from "@emotion/css";
import TableTr from "./TableTr";
import TableTh from "./TableTh";
import Pagination from "./pagination";

const TableWrap = ({ thValues, tdValues, data }) => {
  const [countPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * countPerPage;
  const indexOfFirstPost = indexOfLastPost - countPerPage;
  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <React.Fragment>
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
        totalRecs={data?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </React.Fragment>
  );
};

export default TableWrap;
