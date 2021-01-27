import Layout from "../../../components/layout";
import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import Cookies from "js-cookie";
import { COLORS } from "../../../constants";
import { getStudentDetails } from "../../../services/reportsService";
import moment from "moment";
import CourseWiseAttendance from "../../reports/courseWiseAttendance";

const CouWiseAtt = () => {
  const [studentData, setStudentData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [studentId, setStudentId] = useState();
  const [submitting,setSubmitting]=useState(true);

  const loadStudentData = async (rollNo) => {
    const studentData = await getStudentDetails(rollNo);
    if (studentData != undefined && studentData != "") {
      setStudentData(studentData);
      setStartDate(studentData.semesterDetails.startdate);
      setStudentId(studentData.enrollstudentId);
    }
  };
  const handleEndate = (e) => {
    if(studentId!=""&&startDate!=""){
      setEndDate(e.target.value);
      setSubmitting(false);
    }
   
  };

  // useEffect(() => {
  //   loadStudentData(rollNo);
  // }, []);
  const handleChange = (e) => {
    try {
      
      loadStudentData(e.target.value);
      console.log(studentId)
    } catch (error) {}
  };
  const handleDownloadCoursewiseAttendanceReport = (e) => {
    let stddate = moment(startDate).format("yyyy-MM-DD");
    let edate = moment(endDate).format("yyyy-MM-DD");
    window.open(
      "http://15.206.189.30:8081/faculty/StudentCourseWiseAttendanceReport?studentId=" +
        studentId +
        "&startDate=" +
        stddate +
        "&endDate=" +
        edate
    );
    // window.open("http://15.206.189.30:8081/faculty/DownloadAttendenceServlet?name=courseregister&operation=downloadreport&empName="+empName+"&courseparam=201961010181722142801645&param2=01-12-2020&param3=26-12-2020&empID=64D1E79A8B6B11E98B0957863D7CDB1C&coursecode=R17-7G134-A&coursename=Discrete Mathematics&deptname=20196101013404918557388");
    // async () => {

    //   const data = await getDownloadCourseRegisterReport(empName, courseId, startDate, endDate, ProfileId, courseCode, deptName, courseName);

    // }
  };

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
            <input
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
              type="text"
              name="StudentId"
              placeholder="Student Rollno"
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
        <React.Fragment>
          <b> Start Date</b>
          <input
            type="date"
            name="startDate"
            placeholder="Class Date"
            value={moment(startDate).format("YYYY-MM-DD")}
            className="block w-5/12 text-black py-2 px-4 box-border  float-right mt-4 rounded shadow focus: outline-none"
          />
          <b>End Date</b>
          <input
            type="date"
            name="endDate"
            placeholder="End Date"
           // value={moment(endDate).format("YYYY-MM-DD")}
            onChange={(event) => handleEndate(event)}
            className="block w-5/12 text-black py-2 px-4 box-border  float-right mt-4 rounded shadow focus: outline-none"
          />
        </React.Fragment>
        <button
          type="button"
          className="bg-green-400 block  mx-auto px-2 py-1 rounded mb-2"
          disabled={submitting}
          onClick={(event) => handleDownloadCoursewiseAttendanceReport(event)}
          //onClick={(event) => { event.preventDefault(); window.open("http://15.206.189.30:8081/faculty/DayWiseAttendance?studentId=4203D5F4F3AD11E98371337575DB5330&stdate=03/07/2020&endDate=08/05/2020"); }}
        >
          Download
        </button>
      </Layout>
    </React.Fragment>
  );
};

export default CouWiseAtt;
