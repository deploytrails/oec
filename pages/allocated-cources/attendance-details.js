import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import { useSnackbar } from "react-simple-snackbar";
import {
  insertStudentAttendance,
  updateStudentAttendance,
} from "../../services/allocateServices";
import Cookies from "js-cookie";

const AttendanceDetails = ({
  closeAttendDetails,
  classAttend,
  periodProps,
}) => {
  const [frmValue, setFrmValue] = useState([]);
  const [checkValues, setCheckValues] = useState([]);
  const [filterIDs, setFilterIds] = useState([]);
  const presentIds = [];
  const absentIds = [];
  const ProfileId = Cookies.get("employeeID");
  const [openSnackbar, closeSnackbar] = useSnackbar();

  if (classAttend?.EnrolledStudents) {
    classAttend?.EnrolledStudents.map((item) => {
      presentIds.push(item.roll);
    });
  } else {
    classAttend?.EnrolledStudentsAttendance[0].map((item, i) => {
      presentIds.push(item[2]);
      if (item[4] === "Absent") {
        filterIDs.push(item[2]);
      }
    });
  }

  const selectCheck = (selectedVal) => {
    const indexFound = filterIDs.indexOf(selectedVal);
    alert(indexFound);
    // const checkSelect = checkValues;
    // checkSelect.push(selectedVal);
    // setCheckValues(checkSelect);
    if (indexFound > -1) {
      filterIDs.splice(indexFound, 1);
      setFilterIds(filterIDs);
    }

    console.log("absentIds", filterIDs);
  };

  const unSelectCheck = (selectedVal) => {
    console.log(filterIDs);
    // const indexFound = checkValues.indexOf(selectedVal);
    // if (indexFound > -1) {
    //   checkValues.splice(indexFound, 1);
    //   setCheckValues(checkValues);
    // }
    // const idsSelect = presentIds.filter(
    //   (item) => item.indexOf(selectedVal) !== indexFound
    // );
    filterIDs.push(selectedVal);
    setFilterIds(filterIDs);
    console.log("absentIds", filterIDs);
  };

  const insertAttendanceData = async () => {
    classAttend?.EnrolledStudents.map((item, i) => {
      if (classAttend.EnrolledStudents[i].Attendance === undefined) {
        classAttend.EnrolledStudents[i].Attendance = true;
      }
    });
    const data = await insertStudentAttendance(
      JSON.stringify(classAttend.EnrolledStudents),
      ProfileId,
      periodProps.classdate,
      periodProps.classStartTime,
      periodProps.courseid,
      periodProps.classdateid,
      periodProps.semesterid,
      periodProps.sectionid,
      periodProps.selectedDate,
      "ForInsertStudent"
    );

    if (data?.AttendanceStatus === "inserted") {
      openSnackbar("Students Attendance is inserted Successfully");
      closeAttendDetails();
    } else {
      openSnackbar("SomeThing Went Wrong");
    }
  };

  const updateAttendanceData = async () => {
    classAttend.EnrolledStudentsAttendance[0].map((item, i) => {
      if (item[4] === "Present") {
        classAttend.EnrolledStudentsAttendance[0][i][4] = true;
      } else if (item[4] === "Absent") {
        classAttend.EnrolledStudentsAttendance[0][i][4] = false;
      }
    });

    const data = await updateStudentAttendance(
      JSON.stringify(classAttend?.EnrolledStudentsAttendance[0]),
      periodProps.courseCode,
      "ForUpdateStudentAttendance"
    );

    if (data?.AttendanceStatus === "updated") {
      openSnackbar("Students Attendance is Updated Successfully");
      closeAttendDetails();
    } else {
      openSnackbar("SomeThing Went Wrong");
    }
  };

  const checkAttend = (e, i, targetVal) => {
    const targetCheck = e.target.checked;
    // const targetVal = e.target.value;
    if (classAttend?.EnrolledStudents) {
      classAttend.EnrolledStudents[i].Attendance = targetCheck;
    } else {
      classAttend.EnrolledStudentsAttendance[0][i][4] = targetCheck;
    }
    if (targetCheck) {
      selectCheck(targetVal);
    } else {
      unSelectCheck(targetVal);
    }
    setFrmValue(filterIDs.join("\n"));
  };

  useEffect(() => {
    // console.log(classAttend);
    // const totalIDS = document.getElementById("attendIds");
    // const x = document.querySelectorAll(".atend");
    // totalIDS.checked = true;
    // let checkState = totalIDS.checked;
    // if (checkState === true) {
    //   for (let i = 0; i < x.length; i += 1) {
    //     x[i].checked = true;
    //   }
    // } else {
    //   for (let i = 0; i < x.length; i += 1) {
    //     x[i].checked = false;
    //   }
    // }
  });

  return (
    <React.Fragment>
      <div className="w-screen fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-75">
        <div className="w-9/12 absolute right-0 bg-white p-4 h-screen overflow-y-scroll">
          <button
            type="button"
            onClick={closeAttendDetails}
            className=" bg-green-400 px-4 py-1 absolute rounded focus:outline-none font-bold text-sm text-white"
            css={css`
              right: 20px;
            `}
          >
            CLOSE
          </button>
          <h2 className="font-sans text-lg font-bold">
            Attendance Details Page
          </h2>
          <table
            className="block w-full pr-0 mt-4"
            css={css`
              border: 1px solid #ddd;
              & > tr > th {
                border-bottom: 1px solid #ddd;
                width: 200px;
                padding: 6px 0px;
              }
              & > tr > td {
                width: 195px;
                padding: 6px 0px;
                text-align: center;
                font-size: 14px;
              }
              & > tr:nth-of-type(even) {
                background-color: #f5f5f5;
              }
            `}
          >
            <React.Fragment>
              <tr className="block w-full">
                <th>S.No</th>
                <th>Roll No</th>
                <th>Name</th>
                <th>
                  {/* <lable htmlFor="attendIds">
                    <input
                      type="checkbox"
                      name="attendIds"
                      className="attendIds"
                      id="attendIds"
                      onChange={(e) => markAllStudents(e)}
                    />
                  </lable> */}
                  Attendance
                </th>
                <th>Remarks</th>
              </tr>
              {classAttend?.EnrolledStudents &&
                classAttend?.EnrolledStudents.map((item, i) => (
                  <tr key={item.enrollstudentId}>
                    <td>{i + 1}</td>
                    <td>{item.roll}</td>
                    <td>{item.firstName}</td>
                    <td>
                      <lable htmlFor={item.enrollstudentId}>
                        <input
                          type="checkbox"
                          className="atend"
                          name={item.enrollstudentId}
                          id={item.enrollstudentId}
                          defaultChecked={true}
                          onChange={(e) => checkAttend(e, i, item.roll)}
                          // checked={filterIDs.indexOf(item) !== -1}
                          //checked={checkValues.indexOf(item) === -1}
                        />
                      </lable>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="border py-1 rounded px-2 border-gray-400 focus:outline-none"
                      />
                    </td>
                  </tr>
                ))}
              {classAttend?.EnrolledStudentsAttendance &&
                classAttend?.EnrolledStudentsAttendance[0].map((item, i) => (
                  <tr key={item[1]}>
                    <td>{i + 1}</td>
                    <td>{item[2]}</td>
                    <td>{item[5]}</td>
                    <td>
                      <lable htmlFor={item[1]}>
                        <input
                          type="checkbox"
                          className="atend"
                          name={item[1]}
                          id={item[1]}
                          //value={item.enrollStudentDetails.roll}
                          onChange={(e) => checkAttend(e, i, item[2])}
                          defaultChecked={
                            item[4] === "Present" || item[4] === true
                          }
                          // checked={filterIDs.indexOf(item) !== -1}
                          //checked={checkValues.indexOf(item) === -1}
                        />
                      </lable>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="border py-1 rounded px-2 border-gray-400 focus:outline-none"
                      />
                    </td>
                  </tr>
                ))}
            </React.Fragment>
          </table>

          <div className="clearfix my-4">
            <div className="w-6/12 float-left">
              <h3 className="font-sans font-bold text-red-600">Absentee</h3>
              <label>
                <textarea
                  rows="3"
                  cols="4"
                  id="attendIds"
                  value={frmValue.length > 0 ? frmValue : filterIDs.join("\n")}
                  className="w-full border py-1 rounded px-2 border-gray-400 focus:outline-none resize-none"
                ></textarea>
              </label>
            </div>
            <div className="w-6/12 float-right">
              <div className="pl-4 pt-5">
                <p className="text-sm text-green-600">
                  No of Present : {presentIds.length - filterIDs.length}
                </p>
                <p className="text-sm text-red-600">
                  No of Absent : {filterIDs.length}
                </p>
                <button
                  onClick={() =>
                    classAttend.EnrolledStudents
                      ? insertAttendanceData()
                      : updateAttendanceData()
                  }
                  type="button"
                  className="bg-green-400 py-2 shadow-md px-2 rounded focus:outline-none mt-2 font-bold text-sm text-white"
                >
                  {classAttend?.EnrolledStudents ? "Submit " : "Update "}
                  Attendance
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AttendanceDetails;
