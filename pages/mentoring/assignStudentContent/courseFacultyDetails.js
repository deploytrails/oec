import React, { useState, useEffect } from "react";
import { getStudentCourseFacultyDetail } from "../../../services/mentoringServices";
import * as TABLE from "../../../components/dashboards/styles/table.styles";

const CourseFacultyData = ({ studentModelData }) => {
  const [isCourseFacultyData, setIsCourseFacultyData] = useState([]);
  const loadCourseFacultyData = async () => {
    const courseFacultyInfo = await getStudentCourseFacultyDetail(
      studentModelData.enrollstudentId,
      studentModelData.semesterSections.sectionPrimaryId,
      studentModelData.semesterDetails.semesterID
    );
    setIsCourseFacultyData(courseFacultyInfo.coursedetails);
    //console.log(courseFacultyInfo);
  };

  useEffect(() => {
    loadCourseFacultyData();
  }, []);
  return (
    <React.Fragment>
      <TABLE.TableWrapper>
        <TABLE.TableTR>
          <TABLE.TableTh>Course Code</TABLE.TableTh>
          <TABLE.TableTh>Faculty Number</TABLE.TableTh>
          <TABLE.TableTh>Faculty Name</TABLE.TableTh>
          <TABLE.TableTh>Email</TABLE.TableTh>
          <TABLE.TableTh>Mobile Number</TABLE.TableTh>
        </TABLE.TableTR>

        {isCourseFacultyData &&
          isCourseFacultyData.length &&
          isCourseFacultyData.map(course => (
            <TABLE.TableTRR>
              <TABLE.TableTdd>{course[0][0]}</TABLE.TableTdd>
              <TABLE.TableTdd>{course[0][1]}</TABLE.TableTdd>
              <TABLE.TableTdd>{course[0][2]}</TABLE.TableTdd>
              <TABLE.TableTdd>{course[0][3]}</TABLE.TableTdd>
              <TABLE.TableTdd>{course[0][4]}</TABLE.TableTdd>
            </TABLE.TableTRR>
          ))}
      </TABLE.TableWrapper>
      <br></br>
    </React.Fragment>
  );
};

export default CourseFacultyData;
