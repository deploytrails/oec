import React, { useState } from "react";
import Layout from "../../../components/layout";
import CommSelect from "../commAttribs/commSelect";
import { getTimeTables } from "../../../services/hodServices/classSchedulesService";
import PulseLoader from "react-spinners/PulseLoader";
import css from "@emotion/css";

const ViewTimeTable = () => {
  const [isPeriodArray, setIsPeriodArray] = useState([]);
  const [isScheduleArray, setIsScheduleArray] = useState([]);
  const [isDayArray, setIsDayArray] = useState([]);
  const [show, setShow] = useState(false);

  const onChange = async (obj) => {
    const cData = await getTimeTables(obj.semester, obj.section);
    setIsPeriodArray(cData?.periodArray);
    setIsScheduleArray(cData?.scheduleArray);
    setIsDayArray(cData?.uniqueDayArray);
    console.log(cData);
    setShow((prevShow) => !prevShow);
  };

  const calculateSpan = (periodName, nextPeriodName) => {
    var periodNumber = periodName.substring(periodName.length - 1);
    var nextPeriodNumber = "0";

    if (nextPeriodName === undefined) {
      nextPeriodNumber = isPeriodArray[
        isPeriodArray.length - 1
      ].periodName.substring(
        isPeriodArray[isPeriodArray.length - 1].periodName.length - 1
      );
    } else {
      nextPeriodNumber = nextPeriodName.substring(nextPeriodName.length - 1);
    }
    return parseInt(periodNumber) - parseInt(nextPeriodNumber);
  };
  return (
    <React.Fragment>
      <Layout>
        <CommSelect onSectionChange={onChange} />
        {!show && (
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <PulseLoader color="#3aafa9" />
          </div>
        )}

        {show && (
          <table>
            <thead>
              <tr>
                <th>Day/Period</th>
                {show &&
                  isPeriodArray.map((period) => <th>{period.periodName}</th>)}
              </tr>
            </thead>
            <tbody>
              {isScheduleArray.map((daySchedule, i) => (
                <tr key={i}>
                  <td>{isDayArray[i]}</td>
                  {isPeriodArray.map((period, p) => (
                    <td>
                      {daySchedule.map((obj, j) => (
                        <>
                          {obj.periodID === period.periodID && (
                            <>
                              {obj.courseCode}
                              {obj.classType === "Lab" &&
                                calculateSpan(
                                  obj.periodName,
                                  daySchedule[j + 1]?.periodName
                                )}
                            </>
                          )}
                        </>
                      ))}
                    </td>
                  ))}
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Layout>
    </React.Fragment>
  );
};

export default ViewTimeTable;
