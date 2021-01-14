import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import { COLORS } from "../../../constants";
import { useSnackbar } from "react-simple-snackbar";
import * as STYLES from "../../../components/General/modalStyles";
import {
  getDegreeData,
  getAcadmicYearData,
  getSemesterData,
  getSectionData,
  getStudentsData,
} from "../../../services/hodServices/mentorService";
import Cookies from "js-cookie";

const StudentDetailsModal = ({ openModal, employeeData }) => {
  const departmentId = "20196101013404918557388";
  const [isAcademicYearData, setIsAcademicYearData] = useState([]);
  const [isDegreeData, setIsDegreeData] = useState([]);
  const [isSemesterData, setIsSemesterData] = useState([]);
  const [isSectionData, setIsSectionData] = useState([]);
  const [isStudentData, setIsStudentData] = useState([]);
  const [selectedDegree, setSelectedDegree] = React.useState("");
  const [selectedAcademicYear, setSelectedAcademicYear] = React.useState("");
  const [selectedSemester, setSelectedSemester] = React.useState("");

  useEffect(() => {
    loadDegreeData();
  }, []);

  const loadDegreeData = async () => {
    const cData = await getDegreeData();
    console.log(cData?.DegreeCodeandID);
    setIsDegreeData(cData?.DegreeCodeandID);
  };
  const loadAcademicYearData = async (degree) => {
    alert(degree);
    const cData = await getAcadmicYearData(departmentId, degree);
    setSelectedDegree(degree);
    setIsAcademicYearData(cData?.AcademicNameAndId);
  };
  const loadSemesterData = async (academicYear) => {
    const cData = await getSemesterData(
      departmentId,
      selectedDegree,
      academicYear
    );
    setSelectedAcademicYear(academicYear);
    setIsSemesterData(cData?.semsterDetails[0]);
  };

  const loadSectionsData = async (semester) => {
    const cData = await getSectionData(semester);
    setSelectedSemester(semester);
    setIsSectionData(cData?.SectionNameAndId);
  };
  const loadStudentsData = async (section) => {
    const cData = await getStudentsData(
      selectedSemester,
      selectedDegree,
      selectedAcademicYear,
      section,
      departmentId
    );
    console.log(cData);
    setIsStudentData(cData);
  };

  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>Student Details</STYLES.PopupTitle>
        <div className="grid grid-cols-4">
          <div className=" w-screen">
            <label
              htmlFor="Degree"
              css={css`
                font-size: 14px;
                display: block;
                color: ${COLORS.BLACK};
                .errorBorder {
                  border-color: ${COLORS.RED};
                }
              `}
            >
              <b> Degree </b>
              <select
                name="Degree"
                onChange={(e) => loadAcademicYearData(e.target.value)}
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
                {isDegreeData &&
                  isDegreeData.map((degree) => (
                    <option value={degree[1]}>{degree[0]}</option>
                  ))}
              </select>
            </label>
          </div>

          <div className=" w-screen">
            <label
              htmlFor="AcadYear"
              css={css`
                font-size: 14px;
                display: block;
                color: ${COLORS.BLACK};
                .errorBorder {
                  border-color: ${COLORS.RED};
                }
              `}
            >
              <b> Academic Year</b>
              <select
                name="AcadYear"
                onChange={(e) => loadSemesterData(e.target.value)}
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
                {isAcademicYearData &&
                  isAcademicYearData.map((acadYear) => (
                    <option value={acadYear[1]}>{acadYear[0]}</option>
                  ))}
              </select>
            </label>
          </div>

          <div className=" w-screen">
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
              <b> Semester </b>
              <select
                onChange={(e) => loadSectionsData(e.target.value)}
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
                {isSemesterData &&
                  isSemesterData.map((semester) => (
                    <option value={semester[0]}>{semester[1]}</option>
                  ))}
              </select>
            </label>
          </div>

          <div className=" w-screen">
            <label
              htmlFor="Sections"
              css={css`
                font-size: 14px;
                display: block;
                color: ${COLORS.BLACK};
                .errorBorder {
                  border-color: ${COLORS.RED};
                }
              `}
            >
              <b> Sections </b>
              <select
                onChange={(e) => loadStudentsData(e.target.value)}
                name="Sections"
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
                {isSectionData &&
                  isSectionData.map((section) => (
                    <option value={section[1]}>{section[0]}</option>
                  ))}
              </select>
            </label>
          </div>
        </div>
      </STYLES.PopupWrapper>
    </STYLES.PopupMask>
  );
};
export default StudentDetailsModal;
