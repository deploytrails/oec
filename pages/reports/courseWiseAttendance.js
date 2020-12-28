import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import css from "@emotion/css";
import Cookies from "js-cookie";
import { COLORS } from "../../constants";
const CourseWiseAttendance = () => {
  return (
    <React.Fragment>
      <Layout>
        <h1>Course Wise Attendance Report</h1>
        <div>
          <label
            htmlFor="StudentId"
            css={css`
              font-size: 14px;
              display: block;
              color: ${COLORS.BLACK};
              .errorBorder {
                border-color: ${COLORS.RED};
              }
            `}
          >
            <b> Student Roll Number</b>
            <input  css={css`
                display: block;
                width: 20%;
                height: 42px;
                padding: 0px 10px;
                margin-bottom: 0px;
                box-sizing: border-box;
                font-family: "Open Sans", sans-serif;
                border: 1px solid ${COLORS.GRAY_DARK};
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                -ms-border-radius: 4px;
                border-radius: 4px;
                font-size: 14px;
                &:focus {
                  outline: none;
                }
              `} type="text" name="StudentId" placeholder="Student Rollno"  />
          </label>
        </div>
        <React.Fragment>
          <b> Start Date</b>
          <input
            type="date"
            name="startDate"
            placeholder="Class Date"
            className="block w-5/12 text-black py-2 px-4 box-border  float-right mt-4 rounded shadow focus: outline-none"
          />
          <b>End Date</b>
          <input
            type="date"
            name="startDate"
            placeholder="Class Date"
            className="block w-5/12 text-black py-2 px-4 box-border  float-right mt-4 rounded shadow focus: outline-none"
          />
        </React.Fragment>
        <button
          type="button"
          className="bg-green-400 block  mx-auto px-2 py-1 rounded mb-2"
          onClick={(event) => { event.preventDefault(); window.open("http://15.206.189.30:8081/faculty/DayWiseAttendance?studentId=4203D5F4F3AD11E98371337575DB5330&stdate=03/07/2020&endDate=08/05/2020"); }}
        >
          Download
                                  </button>
      </Layout>
    </React.Fragment>
  );
};

export default CourseWiseAttendance;
