import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import { useSnackbar } from "react-simple-snackbar";
import {
  insertStudentAttendance,
  updateStudentAttendance,
} from "../../services/allocateServices";
import Cookies from "js-cookie";
import * as STYLES from "../../components/General/modalStyles";
import * as TABLE from "../../components/dashboards/styles/table.styles";

const AttendanceDetails = ({
  closeAttendDetails,
  classAttend,
  periodProps,
}) => {
  const [frmValue, setFrmValue] = useState([]);
  const [checkValues, setCheckValues] = useState([]);
  const [filterIDs, setFilterIds] = useState([]);
  const presentIds = [];
  const [presentIdss, setPresentIdss] = useState([]);
  const absentIds = [];
  const ProfileId = Cookies.get("employeeID");
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const intitalTrigger = () => {
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

      setFrmValue(filterIDs.join("\n"));
    }
    setPresentIdss(presentIds);
  };

  const selectCheck = (selectedVal) => {
    const indexFound = filterIDs.indexOf(selectedVal);
    // alert(indexFound);
    // const checkSelect = checkValues;
    // checkSelect.push(selectedVal);
    // setCheckValues(checkSelect);
    if (indexFound > -1) {
      filterIDs.splice(indexFound, 1);
      setFilterIds(filterIDs);
    }

    // console.log("absentIds", filterIDs);
  };

  const unSelectCheck = (selectedVal) => {
    // console.log(filterIDs);
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
    // console.log("absentIds", filterIDs);
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
    intitalTrigger();
  }, []);

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
          {" "}
          Attendance Details Page
          <div
            css={css`
              cursor: pointer;
              float: right;
            `}
            onClick={() => closeAttendDetails()}
          >
            X
          </div>
        </STYLES.PopupTitle>
        <TABLE.TableWrapper>
          <React.Fragment>
            <TABLE.TableTR>
              <TABLE.TableTh>S.No</TABLE.TableTh>
              <TABLE.TableTh>Roll No</TABLE.TableTh>
              <TABLE.TableTh>Name</TABLE.TableTh>
              <TABLE.TableTh>Attendance</TABLE.TableTh>
              <TABLE.TableTh>Remarks</TABLE.TableTh>
            </TABLE.TableTR>
            {classAttend?.EnrolledStudents &&
              classAttend?.EnrolledStudents.map((item, i) => (
                <TABLE.TableTRR key={item.enrollstudentId}>
                  <TABLE.TableTdd>{i + 1}</TABLE.TableTdd>
                  <TABLE.TableTdd>{item.roll}</TABLE.TableTdd>
                  <TABLE.TableTdd>{item.firstName}</TABLE.TableTdd>
                  <TABLE.TableTdd>
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
                  </TABLE.TableTdd>
                  <TABLE.TableTdd>
                    <input
                      type="text"
                      className="border py-1 rounded px-2 border-gray-400 focus:outline-none"
                    />
                  </TABLE.TableTdd>
                </TABLE.TableTRR>
              ))}
            {classAttend?.EnrolledStudentsAttendance &&
              classAttend?.EnrolledStudentsAttendance[0].map((item, i) => (
                <TABLE.TableTRR key={item[1]}>
                  <TABLE.TableTdd>{i + 1}</TABLE.TableTdd>
                  <TABLE.TableTdd>{item[2]}</TABLE.TableTdd>
                  <TABLE.TableTdd>{item[5]}</TABLE.TableTdd>
                  <TABLE.TableTdd>
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
                  </TABLE.TableTdd>
                  <TABLE.TableTdd>
                    <input
                      type="text"
                      className="border py-1 rounded px-2 border-gray-400 focus:outline-none"
                    />
                  </TABLE.TableTdd>
                </TABLE.TableTRR>
              ))}
          </React.Fragment>
        </TABLE.TableWrapper>

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
                No of Present : {presentIdss.length - filterIDs.length}
              </p>
              <p className="text-sm text-red-600">
                No of Absent : {filterIDs.length}
              </p>
              <div>
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
                <button
                  type="button"
                  onClick={closeAttendDetails}
                  className="bg-black py-2 shadow-md px-2 rounded focus:outline-none mt-2 font-bold text-sm text-white"
                  css={css`
                    margin-left: 5px;
                  `}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </STYLES.PopupWrapper>
    </STYLES.PopupMask>
  );
};

export default AttendanceDetails;
