import React from "react";
import { css } from "@emotion/core";

const ViewMarksEntry = ({ closeMarksView, studentMarks }) => {

    return (
        <React.Fragment>
            <div className="w-screen fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-75">
                <div className="w-9/9 absolute right-0 bg-white p-4 h-screen overflow-y-scroll">
                    <button
                        type="button"
                        onClick={closeMarksView}
                        className=" bg-green-400 px-4 py-1 absolute rounded focus:outline-none font-bold text-sm text-white"
                        css={css`
                right: 20px;
              `}
                    >
                        CLOSE
            </button>
                    <h2 className="font-sans text-lg font-bold">
                        <p>Student Marks Page</p>
                        <p>{studentMarks[0]?.courseID.courseName} {"(" + studentMarks[0]?.courseID.courseCode + ")"} </p>
                    </h2>
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

                                    <tr key={item?.studentID.enrollstudentId}>
                                        <td>{i + 1}</td>
                                        <td>{item?.studentID.roll}</td>
                                        <td>{item?.studentID.firstName}</td>
                                    </tr>
                                ))}
                        </React.Fragment>
                    </table>
                </div>
            </div>
        </React.Fragment>

    );
}

export default ViewMarksEntry;