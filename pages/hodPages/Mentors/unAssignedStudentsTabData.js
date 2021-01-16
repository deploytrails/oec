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

  const excludeColumns = ["departmentPrimaryId", "enrollstudentId"];
  const searchFilterFunction = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setFilteredData(isUnAssignedStudentsData);
    else {
      const filteredData = isUnAssignedStudentsData.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setFilteredData(filteredData);
    }
  };

  useEffect(() => {
    getUnAssignedStudentsDetails();
  }, []);
  return (
    <React.Fragment>
      <div
        className="float-left"
        css={css`
          margin-bottom: 2%;
        `}
      >
        <label htmlFor="search">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none "
            onChange={(e) => searchFilterFunction(e.target.value)}
          />
        </label>
      </div>
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
