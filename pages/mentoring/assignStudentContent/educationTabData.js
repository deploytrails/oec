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


            <TABLE.TableTRR >
              <TABLE.TableTdd>{isProfileData?.qual1}</TABLE.TableTdd>
              <TABLE.TableTdd>{isProfileData?.board1}</TABLE.TableTdd>
              <TABLE.TableTdd>{isProfileData?.place1}</TABLE.TableTdd>
              <TABLE.TableTdd>{isProfileData?.marks1}</TABLE.TableTdd>
               <TABLE.TableTdd>{isProfileData?.percentage1}</TABLE.TableTdd>
            </TABLE.TableTRR>

            <TABLE.TableTRR >
              <TABLE.TableTdd>{isProfileData?.qual2}</TABLE.TableTdd>
              <TABLE.TableTdd>{isProfileData?.board2}</TABLE.TableTdd>
              <TABLE.TableTdd>{isProfileData?.place2}</TABLE.TableTdd>
              <TABLE.TableTdd>{isProfileData?.marks2}</TABLE.TableTdd>
               <TABLE.TableTdd>{isProfileData?.percentage2}</TABLE.TableTdd>
            </TABLE.TableTRR>
          
      </TABLE.TableWrapper>
      <br></br>
    </React.Fragment>
  );
};

export default EducationTabData;
