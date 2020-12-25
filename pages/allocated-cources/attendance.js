import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import Cookies from "js-cookie";
import moment from "moment";
import Layout from "../../components/layout";
import AttendanceDetails from "./attendance-details";
import {
  getAttendanceList,
  getAttendanceListById,
} from "../../services/allocateServices";

const Attendance = () => {
  const [attendance, setIsAttendance] = useState({});
  const [todaysDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [attend, setAttend] = useState([]);
  const ProfileId = Cookies.get("employeeID");
  const selectedDate = new Date();
  const operationData = "Initial";
  const [classId, setClassId] = useState();
  const [classAttend, setClassAttend] = useState({});
  const [attendDetails, setAttendDetails] = useState(false);
  const [periodProps, setPeriodProps] = useState({});

  const getAllAttendance = async () => {
    const data = await getAttendanceList(
      ProfileId,
      selectedDate,
      operationData
    );
    setDates(data?.weeklyDates);
    setAttend(data?.weeklyAttendance?.classSchedule1);
    console.log("data", data);
    return data;
  };

  let operation = "forSwapData";
  // const getAllAttendanceById = async () => {
  //   const data = await getAttendanceListById(ProfileId, operation);
  //   console.log("xxxxxx", data);
  //   setIsAttendance(data);
  // };

  const toggleClass = (id) => {
    setClassId(classId === id ? "" : id);
  };

  //const classData = [{CourceName : }];

  useEffect(() => {
    getAllAttendance();
  }, []);

  const toggleAttendDetails = () => {
    setAttendDetails(true);
  };

  const closeAttendDetails = () => {
    setAttendDetails(false);
  };

  const openClassAttendanceData = (data) => {
    console.log(data);
    setClassAttend(data);

    if (data?.status === "success") {
      toggleAttendDetails();
    }
    console.log("xos", classAttend);
  };

  const tableHeaders = [
    "Cource Code",
    "	Course Name",
    "Start Time",
    "Room No",
    "Semester",
    "Section",
    "Status",
  ];

  let Operation = "ForStudents";
  return (
    <React.Fragment>
      <Layout>
        <div className="h-full bg-white p-4">
          <div>
            <h3 className="inline-block text-2xl">
              Schedule on {moment(todaysDate).format("DD/MM/YYYY")}
            </h3>
          </div>
          <div className="mt-4 w-full">
            <div>
              {attend.length === 0 && (
                <div>
                  {dates.map((dt) => (
                    <div className="block shadow p-2 m-2 clearfix">
                      <span key={`dates${dt}`} className="float-left">
                        Date : {dt}
                      </span>
                      <span className="text-red-600 float-right">
                        No Class is Schedule
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              {attend &&
                attend.length > 0 &&
                attend.map((tbd, i) => (
                  <React.Fragment>
                    <div
                      className="clearfix border border-0 border-solid mb-1 py-2 px-3 font-sans block w-full"
                      key={tbd}
                      id={`classID${i}`}
                      css={
                        classId === i &&
                        css`
                          background-color: #333;
                          color: #fff;
                        `
                      }
                    >
                      <h4 className="w-6/12 float-left">
                        Date :{moment(tbd[0]?.classdate).format("DD/MM/YYYY")}
                        <p>
                          {tbd &&
                            tbd.length > 0 &&
                            tbd.weeklyDates?.map((dt) => (
                              <span key={`dates${dt}`}>{dt}</span>
                            ))}
                        </p>
                      </h4>
                      <p className="w-6/12 float-right text-right font-bold">
                        <span
                          onClick={() => toggleClass(i)}
                          className="border border-0 border-solid py-1 px-2 cursor-pointer text-sm rounded bg-gray-200 hover:bg-green-400"
                          css={
                            classId === i &&
                            css`
                              background-color: #68d391;
                              color: white;
                              border: none;
                            `
                          }
                        >
                          {classId === i ? "Hide Class" : "View Class"}
                        </span>
                      </p>
                    </div>

                    {classId === i && (
                      <React.Fragment>
                        <table
                          className="w-full block bg-white shadow-lg mb-4 border"
                          css={css`
                            position: relative;
                            top: -5px;
                          `}
                        >
                          <tr className="block">
                            <th className="w-2/12 px-1 py-2 text-left">
                              Coure Code
                            </th>
                            <th className="w-2/12 px-1 py-2 text-left">
                              Coure Name
                            </th>
                            <th className="w-2/12 px-1 py-2 text-left">
                              Start Time
                            </th>
                            <th className="w-1/12 px-1 py-2 text-left">
                              Room No
                            </th>
                            <th className="w-1/12 px-1 py-2 text-left">
                              Semester
                            </th>
                            <th className="w-1/12 px-1 py-2 text-left">
                              Section
                            </th>
                            <th className="w-2/12 px-1 py-2 text-left">
                              Status
                            </th>
                          </tr>
                          <tr className="block">
                            {tbd?.map((x) => (
                              <React.Fragment>
                                <td className="border w-2/12 px-2 py-2 border-l-0 text-sm">
                                  {x?.course?.courseCode}
                                </td>
                                <td className="border w-2/12 px-2 py-2 text-sm">
                                  {x?.course?.courseName}
                                </td>
                                <td className="border w-2/12 px-2 py-2 text-sm">
                                  {moment(x?.classStartTime).format("hh:mm A")}
                                </td>
                                <td className="border w-1/12 px-2 py-2 text-sm">
                                  {x?.room?.roomNO}
                                </td>
                                <td className="border w-1/12 px-2 py-2 text-sm">
                                  {x?.semesterDetails?.semesterCode}
                                </td>
                                <td className="border w-1/12 px-2 py-2 text-sm">
                                  {x?.semesterSections?.sectionName}
                                </td>
                                <td className="border w-2/12 px-2 py-2 border-r-0 text-sm">
                                  <button
                                    type="button"
                                    className="bg-green-400 block  mx-auto px-2 py-1 rounded mb-2"
                                    onClick={() =>
                                      getAttendanceListById(
                                        x?.currclassdateid,
                                        x?.course?.coursePrimaryId,
                                        x?.course?.courseCode,
                                        x?.employeePrimaryId,
                                        Operation,
                                        x?.semesterSections?.sectionPrimaryId,
                                        x?.semesterDetails?.semesterID
                                      ).then((data) => {
                                        setPeriodProps({
                                          classdateid: x?.currclassdateid,
                                          semesterid:
                                            x?.semesterDetails?.semesterID,
                                          classdate: tbd[0]?.classdate,
                                          classStartTime: x?.classStartTime,
                                          courseid: x?.course?.coursePrimaryId,
                                          sectionid:
                                            x?.semesterSections
                                              ?.sectionPrimaryId,
                                          selectedDate: tbd[0]?.classdate,
                                          courseCode: x?.course?.courseCode,
                                        });
                                        openClassAttendanceData(data);
                                        console.log("dataaa", data);
                                      })
                                    }
                                  >
                                    Attendance
                                  </button>
                                  <button
                                    type="button"
                                    className="bg-yellow-400 block  mx-auto px-2 py-1 rounded"
                                  >
                                    Adjust Periods
                                  </button>
                                </td>
                              </React.Fragment>
                            ))}
                          </tr>
                        </table>
                        {attendDetails && (
                          <AttendanceDetails
                            closeAttendDetails={closeAttendDetails}
                            classAttend={classAttend}
                            periodProps={periodProps}
                          />
                        )}
                      </React.Fragment>
                    )}
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Attendance;
