import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import css from "@emotion/css";
import Cookies from "js-cookie";
import { COLORS } from "../../constants";
import { getCourseCodeDetails } from "../../services/reportsService";
import moment from "moment";

const CourseRegister = () => {

  const [courseCodeList, setCourseListData] = useState([]);
  const ProfileId = Cookies.get("employeeID");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [courseId, setCourseId] = useState([]);
  const [courseCode, setCourseCode] = useState([]);
  const [courseName, setCourseName] = useState([]);
  const [courseCodeListDate, setCourseListDate] = useState("");




  const getCourseCodeList = async () => {
    const data = await getCourseCodeDetails(ProfileId);
    setCourseListData(data);
  };

  const handleChange = (e) => {
    setStartDate(courseCodeList[e.target.value].startDate);
    setCourseListDate(courseCodeList[e.target.value].startDate);
    setCourseId(courseCodeList[e.target.value].courseId);
    setCourseCode(courseCodeList[e.target.value].courseCode);
    setCourseName(courseCodeList[e.target.value].courseName);
  }
  const handleEndate = (e) => {
    setEndDate(e.target.value)
  }

  const handleDownloadCourseRegisterReport = (e) => {
    const empName = Cookies.get("userName");
    const deptName = Cookies.get("departId");
    let stddate=moment(startDate).format("DD-MM-yyyy");
    let edate=moment(endDate).format("DD-MM-yyyy");
    window.open("http://15.206.189.30:8081/faculty/DownloadAttendenceServlet?name=courseregister&operation=downloadreport&empName="+empName+"&courseparam="+courseId+"&param2="+stddate+"&param3="+edate+"&empID="+ProfileId+"&coursecode="+courseCode+"&coursename="+courseName+"&deptname="+deptName); 
    // window.open("http://15.206.189.30:8081/faculty/DownloadAttendenceServlet?name=courseregister&operation=downloadreport&empName="+empName+"&courseparam=201961010181722142801645&param2=01-12-2020&param3=26-12-2020&empID=64D1E79A8B6B11E98B0957863D7CDB1C&coursecode=R17-7G134-A&coursename=Discrete Mathematics&deptname=20196101013404918557388"); 
    // async () => {
      
    //   const data = await getDownloadCourseRegisterReport(empName, courseId, startDate, endDate, ProfileId, courseCode, deptName, courseName);
   
    // }

  }

  useEffect(() => {
    getCourseCodeList();
  }, []);

  return (

    <React.Fragment>

      <Layout>

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
              onChange={(e) => handleChange(e)}
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
              {courseCodeList &&
                courseCodeList.map((course, i) => (
                  <option value={i}>
                    {course.courseName}
                  </option>
                ))}
            </select>
          </label>
        </div>


        {courseCodeListDate && courseCodeListDate != "" &&
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
              onClick={(event) => handleDownloadCourseRegisterReport(event)}
            >
              Download
                                  </button>
          </React.Fragment>
        }

      </Layout>
    </React.Fragment>
  );
};

export default CourseRegister;
