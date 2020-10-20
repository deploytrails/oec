import React, { useState } from "react";
import { Tabs, Tab, Content } from "../../../components/profile/tabs.styles";
import FinanceDetails from "./studentDetailsContent/financeDetails";
import AttendacneDetails from "./studentDetailsContent/attendanceDetails";
import MarksDetails from "./studentDetailsContent/marksDetails";

const StudentDetails = ({ studentModelData }) => {
  const [active, setActive] = useState(0);
  const [isMoreTabs, setIsMoreTabs] = useState(false);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  const changeTabset = () => {
    setIsMoreTabs(!isMoreTabs);
  };

  return (
    <React.Fragment>
      <br></br>
      <br></br>

      <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
          Finance Details
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
          Attendance Details
        </Tab>

        <Tab onClick={handleClick} active={active === 2} id={2}>
          Marks Details
        </Tab>
      </Tabs>

      <Content active={active === 0}>
        <FinanceDetails studentEnrollId={studentModelData.enrollstudentId} />
      </Content>
      <Content active={active === 1}>
        <AttendacneDetails studentEnrollId={studentModelData.enrollstudentId} />
      </Content>
      <Content active={active === 2}>
        <MarksDetails studentEnrollId={studentModelData.enrollstudentId} />
      </Content>
    </React.Fragment>
  );
};

export default StudentDetails;
