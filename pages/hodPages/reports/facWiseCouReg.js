import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import css from "@emotion/css";
import Cookies from "js-cookie";
import { COLORS } from "../../../constants";
import { getCoursesData } from "../../../services/reportsService";
import moment from "moment";

const FacWiseCouReg = () => {
  const [courseList, setCourseListData] = useState();
  const ProfileId = Cookies.get("employeeID");
  const [courseListData1, setCourseListData1] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [courseId, setCourseId] = useState([]);
  const [courseCode, setCourseCode] = useState([]);
  const [courseName, setCourseName] = useState([]);
  const [facName, setFacName] = useState([]);
  const [endDate, setEndDate] = useState(new Date());
  const deptName = Cookies.get("departId");
  const loadCourseData = async (facultyNo) => {
    const courseData = await getCoursesData(facultyNo);
    if (courseData != undefined) {
      setCourseListData1(courseData.courseArray);
    }

  };
  const handleCourseChange = (e) => {

    console.log(courseListData1[e.target.value])


    setStartDate(courseListData1[e.target.value].semesterStartDate);
    setCourseCode(courseListData1[e.target.value].courseCode);
    setCourseId(courseListData1[e.target.value].courseId);
    setCourseName(courseListData1[e.target.value].courseName)
    setFacName(courseListData1[e.target.value].facultyName)
    //     setStudentId(studentData.enrollstudentId);

    // setStartDate(courseCodeList[e.target.value].startDate);
    // setCourseListDate(courseCodeList[e.target.value].startDate);
    // setCourseId(courseCodeList[e.target.value].courseId);
    // setCourseCode(courseCodeList[e.target.value].courseCode);
    // setCourseName(courseCodeList[e.target.value].courseName);
  }
  const handleEndate = (e) => {
    setEndDate(e.target.value)
  }
  const handleDownloadFacwiseCourseRegisterReport = (e) => {
    let stddate = moment(startDate).format("DD-MM-yyyy");
    let edate = moment(endDate).format("DD-MM-yyyy");
    window.open("http://15.206.189.30:8081/faculty/DownloadAttendenceServlet?name=courseregister&operation=downloadreport&empName="+facName+"&courseparam=" + courseId + "&param2=" + stddate + "&param3=" + edate + "&empID=" + ProfileId + "&coursecode=" + courseCode + "&coursename=" + courseName + "&deptname=" + deptName)
  }
  const handleChange = (e) => {
    try {
      loadCourseData(e.target.value);

    } catch (error) {
    }

  }
  useEffect((facNo) => {
    loadCourseData(facNo);
  }, []);
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
              {courseListData1 && courseListData1.map((course, i) => (
                <option value={i}>
                  {course.courseName}
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
            value={moment(startDate).format("YYYY-MM-DD")}
            placeholder="Start Date"
            className="block w-5/12 text-black py-2 px-4 box-border  float-right mt-4 rounded shadow focus: outline-none"
          />
          <b>End Date</b>
          <input
            type="date"
            name="endDate"
            placeholder="End Date"
            onChange={(event) => handleEndate(event)}
            className="block w-5/12 text-black py-2 px-4 box-border  float-right mt-4 rounded shadow focus: outline-none"
          />


          <button
            type="button"
            className="bg-green-400 block  mx-auto px-2 py-1 rounded mb-2"
            onClick={(event) => handleDownloadFacwiseCourseRegisterReport(event)}
          >
            Download
                                  </button>
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

export default FacWiseCouReg;
