import React, { useState } from "react";
import { Tabs, Tab, Content } from "../../../components/profile/tabs.styles";
import InProgressData from "./communitcationDetailsContent/inProgress";
import CompletedComData from "./communitcationDetailsContent/completedComm";

const CommunicationDetails = ({ studentModelData }) => {
  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <React.Fragment>
      <br></br>
      <br></br>

      <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
          Not Started / In Progress
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
          Completed
        </Tab>
      </Tabs>

      <Content active={active === 0}>
        <InProgressData studentModelData={studentModelData} />
      </Content>

      <Content active={active === 1}>
        <CompletedComData studentEnrollId={studentModelData.enrollstudentId} />
      </Content>
    </React.Fragment>
  );
};

export default CommunicationDetails;
