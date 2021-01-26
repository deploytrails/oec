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
  insertStudentAttendance,
} from "../../../services/hodServices/mentorService";
import Cookies from "js-cookie";
import TableWrap from "../../../components/TableUtilities/TableWrap";

const StudentDetailsModal = ({ openModal, employeeData, getMentorList }) => {
  const departmentId = Cookies.get("departId");
  const [isAcademicYearData, setIsAcademicYearData] = useState([]);
  const [isDegreeData, setIsDegreeData] = useState([]);
  const [isSemesterData, setIsSemesterData] = useState([]);
  const [isSectionData, setIsSectionData] = useState([]);
  const [isStudentData, setIsStudentData] = useState([]);
  const [selectedDegree, setSelectedDegree] = useState("");
  const [selectedAcademicYear, setSelectedAcademicYear] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [openSnackbar, closeSnackbar] = useSnackbar();

  useEffect(() => {
    loadDegreeData();
  }, []);

  const loadDegreeData = async () => {
    setIsAcademicYearData([]);
    setIsSemesterData([]);
    setIsSectionData([]);
    setIsStudentData([]);
    const cData = await getDegreeData();
    setIsDegreeData(cData?.DegreeCodeandID);
  };
  const loadAcademicYearData = async (degree) => {
    setIsSemesterData([]);
    setIsSectionData([]);
    setIsStudentData([]);
    const cData = await getAcadmicYearData(departmentId, degree);
    setSelectedDegree(degree);
    setIsAcademicYearData(cData?.AcademicNameAndId);
  };
  const loadSemesterData = async (academicYear) => {
    setIsSectionData([]);
    setIsStudentData([]);
    const cData = await getSemesterData(
      departmentId,
      selectedDegree,
      academicYear
    );
    setSelectedAcademicYear(academicYear);
    setIsSemesterData(cData?.semsterDetails[0]);
  };

  const loadSectionsData = async (semester) => {
    setIsStudentData([]);
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

    if (cData?.studentsData) {
      for (let i = 0; i < cData.studentsData.length; i += 1) {
        cData.studentsData[i].allocation = false;
      }
    }
    setIsStudentData(cData?.studentsData);
  };

  const thValues = [
    "Student Roll No.",
    "Student Name",
    "Semester",
    {
      property: "Select All",
      onChangeSelectAllfunction: (e) => {
        checkAll(e);
      },
    },
  ];
  const tdValues = [
    { valueProperty: "rollNumber" },
    { valueProperty: "studentName" },
    { valueProperty: "semesterCode" },
    {
      valueProperty: "allocation",
      type: "checkbox",
      onChangefunction: (e, e1) => {
        checkStudent(e, e1);
      },
    },
  ];

  const checkStudent = (index, e) => {
    let newArray = [...isStudentData];
    newArray[index].allocation = e.target.checked;
    setIsStudentData(newArray);
  };
  const checkSelectAllStudent = async (e) => {
    const targetCheck = e.target.checked;
    // setIsStudentData((prev) => {
    //   let d = [];
    //   d = [...d, prev];
    //   console.log(d);
    //   for (let i = 0; i < d[0].length; i += 1) {
    //     if (d[0][i].allocation) {
    //       d[0][i].allocation = false;
    //     } else {
    //       d[0][i].allocation = true;
    //     }
    //   }
    //   return d[0];
    // });

    // setIsStudentData(d[0]);

    const filteredData = isStudentData.map((item, i) => {
      if (item.allocation) {
        item.allocation = false;
      } else {
        item.allocation = true;
      }
      return item;
    });
    console.log(filteredData);
    setIsStudentData([]);
    filteredData.sort((a, b) => {
      return b.allocation - a.allocation;
    });
    setIsStudentData(filteredData);
  };

  const checkAll = (e) => {
    const targetCheck = e.target.checked;
    setIsStudentData(
      isStudentData.map((el, i) => ({
        ...el,
        allocation: targetCheck,
      }))
    );
  };

  const insertStudentData = async () => {
    const data = await insertStudentAttendance(employeeData[0], isStudentData);
    if (data?.Response === "Success") {
      openSnackbar("Students Assigned to Mentor Successfully");
      getMentorList();
      openModal();
    } else {
      openSnackbar("SomeThing Went Wrong");
    }
  };

  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper
        css={css`
          width: 90%;
          height: 90%;
          overflow: hidden;
          overflow-y: scroll;
        `}
      >
        <STYLES.PopupTitle>
          Student Details
          <div
            css={css`
              cursor: pointer;
              float: right;
            `}
            onClick={() => openModal()}
          >
            X
          </div>
        </STYLES.PopupTitle>
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
                defaultValue=""
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
                <option value="" disabled>
                  Select Your option
                </option>
                {isDegreeData &&
                  isDegreeData.map((degree) => (
                    <option value={degree[1]} key={degree[0]}>
                      {degree[0]}
                    </option>
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
                defaultValue=""
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
                <option value="" disabled>
                  Select Your option
                </option>
                {isAcademicYearData &&
                  isAcademicYearData.map((acadYear) => (
                    <option value={acadYear[1]} key={acadYear[0]}>
                      {acadYear[0]}
                    </option>
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
                defaultValue=""
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
                <option value="" disabled>
                  Select Your option
                </option>
                {isSemesterData &&
                  isSemesterData.map((semester) => (
                    <option value={semester[0]} key={semester[1]}>
                      {semester[1]}
                    </option>
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
                defaultValue=""
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
                <option value="" disabled>
                  Select Your option
                </option>
                {isSectionData &&
                  isSectionData.map((section) => (
                    <option value={section[1]} key={section[0]}>
                      {section[0]}
                    </option>
                  ))}
              </select>
            </label>
          </div>
        </div>

        {isStudentData && isStudentData.length > 0 && (
          <div>
            <TableWrap
              thValues={thValues}
              tdValues={tdValues}
              data={isStudentData}
            />
          </div>
        )}
        <div
          className="float-right"
          css={css`
            margin-top: 20px;
          `}
        >
          {isStudentData && isStudentData.length > 0 && (
            <button
              onClick={() => insertStudentData()}
              type="button"
              className="bg-green-400 px-3 py-2 rounded text-white"
            >
              Assign Mentor
            </button>
          )}
          <button
            type="button"
            onClick={openModal}
            className="bg-black px-3 py-2 ml-2 rounded text-white"
          >
            Close
          </button>
        </div>
      </STYLES.PopupWrapper>
    </STYLES.PopupMask>
  );
};
export default StudentDetailsModal;
