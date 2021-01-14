import React, { useState, useEffect } from "react";
import TableWrap from "../../../components/TableUtilities/TableWrap";
import StudentDetailsModal from "./studentDetailsModal";

const AssignMentorTabData = ({ isUnAssignedData }) => {
  const [show, setShow] = useState(false);
  const [isUnAssignedMentor, setIsUnAssignedMentor] = useState(false);
  const thValues = [
    "Faculty Number",
    "Faculty Name",
    "No.of Students Assigned",
    "Mentors Assigned to Students",
  ];
  const openModal = (index) => {
    setShow(!show);
    setIsUnAssignedMentor(isUnAssignedData[index]);
    console.log(isUnAssignedData[index]);
  };
  const tdValues = [
    { valueProperty: "2" },
    { valueProperty: "1" },
    { valueProperty: "3" },
    {
      valueProperty: "Assigned Students",
      type: "button",
      onClickfunction: (e) => {
        openModal(e);
      },
      // ,
      // valueMethod: "test",
      // valueButton: "AssignStudents",
    },
  ];

  return (
    <React.Fragment>
      <div>
        {isUnAssignedData && isUnAssignedData.length > 0 && (
          <TableWrap
            thValues={thValues}
            tdValues={tdValues}
            data={isUnAssignedData}
          />
        )}
      </div>
      {show && (
        <StudentDetailsModal
          openModal={openModal}
          employeeData={isUnAssignedMentor}
        />
      )}
    </React.Fragment>
  );
};

export default AssignMentorTabData;
