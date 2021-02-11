import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Cookies from "js-cookie";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import {
  getTeachingStaffData,
  getNonTeachingStaffData,
} from "../../services/hodServices/staffServices";
import css from "@emotion/css";
import TableWrap from "../../components/TableUtilities/TableWrap";

const Staff = () => {
  const ProfileId = Cookies.get("employeeID");
  const [isStaffData, setIsStaffData] = useState([]);
  const [isButtonText, setIsButtonText] = useState();

  const loadTeachingStaffData = async () => {
    const cData = await getTeachingStaffData(ProfileId);
    setIsStaffData(cData?.teachingStaffDetails);
    setIsButtonText(!isButtonText);
  };

  const tdValuesTeachingStaff = [
    { valueProperty: "teachingStaffNo" },
    { valueProperty: "teachingStaffName" },
    { valueProperty: "teachingStaffDisg" },
    { valueProperty: "teachingStaffhigestQual" },
    { valueProperty: "teachingStaffExp" },
  ];

  const tdValuesNonTeachingStaff = [
    { valueProperty: "nonTeachingStaffNo" },
    { valueProperty: "nonTeachingStaffName" },
    { valueProperty: "nonTeachingStaffDisg" },
    { valueProperty: "nonTeachingStaffhigestQual" },
    { valueProperty: "nonTeachingStaffExp" },
  ];

  const thValues = [
    "Faculty Number",
    "Faculty Name",
    "Designation",
    "Highest Qualification",
    "Total Years of Experience",
  ];

  const loadNonTeachingStaffData = async () => {
    const cData = await getNonTeachingStaffData(ProfileId);
    setIsStaffData(cData?.nonTeachingStaffDetails);
    console.log(cData);
    setIsButtonText(!isButtonText);
  };

  useEffect(() => {
    loadTeachingStaffData();
    setIsButtonText(true);
  }, []);
  return (
    <React.Fragment>
      <Layout>
        <div>
          <button
            type="button"
            className=" float-right bg-blue-400 block  mx-auto px-2 py-1 rounded"
            onClick={
              isButtonText ? loadNonTeachingStaffData : loadTeachingStaffData
            }
          >
            {isButtonText ? "Non-Teaching Staff" : "Teaching Staff"}
          </button>
        </div>
        {isStaffData && isStaffData.length > 0 && (
          <TableWrap
            thValues={thValues}
            tdValues={
              isButtonText ? tdValuesTeachingStaff : tdValuesNonTeachingStaff
            }
            data={isStaffData}
          />
        )}
      </Layout>
    </React.Fragment>
  );
};

export default Staff;
