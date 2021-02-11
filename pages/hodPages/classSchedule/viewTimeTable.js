import React, { useState } from "react";
import Layout from "../../../components/layout";
import CommSelect from "../commAttribs/commSelect";
import { getTimeTables } from "../../../services/hodServices/classSchedulesService";
import PulseLoader from "react-spinners/PulseLoader";
import css from "@emotion/css";

const ViewTimeTable = () => {
  const [isTimeTableData, setIsTimeTableData] = useState({});
  const [showTable, setShowTable] = useState(false);

  const onChange = async (obj) => {
    const cData = await getTimeTables(obj.semester, obj.section);
    setIsTimeTableData(cData);
  };

  const calculateSpan = (periodName, nextPeriodName) => {
    var periodNumber = periodName.substring(periodName.length - 1);
    var nextPeriodNumber = "0";

    if (nextPeriodName === undefined) {
      nextPeriodNumber = isTimeTableData?.periodArray[
        isTimeTableData?.periodArray.length - 1
      ].periodName.substring(
        isTimeTableData?.periodArray[isTimeTableData?.periodArray.length - 1]
          .periodName.length - 1
      );
    } else {
      nextPeriodNumber = nextPeriodName.substring(nextPeriodName.length - 1);
    }
    return parseInt(nextPeriodNumber) - parseInt(periodNumber);
  };
  return (
    <React.Fragment>
      <Layout>
        <CommSelect onSectionChange={onChange} />
        <br></br>

        {isTimeTableData?.scheduleArray?.length > 0 &&
        isTimeTableData?.periodArray?.length > 0 &&
        isTimeTableData?.uniqueDayArray?.length > 0 ? (
          <table>
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
                  Day/Period
                </th>
                {isTimeTableData?.periodArray?.map((period) => (
                  <th
                    css={css`
                      border: 1px solid #ccc;
                      text-align: center;
                      background: lightblue;
                      border-color: #e5e7eb;
                    `}
                  >
                    {period.periodName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isTimeTableData?.scheduleArray?.map((daySchedule, i) => (
                <tr key={i}>
                  <td
                    css={css`
                      border: 1px solid #ccc;
                      text-align: left;
                      background: lightblue;
                      border-color: #e5e7eb;
                    `}
                  >
                    {isTimeTableData?.uniqueDayArray[i]}
                  </td>
                  {isTimeTableData?.periodArray?.map((period, p) => (
                    <>
                      {daySchedule?.map((obj, j) => (
                        <>
                          {obj.periodID === period.periodID && (
                            <td
                              css={css`
                                border: 1px solid #ccc;
                                text-align: center;
                                background: ${obj.bgColor};
                                border-color: #e5e7eb;
                              `}
                              colSpan={
                                obj.classType === "Lab"
                                  ? calculateSpan(
                                      obj.periodName,
                                      daySchedule[j + 1]?.periodName
                                    )
                                  : ""
                              }
                            >
                              <ul>
                                <li> {obj.courseName}</li>
                                <li>({obj.courseCode})</li>
                                <li>{obj.employeeName}</li>
                                <li>({obj.employeeNumber})</li>
                                <li>({obj.semesterSection})</li>
                                <li>({obj.roomNumber})</li>
                              </ul>
                            </td>
                          )}
                        </>
                      ))}
                    </>
                  ))}
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>No Schedule Available !</div>
        )}
      </Layout>
    </React.Fragment>
  );
};

export default ViewTimeTable;
