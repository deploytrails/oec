import React, { useState, useEffect } from "react";
import { getStudentProfileData } from "../../../services/mentoringServices";
import css from "@emotion/css";
import { COLORS } from "../../../constants";

const ProfileTabData = ({ studentProfileId }) => {
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
      <div className="block clearfix">
        <div
         
        >
          <React.Fragment>
          <div key={isProfileData} className="text-sm font-sans"
          css={css`
            & > p {
              display:block;
              border-top: 1px solid ${COLORS.GRAY};
            }
           
            & > p > span {
              float: left;
              width: 48%;
              padding: 8px 0px;
              color: ${COLORS.BLACK};
            }
           
          `}>
            <p className="clearfix">
              <span>Student Name</span>
              <span>: {isProfileData?.firstName ? isProfileData?.firstName : 'N/A'}</span>
            </p>
            <p className="clearfix">
            <span>Roll No.</span>
            <span>: {isProfileData?.roll}</span>
            </p>
            <p className="clearfix">
            <span>Email ID</span>
              <span>: {isProfileData?.email ? isProfileData?.email : 'N/A'}</span>
            </p>
            <p className="clearfix">
            <span>Phone No.</span>
            <span>: {isProfileData?.mobileNo ? isProfileData?.mobileNo : 'N/A'}</span>
            </p>
            <p className="clearfix">
            <span>EAMCEAT Rank</span>
            <span>: {isProfileData?.emceatRank ? isProfileData?.emceatRank : 'N/A'}</span>
            </p>
            <p className="clearfix">
            <span>Blood Group</span>
            <span>: {isProfileData?.bloodGroup ? isProfileData?.bloodGroup: 'N/A'}</span>
            </p>
            <p className="clearfix">
            <span>Caste</span>
              <span>: {isProfileData?.caste ? isProfileData?.caste : 'N/A'}</span>
            </p>
            <p className="clearfix">
            <span>Father's Name</span>
            <span>: {isProfileData?.fatherName ? isProfileData?.fatherName : 'N/A'}</span>
            </p>
            <p className="clearfix">
            <span>Occupation</span>
              <span>: {isProfileData?.fatherOccupation ? isProfileData?.fatherOccupation : 'N/A'}</span>
            </p>
            <p className="clearfix">
            <span>Phone No.</span>
              <span>: {isProfileData?.fcontactNo ? isProfileData?.fcontactNo: 'N/A'}</span>
            </p>
            <p className="clearfix">
            <span>Annual Income</span>
              <span>: {isProfileData?.fannualIncome ? isProfileData?.fannualIncome : 'N/A'}</span>
            </p>
            <p className="clearfix">
            <span>Mother's Name</span>
              <span>: {isProfileData?.motherName ? isProfileData?.motherName : 'N/A'}</span>
            </p>
            <p className="clearfix">
            <span>Occupation</span>
              <span>: {isProfileData?.moccupation ? isProfileData?.moccupation : 'N/A'}</span>
            </p>
            <p className="clearfix">
            <span>Phone No.</span>
            <span>: {isProfileData?.mcontactNo ? isProfileData?.mcontactNo : 'N/A'}</span>
            </p>
            <p className="clearfix">
            <span>Strength</span>
            <span>: {isProfileData?.strength ? isProfileData?.strength : 'N/A'}</span>
            </p>
            <p className="clearfix">
            <span>Weakness</span>
              <span>: {isProfileData?.weakness ? isProfileData?.weakness : 'N/A'}</span>
            </p>
            <p className="clearfix">
            <span>Achievements</span>
            <span>: {isProfileData?.achievment ? isProfileData?.achievment : 'N/A'}</span>
            </p>
            <p className="clearfix">
            <span>Ambition</span>
            <span>: {isProfileData?.ambition ? isProfileData?.ambition : 'N/A'}</span>
          </p>
          </div>
           
          </React.Fragment>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileTabData;
