import React from "react";
import { css } from "@emotion/core";
import * as STYLES from "../../components/General/modalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ViewMarksEntry = ({
  closeMarksView,
  studentMarks,
  courseCode,
  courseName,
}) => {
  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={closeMarksView}
            style={{ float: "right" }}
          />
          <h2 className="font-sans text-lg font-bold">
            <p>Student Marks</p>
            <p>
              {courseName} {"(" + courseCode + ")"}{" "}
            </p>
          </h2>
        </STYLES.PopupTitle>
        {!studentMarks || studentMarks <= 0 ? (
          <div>No Data Available</div>
        ) : (
          <table
            className="block w-full pr-0 mt-4"
            css={css`
              border: 1px solid #ddd;
              & > tr > th {
                border-bottom: 1px solid #ddd;
                width: 213px;
                padding: 6px 0px;
              }
              & > tr > td {
                width: 213px;
                padding: 6px 0px;
                text-align: center;
                font-size: 14px;
              }
              & > tr:nth-of-type(even) {
                background-color: #f5f5f5;
              }
            `}
          >
            <React.Fragment>
              <tr className="block w-full">
                <th>S.No</th>
                <th>Roll No</th>
                <th>Student Name</th>
              </tr>
              {studentMarks &&
                studentMarks.map((item, i) => (
                  <tr key={item?.enrollstudentId}>
                    <td>{i + 1}</td>
                    <td>{item?.roll}</td>
                    <td>{item?.firstName}</td>
                  </tr>
                ))}
            </React.Fragment>
          </table>
        )}
      </STYLES.PopupWrapper>
    </STYLES.PopupMask>
  );
};

export default ViewMarksEntry;
