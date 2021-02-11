import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import {
  getRegulations,
  getCoursesForAllocation,
  getListOfFaculties,
  getAllocatedCourses,
  deteleAllocatedCourses,
  allocateCourseToFaculty,
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
  const [isselectedCourse, setIsselectedCourse] = useState({});
  const [isSelectedAcadYear, setIselectedAcadYear] = useState("");
  const [isDuplicateRec, setIsDuplicateRec] = useState(-1);

  const loadDegreeData = async () => {
    const cData = await getDegreeData();
    setIsDegreeData(cData?.degreeArray);
    // console.log(cData);
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
    setIselectedAcadYear(acadYear);
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
      // console.log(cData);
      if (cData?.courseArray.length > 0) {
        setIsCourseArray((prev) => unique(cData?.courseArray));
      } else {
        setIsCourseArray([]);
      }
    }
  };

  const unique = (array) => {
    const result = [];
    var arrayLength = array.length;
    for (var i = 0; i < arrayLength; i++) {
      const courseCodeRef = array[i].courseCode;

      var index = result
        .map(function (code) {
          return code.courseCode;
        })
        .indexOf(courseCodeRef.substring(0, courseCodeRef.length - 2));

      if (index == -1) {
        var tempobj = {};
        tempobj.courseCode = courseCodeRef.substring(
          0,
          courseCodeRef.length - 2
        );
        tempobj.courseName = array[i].courseName;
        result.push(tempobj);
      }
    }
    // console.log(result);
    return result;
  };

  const facCoursesFilter = () => {
    setIsDuplicateRec(
      isFacultyCourseArray.findIndex(
        (x) => x.courseCode === isselectedCourse?.courseCode
      )
    );
  };

  const getRegulationsinfo = async () => {
    const data = await getRegulations();
    setRegulation(data?.RegulationArray);
  };
  const getListOfFacultiesData = async () => {
    const cData = await getListOfFaculties(hodEmployeeId);
    //console.log(cData);
    setIsFacultiesArray(cData?.facultyDetailsArray);
  };

  const onFacultyChange = async (index) => {
    setDesignation(isFacultiesArray[index].employeeDesignation);
    setIsselectedFac(isFacultiesArray[index].employeeId);
  };

  const onCourseChange = async (index) => {
    setIsselectedCourse(isCourseArray[index]);
  };

  const allocateCourseToFac = async () => {
    const cData = await allocateCourseToFaculty(
      isselectedFac,
      isselectedCourse.courseCode,
      isselectedCourse.courseName,
      isStateSemeter,
      isSelectedAcadYear,
      isStateRegl
    );
    getFacultyAllocatedCourses();
    if (cData?.status) {
      alert(cData?.status);
      getFacultyAllocatedCourses();
    } else {
      alert("SomeThing Went Wrong");
    }
  };
  useEffect(() => {
    if (isselectedFac !== "") {
      getFacultyAllocatedCourses();
    }
  }, [isselectedFac]);

  useEffect(() => {
    if (isselectedCourse?.courseCode !== "" && isselectedFac !== "") {
      facCoursesFilter();
    }
  }, [isselectedCourse, isFacultyCourseArray]);

  const getFacultyAllocatedCourses = async () => {
    const cData = await getAllocatedCourses(isselectedFac);
    // console.log(cData);
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
                onChange={(e) => onCourseChange(e.target.value)}
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
                  isCourseArray?.map((course, i) => (
                    <option value={i}>
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
          <div className=" w-auto">
            <br />
            <button
              type="button"
              className={
                "py-2 px-4 rounded mr-2 text-center text-white mb-4 focus:outline-none " +
                (isselectedFac === "" ||
                !isselectedCourse?.courseCode ||
                isDuplicateRec >= 0
                  ? "bg-gray-400"
                  : "bg-blue-400 hover:bg-blue-500")
              }
              css={css`
                float: left;
              `}
              onClick={() => allocateCourseToFac()}
              disabled={
                isselectedFac === "" ||
                !isselectedCourse?.courseCode ||
                isDuplicateRec >= 0
              }
            >
              Allocate Course To Faculty
            </button>
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
