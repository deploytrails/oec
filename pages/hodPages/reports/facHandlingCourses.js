import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import css from "@emotion/css";
import Cookies from "js-cookie";
import { COLORS } from "../../../constants";
import { getFacultyData } from "../../../services/reportsService";

const FacHandlingCourses = () => {
  const [facId, setFacId] = useState();
  const [facultyNo, setFacultyNo] = useState([]);
  const [deptId, setDeptId] = useState([]);
  const dept = Cookies.get("departId");
  const [submitting, setSubmitting] = useState(true);
  const [endDate, setEndDate] = useState(new Date());
  const loadFacultyData = async (facNo) => {
    const data = await getFacultyData(facNo);
    setFacId(data.facdata);
    setDeptId(dept);
  };
  const handleChange = (e) => {
    //console.log(e.target.value)
    setFacultyNo(e.target.value);
    loadFacultyData(e.target.value).then(setSubmitting(false));
  };
  useEffect((facNo) => {
    loadFacultyData(facNo);
  }, []);
  const handleDownloadFacHandlingCourseReport = (e) => {
    window.open(
      "http://15.206.189.30:8081/faculty/getFacultyHandlingCoursesReport?employeeID=" +
        facId +
        "&departmentID=" +
        deptId +
        "&facultyNo=" +
        facultyNo
    );
  };
  const handleDownloadAllFacHandlingCourseReport = () => {
    window.open(
      "http://15.206.189.30:8081/faculty/getAllFacultyHandlingCoursesReport?hodDepartmentID=" +
        deptId
    );
  };
  return (
    <React.Fragment>
      <Layout>
        <div>Faculty Handling Courses Report</div>
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
              required
              type="text"
              minLength="10"
              maxLength="10"
              name="facultyNo"
              placeholder="Faculty Number"
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
        <button
          type="button"
          className="bg-green-400 block  mx-auto px-2 py-1 rounded mb-2"
          disabled={submitting}
          onClick={(event) => {
            handleDownloadFacHandlingCourseReport(event);
          }}
        >
          Download For Faculty Report
        </button>
        <button
          type="button"
          className="bg-green-400 block  mx-auto px-2 py-1 rounded mb-2"
          onClick={(event) => handleDownloadAllFacHandlingCourseReport(event)}
        >
          Download For All Faculty Report
        </button>
      </Layout>
    </React.Fragment>
  );
};

export default FacHandlingCourses;
