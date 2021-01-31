import React, { useState, useEffect } from "react";
import * as STYLES from "../../components/General/modalStyles";
import css from "@emotion/css";
import { COLORS } from "../../constants";
import moment from "moment";
import {
  getFacultyData,
  getCoursesData,
  insertAdjustPeriodtData,
} from "../../services/allocateServices";
import Cookies from "js-cookie";
const AdjustPeriodsModal = ({ openAdjustPeriods, periodAdjust }) => {
  const ProfileId = Cookies.get("employeeID");
  const [swapfaculties, setSwapfaculties] = useState([]);
  const [adjustfaculties, setAdjustfaculties] = useState([]);
  const [faculties, setfaculties] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  useEffect(() => {
    loadFacultyData();
  }, []);

  const loadFacultyData = async () => {
    const cData = await getFacultyData(
      periodAdjust.semesterDetails.semesterID,
      ProfileId,
      periodAdjust.classdate,
      periodAdjust.classRoster.classStartTime,
      periodAdjust.classRoster.classStartTime,
      periodAdjust.course.coursePrimaryId,
      periodAdjust.semesterSections.sectionPrimaryId,
      periodAdjust.course.department.departmentPrimaryId
    );
    setSwapfaculties(cData?.returnList);
    setfaculties(cData?.faculties);
    if (cData?.coursetype == "Theory") {
      setAdjustfaculties(cData?.returnList1);
    } else if (cData?.coursetype == "Practical") {
      setAdjustfaculties(filterFaculties(cData?.returnList1));
    }
  };
  const loadCoursesData = async (faculty) => {
    const cData = await getCoursesData(
      periodAdjust.semesterDetails.semesterID,
      faculty
    );
    setSelectedFaculty(faculty);
    setCourses(cData?.AllPeriods);
  };
  const filterFaculties = (facData) => {
    const facultyarray = [];

    MAIN: for (var j = 0; j < facData[0].length; j++) {
      for (var i = 0; i < faculties.length; i++) {
        if (faculties[i][1] == facData[0][j]) {
          facultyarray.push(faculties[i]);
          continue MAIN;
        }
      }
    }

    return facultyarray;
  };
  const insertAdjustPeriod = async () => {
    const cData = await insertAdjustPeriodtData(
      periodAdjust.classRoster,
      selectedFaculty,
      selectedCourse,
      ProfileId,
      "Adjustment Request Sent",
      periodAdjust.currclassdateid
    );
    console.log(cData);
  };

  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>
          Adjust Periods
          <div
            css={css`
              cursor: pointer;
              float: right;
            `}
            onClick={() => openAdjustPeriods()}
          >
            X
          </div>
        </STYLES.PopupTitle>

        <div>
          <h1 className="text-l font-bold leading-tight text-gray-900">
            Adjust From
          </h1>
        </div>
        <div className="h-64 grid grid-rows-3 grid-flow-col gap-2">
          <div className="  w-auto">
            <label>
              <b> Faculty Name </b>
              <input
                type="text"
                name="facultyName"
                defaultValue={periodAdjust.classRoster.hrEmployee.firstName}
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
                readOnly
              />
            </label>
          </div>
          <div className="  w-auto">
            <label>
              <b> Period </b>
              <input
                type="text"
                name="period"
                defaultValue={moment(
                  periodAdjust.classRoster.classStartTime
                ).format("hh:mm A")}
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
                readOnly
              />
            </label>
          </div>
          <div className="  w-auto">
            <label>
              <b> Semester </b>
              <input
                type="text"
                name="semester"
                defaultValue={periodAdjust.semesterDetails.semesterCode}
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
                readOnly
              />
            </label>
          </div>

          <div className="  w-auto">
            <label>
              <b> Date </b>
              <input
                type="text"
                name="date"
                defaultValue={moment(periodAdjust.classdate).format(
                  "DD/MM/YYYY"
                )}
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
                readOnly
              />
            </label>
          </div>
          <div className="  w-auto">
            <label>
              <b> Course </b>
              <input
                type="course"
                name="date"
                defaultValue={periodAdjust.course.courseName}
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
                readOnly
              />
            </label>
          </div>
          <div className="  w-auto">
            <label>
              <b> Section </b>
              <input
                type="section"
                name="date"
                defaultValue={periodAdjust.semesterSections.sectionName}
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
                readOnly
              />
            </label>
          </div>
        </div>
        <div>
          <h1 className="text-l font-bold leading-tight text-gray-900">
            Adjust To
          </h1>
        </div>

        <div class="grid grid-cols-2 grid-flow-row gap-2">
          <div className=" w-auto">
            <label
              htmlFor="Faculty Name"
              css={css`
                font-size: 14px;
                display: block;
                color: ${COLORS.BLACK};
                .errorBorder {
                  border-color: ${COLORS.RED};
                }
              `}
            >
              <b> Faculty Name </b>
              <select
                defaultValue=""
                name="Faculty Name"
                onChange={(e) => loadCoursesData(e.target.value)}
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
                <option value="" disabled>
                  Select Your option
                </option>
                {adjustfaculties &&
                  adjustfaculties.map((adjustfacultie) => (
                    <option value={adjustfacultie[1]} key={adjustfacultie[0]}>
                      {adjustfacultie[0]}
                    </option>
                  ))}
              </select>
            </label>
          </div>

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
              <b> Course </b>
              <select
                defaultValue=""
                name="Course"
                onChange={(e) => setSelectedCourse(e.target.value)}
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
                <option value="" disabled>
                  Select Your option
                </option>
                {courses &&
                  courses.map((course) => (
                    <option value={course[0]} key={course[1]}>
                      {course[1]} ({course[2]})
                    </option>
                  ))}
              </select>
            </label>
          </div>
        </div>
        <br></br>
        <div className="float-right">
          {selectedFaculty != "" && selectedCourse != "" ? (
            <button
              onClick={() => insertAdjustPeriod()}
              type="button"
              className="bg-green-400 px-3 py-2 rounded text-white"
            >
              Adjust Request
            </button>
          ) : (
            <button
              type="button"
              className="bg-green-400 px-3 py-2 rounded text-white"
              disabled
            >
              Adjust Request
            </button>
          )}

          <button
            type="button"
            onClick={openAdjustPeriods}
            className="bg-black px-3 py-2 ml-2 rounded text-white"
          >
            Close
          </button>
        </div>
      </STYLES.PopupWrapper>
    </STYLES.PopupMask>
  );
};

export default AdjustPeriodsModal;
