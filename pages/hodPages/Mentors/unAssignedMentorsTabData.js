import React, { useState, useEffect } from "react";
import TableWrap from "../../../components/TableUtilities/TableWrap";
import css from "@emotion/css";
const UnAssignedMentorsTabData = ({ isUnAssignedData }) => {
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setFilteredData(isUnAssignedData);
  }, [isUnAssignedData]);
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
    if (lowercasedValue === "") setFilteredData(isUnAssignedData);
    else {
      const filteredData = isUnAssignedData.filter((item) => {
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

export default UnAssignedMentorsTabData;
