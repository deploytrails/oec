import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import css from "@emotion/css";
import Cookies from "js-cookie";
import { COLORS } from "../../constants";

const CourseRegister = () => {

  const [courseCodeList, setCourseCodeList] = useState([]);

  const getCourseCodeList = async () => {
    const data = await getCourseCodeListInfo(facultyId);
    setClassScheduleData(data);
  };

  // useEffect(() => {
  //   getCourseCodeList();
  // }, []);

  return (

    <React.Fragment>

      <Layout>

        <div>
          <label
            htmlFor="Semester"
            css={css`
              font-size: 14px;
              display: block;
              color: ${COLORS.BLACK};
              .errorBorder {
                border-color: ${COLORS.RED};
              }
            `}
          >
            <b> Course Code</b>
            <select
              // onChange={handleChange}
              name="Semester"
              css={css`
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
              `}
            >
              <option value="" selected disabled>
                Select Your option
              </option>
              {courseCodeList &&
                courseCodeList.map((section) => (
                  <option value={section[1]}>
                    {section[0].semesterCode}
                  </option>
                ))}
            </select>
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
          onClick={(event) => { event.preventDefault(); window.open("http://15.206.189.30:8081/faculty/DeptFacAttdReport?StartDate=2020-01-01&EndDate=2020-12-24&Department_ID=20196101013404918557388"); }}
        >
          Download
                                  </button>
      </Layout>
    </React.Fragment>
  );
};

export default CourseRegister;
