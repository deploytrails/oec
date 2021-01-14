import React from "react";
import css from "@emotion/css";

const Pagination = ({ countPerPage, totalRecs, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecs / countPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav
      css={css`
        position: relative;
        top: 100%;
        right: 0;
        width: 20%;
        margin-top: 20px;
        margin-bottom: 5%;
      `}
    >
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => paginate(number)}
              className="page-link"
              css={
                currentPage === number
                  ? css`
                      color: black;
                      float: left;
                      padding: 8px 16px;
                      text-decoration: none;
                      border: 1px solid #ddd;
                      background-color: #4caf50;
                      color: white;
                      border: 1px solid #4caf50;
                    `
                  : css`
                      color: black;
                      float: left;
                      padding: 8px 16px;
                      text-decoration: none;
                      border: 1px solid #ddd;
                    `
              }
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
