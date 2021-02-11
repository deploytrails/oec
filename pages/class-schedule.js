import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Cookies from "js-cookie";
import { Formik } from "formik";
import css from "@emotion/css";
import { COLORS } from "../constants";
import * as TABLE from "../components/dashboards/styles/table.styles";
import { getClassScheduleData } from "../services/classScheduleService";
import { getClassScheduleDataDayWise } from "../services/classScheduleService";

const ClassSchedule = () => {
  const [classScheduleData, setClassScheduleData] = useState([]);
  const facultyId = Cookies.get("employeeID");

  const getClassSchedule = async () => {
    const data = await getClassScheduleData(facultyId);
    setClassScheduleData(data);
  };
  const getClassScheduleDayWise = async (startdate) => {
    const data = await getClassScheduleDataDayWise(facultyId, startdate);
    setClassScheduleData(data);
  };

  useEffect(() => {
    getClassSchedule();
  }, []);

  const periodList = (period, classday) => {
    let timetabledata = classScheduleData?.facTimeTableDetails?.timetabledata;

    for (let timedat of timetabledata) {
      if (
        timedat.length == 1 &&
        timedat[0][22].includes(period) &&
        timedat[0][5].includes(classday)
      ) {
        return (
          <ul>
            <li>{timedat[0][4]}</li>
            <li>{timedat[0][9]}</li>
            {/* <li>{timedat[0][2]}</li>
            <li>{timedat[0][8]}</li> */}
            <li>{timedat[0][20]}</li>
            <li>{timedat[0][7]}</li>
          </ul>
        );
      }
    }
  };

  const timeconvert = (date) => {
    let time = new Date(date);
    let hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    let am_pm = time.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    let minutes =
      time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    time = hours + ":" + minutes + " " + am_pm;
    return time;
  };

  return (
    <React.Fragment>
      <Layout>
        <div>
          <Formik
            initialValues={{
              classDate: "",
            }}
          >
            {({ values, errors, touched, handleBlur }) => (
              <form>
                <div
                  className="text-sm font-sans"
                  css={css`
                    & > p {
                      display: block;
                      //margin-right: 10px;
                    }
                    & > p > span {
                      float: right;
                      width: 35%;
                      color: ${COLORS.BLACK};
                    }
                    & > p > span > svg {
                      margin-right: 4px;
                    }
                  `}
                >
                  <p>
                    <span>
                      <input
                        type="date"
                        name="classdate"
                        onChange={(e) =>
                          getClassScheduleDayWise(e.target.value)
                        }
                        onBlur={handleBlur}
                        placeholder="Class Date"
                        value={values.classdate}
                        className="block w-5/12 text-black py-2 px-4 box-border  float-right mt-4 rounded shadow focus: outline-none"
                        css={
                          errors.classdate &&
                          touched.classdate &&
                          errors.classdate &&
                          css`
                            border: 1px solid ${COLORS.RED};
                          `
                        }
                      />
                      <div
                        css={css`
                          position: absolute;
                          right: 10px;
                          top: 70px;
                          font-size: 14px;
                          color: ${COLORS.RED_DARKER};
                        `}
                      >
                        {errors.classdate &&
                          touched.classdate &&
                          errors.classdate}
                      </div>
                    </span>
                  </p>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div className="clearfix px-2 pb-2"></div>
        <div className="clearfix pb-6">
          {classScheduleData &&
          classScheduleData?.facTimeTableDetails?.totalperiods.length > 0 ? (
            <table
              css={css`
                width: 100%;
                table-layout: fixed;
              `}
            >
              <thead>
                <tr>
                  <th
                    css={css`
                      border: 1px solid #ccc;
                      text-align: center;
                      background: lightblue;
                      border-color: #e5e7eb;
                    `}
                  >
                    Day
                  </th>
                  {classScheduleData &&
                    classScheduleData?.facTimeTableDetails?.totalperiods.map(
                      (period, index) => (
                        <th
                          css={css`
                            border: 1px solid #ccc;
                            text-align: center;
                            background: lightblue;
                            border-color: #e5e7eb;
                          `}
                        >
                          <ul>
                            <li>{period[3]}</li>
                            <li>{timeconvert(period[1])}</li>
                            <li>{timeconvert(period[2])}</li>
                          </ul>
                        </th>
                      )
                    )}
                </tr>
              </thead>
              <tbody>
                {classScheduleData?.facTimeTableDetails?.dayDate.map(
                  (classday, index) => (
                    <tr key={index}>
                      <td
                        css={css`
                          border: 1px solid #ccc;
                          text-align: left;
                          background: lightblue;
                          border-color: #e5e7eb;
                        `}
                      >
                        {classday}
                      </td>
                      {classScheduleData?.facTimeTableDetails?.totalperiods.map(
                        (period, index) => (
                          <td
                            css={css`
                              border: 1px solid #ccc;
                              text-align: center;
                              border-color: #e5e7eb;
                            `}
                            key={index}
                          >
                            {periodList(period[3], classday)}
                          </td>
                        )
                      )}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          ) : (
            "No Schedule Available"
          )}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default ClassSchedule;
