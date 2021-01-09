import React, { useState } from "react";
import Layout from "../../../components/layout";
import css from "@emotion/css";
import Cookies from "js-cookie";
import { COLORS } from "../../../constants";
import { getCoursesData } from "../../../services/reportsService";
import moment from "moment";

const FacWiseCouReg = () => {
  const [courseList, setCourseListData] = useState([]);
  const [courseListData1, setCourseListData1] = useState([]);

  const loadCourseData = async (facultyNo) => {
    const courseData = await getCoursesData(facultyNo);

    if (courseData != undefined) {
      setCourseListData1(courseData);
      //   setStartDate(studentData.semesterDetails.startdate);
      //   setStudentId(studentData.enrollstudentId);
    }

  };
  const handleChange = (e) => {
    try {
      loadCourseData(e.target.value);
      setCourseListData(courseListData1.courseArray);
    } catch (error) {
    }

  }
  return (
    <React.Fragment>
      <Layout>
        <div>Faculty Wise Course Register Report</div>
        <div>
          <label
            htmlFor="facutyNo"
            css={css`
              font-size: 14px;
              display: block;
              color: ${COLORS.BLACK};
              .errorBorder {
                border-color: ${COLORS.RED};
              }
            `}
          >
            <b> Faculty Number</b>
            <input css={css`
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
              `} required type="text" minLength="10" maxLength="10" name="facultyNo" placeholder="Faculty Number" onChange={(e) => handleChange(e)} />
          </label>
        </div>
        <div>
          <label
            htmlFor="CourseCode"
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
              onChange={(e) => handleCourseChange(e)}
              name="CourseCode"
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
              { courseList && courseList.map((course, i) => (
                <option value={i}>
                  {course.courseName}
                </option>
              ))} 
            </select>
          </label>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default FacWiseCouReg;
