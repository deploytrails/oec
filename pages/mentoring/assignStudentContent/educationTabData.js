import React, { useState, useEffect } from "react";
import { getStudentProfileData } from "../../../services/mentoringServices";
import * as TABLE from "../../../components/dashboards/styles/table.styles";
import Layout from "../../../components/layout";

const EducationTabData = ({ studentProfileId }) => {
  const [isProfileData, setIsProfileData] = useState({});
  const loadProfileData = async () => {
    const profileInfo = await getStudentProfileData(studentProfileId);
    setIsProfileData(profileInfo.EnrollDetails[0]);
    console.log(isProfileData);
  };

  useEffect(() => {
    loadProfileData();
  }, []);
  return (
    <React.Fragment>
      <TABLE.TableWrapper>
        <TABLE.TableTR>
          <TABLE.TableTh>Class</TABLE.TableTh>
          <TABLE.TableTh>University/Board</TABLE.TableTh>
          <TABLE.TableTh>Place</TABLE.TableTh>
          <TABLE.TableTh>Marks</TABLE.TableTh>
          <TABLE.TableTh>Percentage(%)</TABLE.TableTh>
        </TABLE.TableTR>

        {!isProfileData && <PulseLoader size="10" color="#3aafa9" />}

        {isProfileData &&
          isProfileData.length &&
          isProfileData.map(eduArray => (
            <TABLE.TableTRR key={eduArray.data.enrollstudentId}>
              <TABLE.TableTdd>{eduArray.data.roll}</TABLE.TableTdd>
              <TABLE.TableTdd>{eduArray.data.firstName}</TABLE.TableTdd>
              <TABLE.TableTdd>
                {eduArray.data.semesterID.semesterCode}
              </TABLE.TableTdd>
              <TABLE.TableTdd>
                {eduArray.data.sectionID.sectionName}
              </TABLE.TableTdd>
              <TABLE.TableTdd>{eduArray.data.issuestatus}</TABLE.TableTdd>
            </TABLE.TableTRR>
          ))}
      </TABLE.TableWrapper>
      <br></br>
    </React.Fragment>
  );
};

export default EducationTabData;
