import React, { useState, useEffect } from "react";
import { getUnAssignedStudentsData } from "../../../services/hodServices/mentorService";
import TableWrap from "../../../components/TableUtilities/TableWrap";
import css from "@emotion/css";

const UnAssignedStudentsTabData = ({ profileId }) => {
  const [isUnAssignedStudentsData, setIsUnAssignedStudentsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const getUnAssignedStudentsDetails = async () => {
    const cData = await getUnAssignedStudentsData(profileId);
    setIsUnAssignedStudentsData(cData?.unassignedStudentsData);
    setFilteredData(cData?.unassignedStudentsData);
  };
  const thValues = ["Student Roll Number", "Student Name", "Semester"];

  const tdValues = [
    { valueProperty: "roll" },
    { valueProperty: "firstName" },
    { valueProperty: "semesterCode" },
  ];

  useEffect(() => {
    getUnAssignedStudentsDetails();
  }, []);
  return (
    <React.Fragment>
      <div>
        {filteredData && filteredData.length > 0 && (
          <TableWrap
            thValues={thValues}
            tdValues={tdValues}
            data={filteredData}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default UnAssignedStudentsTabData;
