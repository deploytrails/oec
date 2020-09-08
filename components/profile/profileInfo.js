import React from "react";
import LeftInfo from "./profileInfo/leftInfo";
import RightInfo from "./profileInfo/rightInfo";

const ProfileInfo = ({ isProfileData }) => {
  return (
    <React.Fragment>
      <div className="clearfix px-6 pb-6">
        <div className="w-6/12 float-left">
          <LeftInfo isProfileData={isProfileData} />
        </div>

        <div className="w-6/12 float-right">
          <RightInfo pInfo={isProfileData} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileInfo;
