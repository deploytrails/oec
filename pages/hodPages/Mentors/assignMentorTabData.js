import React, { useState, useEffect } from "react";
import { getMentorData } from "../../../services/hodServices/mentorService";
import TableWrap from "../../../components/TableUtilities/TableWrap";

const AssignMentorTabData = ({ profileId }) => {
  const [isMentorsData, setIsMentorsData] = useState([]);
  const getMentorList = async () => {
    const cData = await getMentorData(profileId);
    setIsMentorsData(cData?.MentorsDetailList);
    console.log(cData);
  };
  const thValues = [
    "Faculty Number",
    "Faculty Name",
    "No.of Students Assigned",
    "Mentors Assigned to Students",
  ];

  const tdValues = [
    { valueProperty: "2" },
    { valueProperty: "1" },
    { valueProperty: "3" },
  ];

  useEffect(() => {
    getMentorList();
  }, []);
  return (
    <React.Fragment>
      <div>
        {isMentorsData && isMentorsData.length > 0 && (
          <TableWrap
            thValues={thValues}
            tdValues={tdValues}
            data={isMentorsData}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default AssignMentorTabData;
