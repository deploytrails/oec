import React, { useState, useEffect } from "react";
import { getStudentAttendanceDetail } from "../../../../services/mentoringServices";
import css from "@emotion/css";
import { COLORS } from "../../../../constants";

const AttendacneDetails = ({ studentEnrollId }) => {
  const [isAttendanceData, setIsAttendanceData] = useState([]);
  const loadStudentAttendanceData = async () => {
    const attData = await getStudentAttendanceDetail(studentEnrollId);
    setIsAttendanceData(attData.attendanceDetailsDetails[0]);
    console.log(attData.attendanceDetailsDetails);
  };

  useEffect(() => {
    loadStudentAttendanceData();
  }, []);
  return (
    <React.Fragment>
      {isAttendanceData ? (
        <div
          className="text-sm font-sans"
          css={css`
            & > p {
              display: block;
              margin-right: 10px;
            }
            & > p > span {
              float: left;
              width: 48%;
              border-bottom: 1px solid ${COLORS.GRAY};
              padding: 8px 0px;
              color: ${COLORS.BLACK};
            }
            & > p > span > svg {
              margin-right: 4px;
            }
          `}
        >
          <p>
            <span>Total No.of Classes</span>
            <span>{isAttendanceData.totalClasses}</span>
            <span>Total No.of Present</span>
            <span>{isAttendanceData.present}</span>
            <span>Total No.of Absent</span>
            <span>
              {isAttendanceData.totalClasses - isAttendanceData.present}
            </span>
            <span>Attendance Percentage</span>
            <span>
              {(isAttendanceData.present / isAttendanceData.totalClasses) * 100}
              %
            </span>
          </p>
        </div>
      ) : (
        <div>Data Not Available!</div>
      )}
    </React.Fragment>
  );
};

export default AttendacneDetails;
