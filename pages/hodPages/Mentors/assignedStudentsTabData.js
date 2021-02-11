import React, { useState, useEffect } from "react";
import { getAssignedStudentsData } from "../../../services/hodServices/mentorService";
import TableWrap from "../../../components/TableUtilities/TableWrap";
import css from "@emotion/css";

const AssignedStudentsTabData = ({ profileId }) => {
  const [isAssignedStudentsData, setIsAssignedStudentsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const getAssignedStudentsDetails = async () => {
    const cData = await getAssignedStudentsData(profileId);
    setIsAssignedStudentsData(cData?.assignedStudentsData);
    setFilteredData(cData?.assignedStudentsData);
  };
  const thValues = [
    "Student Roll Number",
    "Student Name",
    "Faculty Number",
    "Faculty Name",
  ];

  const tdValues = [
    { valueProperty: "1" },
    { valueProperty: "0" },
    { valueProperty: "2" },
    { valueProperty: "3" },
  ];

  useEffect(() => {
    getAssignedStudentsDetails();
  }, []);

  const excludeColumns = [];
  const searchFilterFunction = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setFilteredData(isAssignedStudentsData);
    else {
      const filteredData = isAssignedStudentsData.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });

      setFilteredData(filteredData);
    }
  };

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

export default AssignedStudentsTabData;
