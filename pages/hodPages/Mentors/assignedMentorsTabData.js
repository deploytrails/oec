import React, { useState, useEffect } from "react";
import TableWrap from "../../../components/TableUtilities/TableWrap";
import css from "@emotion/css";

const AssignedMentorsTabData = ({ isAssignedData }) => {
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setFilteredData(isAssignedData);
  }, [isAssignedData]);
  const thValues = [
    "Faculty Number",
    "Faculty Name",
    "No.of Students Assigned",
  ];

  const tdValues = [
    { valueProperty: "2" },
    { valueProperty: "1" },
    { valueProperty: "3" },
  ];

  const excludeColumns = ["0"];
  const searchFilterFunction = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setFilteredData(isAssignedData);
    else {
      const filteredData = isAssignedData.filter((item) => {
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

export default AssignedMentorsTabData;
