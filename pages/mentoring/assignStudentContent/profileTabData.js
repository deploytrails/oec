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
      <div className="block">
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
          <React.Fragment>
            <p key={isProfileData}>
              <span>Student Name</span>
              <span>{isProfileData.firstName}</span>
              <span>Roll No.</span>
              <span>{isProfileData.roll}</span>
              <span>Email ID</span>
              <span>{isProfileData.email}</span>
              <span>Phone No.</span>
              <span>{isProfileData.mobileNo}</span>
              <span>EAMCEAT Rank</span>
              <span>{isProfileData.emceatRank}</span>
              <span>Blood Group</span>
              <span>{isProfileData.bloodGroup}</span>
              <span>Caste</span>
              <span>{isProfileData.caste}</span>
              <span>Father's Name</span>
              <span>{isProfileData.fatherName}</span>
              <span>Occupation</span>
              <span>{isProfileData.fatherOccupation}</span>
              <span>Phone No.</span>
              <span>{isProfileData.fcontactNo}</span>
              <span>Annual Income</span>
              <span>{isProfileData.fannualIncome}</span>
              <span>Mother's Name</span>
              <span>{isProfileData.motherName}</span>
              <span>Occupation</span>
              <span>{isProfileData.moccupation}</span>
              <span>Phone No.</span>
              <span>{isProfileData.mcontactNo}</span>

              <span>Strength</span>

              <span>{isProfileData.strength}</span>

              <span>Weakness</span>

              <span>{isProfileData.weakness}</span>

              <span>Achievements</span>
              <span>{isProfileData.achievment}</span>
              <span>Ambition</span>
              <span>{isProfileData.ambition}</span>
            </p>
          </React.Fragment>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileTabData;
