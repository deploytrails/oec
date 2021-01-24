import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import {
  getRegulations,
  getCoursesForAllocation,
  getListOfFaculties,
  getAllocatedCourses,
  deteleAllocatedCourses,
} from "../../services/hodServices/courseCordAllocationService";
import css from "@emotion/css";
import { COLORS } from "../../constants";
import Cookies from "js-cookie";

import {
  getDegreeData,
  getAcademicDetailsData,
  getSemsterData,
} from "../../services/hodServices/studentEnrollService";
import TableWrap from "../../components/TableUtilities/TableWrap";

const CourseCoordinatorAllocation = () => {
  const [isRegulation, setRegulation] = useState([]);
  const [isDegreeData, setIsDegreeData] = useState([]);
  const [isAcademicYearData, setIsAcademicYearData] = useState([]);
  const [isSemesterData, setIsSemesterData] = useState([]);
  const hodEmployeeId = Cookies.get("employeeID");
  const [isStateRegl, setStateRegl] = useState("");
  const [isStateSemeter, setStateSemeter] = useState("");
  const [isCourseArray, setIsCourseArray] = useState([]);
  const [isFacultiesArray, setIsFacultiesArray] = useState([]);
  const [isFacultyCourseArray, setIsFacultyCourseArray] = useState([]);

  const [isDegreeDataSelect, setIsDegreeDataSelect] = useState("");
  const [isDesignation, setDesignation] = useState("");
  const [isselectedFac, setIsselectedFac] = useState("");

  const loadDegreeData = async () => {
    const cData = await getDegreeData();
    setIsDegreeData(cData?.degreeArray);
    console.log(cData);
  };

  const loadAcademicDetailsData = async (degreeId) => {
    setIsDegreeDataSelect(degreeId);
    const cData = await getAcademicDetailsData(
      Cookies.get("departId"),
      degreeId
    );
    setIsAcademicYearData(cData?.academicYearArray);
  };

  const loadSemesterData = async (acadYear) => {
    const cData = await getSemsterData(isDegreeDataSelect, acadYear);
    setIsSemesterData(cData?.semesterArray);
  };

  const loadCoursesData = async () => {
    if (isStateSemeter !== "" && isStateRegl !== "") {
      const cData = await getCoursesForAllocation(
        isStateSemeter,
        hodEmployeeId,
        isStateRegl
      );
      setIsCourseArray(cData?.courseArray);
    }
  };
  const getRegulationsinfo = async () => {
    const data = await getRegulations();
    setRegulation(data?.RegulationArray);
  };
  const getListOfFacultiesData = async () => {
    const cData = await getListOfFaculties(hodEmployeeId);
    console.log(cData);
    setIsFacultiesArray(cData?.facultyDetailsArray);
  };

  const onFacultyChange = async (index) => {
    setDesignation(isFacultiesArray[index].employeeDesignation);
    setIsselectedFac(isFacultiesArray[index].employeeId);
  };

  useEffect(() => {
    if (isselectedFac !== "") {
      getFacultyAllocatedCourses();
    }
  }, [isselectedFac]);

  const getFacultyAllocatedCourses = async () => {
    const cData = await getAllocatedCourses(isselectedFac);
    console.log(cData);
    setIsFacultyCourseArray(cData?.courseDetailsArray);
  };

  const deleteCourse = async (index) => {
    const cData = await deteleAllocatedCourses(
      isFacultyCourseArray[index].recordId
    );
    if (cData?.status) {
      alert(cData?.status);
      getFacultyAllocatedCourses();
    } else {
      alert("SomeThing Went Wrong");
    }
  };

  const tdValues = [
    { valueProperty: "courseCode" },
    { valueProperty: "courseName" },
    { valueProperty: "departmentCode" },
    { valueProperty: "semesterCode" },
    {
      valueProperty: "Delete",
      type: "button",
      onClickfunction: (e) => {
        deleteCourse(e);
      },
    },
  ];

  const thValues = ["Course Code", "Course Name", "Program", "Semester", ""];

  useEffect(() => {
    getRegulationsinfo();
    loadDegreeData();
    getListOfFacultiesData();
  }, []);

  useEffect(() => {
    loadCoursesData();
  }, [isStateSemeter, isStateRegl]);
  return (
    <React.Fragment>
      <Layout>
        <div className="grid grid-cols-4">
          <div className=" w-auto">
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
              <b> Degree</b>
              <select
                // onChange={handleChange}
                name="Degree"
                onChange={(e) => loadAcademicDetailsData(e.target.value)}
                css={css`
                  display: block;
                  width: 75%;
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
                    <option value={degree[0]}>{degree[1]}</option>
                  ))}
              </select>
            </label>
          </div>

          <div className=" w-auto">
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
                // onChange={handleChange}
                name="AcadYear"
                onChange={(e) => loadSemesterData(e.target.value)}
                css={css`
                  display: block;
                  width: 75%;
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

          <div className=" w-auto">
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
                onChange={(e) => {
                  setStateSemeter(e.target.value);
                }}
                name="Semester"
                css={css`
                  display: block;
                  width: 75%;
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

          <div className=" w-auto">
            <label
              htmlFor="Regulation"
              css={css`
                font-size: 14px;
                display: block;
                color: ${COLORS.BLACK};
                .errorBorder {
                  border-color: ${COLORS.RED};
                }
              `}
            >
              <b> Regulation </b>
              <select
                onChange={(e) => {
                  setStateRegl(e.target.value);
                }}
                name="Regulation"
                css={css`
                  display: block;
                  width: 75%;
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
                {isRegulation &&
                  isRegulation.map((reg) => (
                    <option value={reg.regulation}>{reg.regulation}</option>
                  ))}
              </select>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className=" w-auto">
            <label
              htmlFor="Course"
              css={css`
                font-size: 14px;
                display: block;
                color: ${COLORS.BLACK};
                .errorBorder {
                  border-color: ${COLORS.RED};
                }
              `}
            >
              <b> Course</b>
              <select
                // onChange={handleChange}
                name="Course"
                //  onChange={(e) => loadAcademicDetailsData(e.target.value)}
                css={css`
                  display: block;
                  width: 75%;
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
                {isStateSemeter === "" || isStateRegl === "" ? (
                  <option value="" selected disabled>
                    Please Select Semester & Regulation First!
                  </option>
                ) : (
                  <option value="" selected disabled>
                    Select Your option
                  </option>
                )}
                {isCourseArray &&
                  isCourseArray.length > 0 &&
                  isCourseArray?.map((course) => (
                    <option value={course.courseId}>
                      {course.courseCode} - {course.courseName}
                    </option>
                  ))}
              </select>
            </label>
          </div>
          <div className=" w-auto">
            <label
              htmlFor="Faculty"
              css={css`
                font-size: 14px;
                display: block;
                color: ${COLORS.BLACK};
                .errorBorder {
                  border-color: ${COLORS.RED};
                }
              `}
            >
              <b> Faculty</b>
              <select
                // onChange={handleChange}
                name="Faculty"
                onChange={(e) => onFacultyChange(e.target.value)}
                css={css`
                  display: block;
                  width: 75%;
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

                {isFacultiesArray &&
                  isFacultiesArray.length > 0 &&
                  isFacultiesArray?.map((faculty, i) => (
                    <option value={i}>
                      {faculty.employeeName} - {faculty.employeeNumber}
                    </option>
                  ))}
              </select>
            </label>
          </div>

          <div className=" w-auto">
            {isDesignation !== "" && (
              <label
                htmlFor="Designation"
                css={css`
                  font-size: 14px;
                  display: block;
                  color: ${COLORS.BLACK};
                  .errorBorder {
                    border-color: ${COLORS.RED};
                  }
                `}
              >
                <b> Designation</b>
                <input
                  type="text"
                  value={isDesignation}
                  css={css`
                    display: block;
                    width: 75%;
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
                  readonly
                />
              </label>
            )}
          </div>
        </div>
        {isFacultyCourseArray && isFacultyCourseArray?.length > 0 && (
          <TableWrap
            thValues={thValues}
            tdValues={tdValues}
            data={isFacultyCourseArray}
          />
        )}
      </Layout>
    </React.Fragment>
  );
};

export default CourseCoordinatorAllocation;
