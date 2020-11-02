import React, { useState, useEffect } from "react";
import { getStudentMarksDetail } from "../../../../services/mentoringServices";
import * as TABLE from "../../../../components/dashboards/styles/table.styles";

const MarksDetails = ({ studentEnrollId }) => {
  const [isMarksData, setIsMarksData] = useState([]);
  const loadStudentMarksData = async () => {
    const marksData = await getStudentMarksDetail(studentEnrollId);
    setIsMarksData(marksData.MarksDetails);
    //console.log(marksData);
  };

  useEffect(() => {
    loadStudentMarksData();
  }, []);
  return (
    <React.Fragment>
      <TABLE.TableWrapper>
        <TABLE.TableTR>
          <TABLE.TableTh>Course</TABLE.TableTh>
          <TABLE.TableTh>MID - 1 Marks</TABLE.TableTh>
          <TABLE.TableTh>MID - 2 Marks</TABLE.TableTh>
          <TABLE.TableTh>Total MID Marks</TABLE.TableTh>
          <TABLE.TableTh>External Marks</TABLE.TableTh>
          <TABLE.TableTh>Total Marks</TABLE.TableTh>
        </TABLE.TableTR>
        {isMarksData &&
          isMarksData.length &&
          isMarksData.map(marksdet => (
            <TABLE.TableTRR>
              <TABLE.TableTdd>{marksdet.courseID.courseCode}</TABLE.TableTdd>
              <TABLE.TableTdd>{marksdet.internal1Marks}</TABLE.TableTdd>
              <TABLE.TableTdd>{marksdet.internal2Marks}</TABLE.TableTdd>
              <TABLE.TableTdd>{marksdet.internalMarks}</TABLE.TableTdd>
              <TABLE.TableTdd>{marksdet.externalMarks}</TABLE.TableTdd>
              <TABLE.TableTdd>{marksdet.totalMarks}</TABLE.TableTdd>
            </TABLE.TableTRR>
          ))}
      </TABLE.TableWrapper>

      <br></br>
    </React.Fragment>
  );
};

export default MarksDetails;
