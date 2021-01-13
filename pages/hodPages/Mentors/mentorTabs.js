import React, { useState } from "react";
import css from "@emotion/css";
import { Tabs, Tab, Content } from "../../../components/profile/tabs.styles";
import AssignMentorTabData from "./assignMentorTabData";
import UnAssignedStudentsTabData from "./unAssignedStudentsTabData";
import AssignedStudentsTabData from "./assignedStudentsTabData";

const MentorTabsWrap = ({ profileId }) => {
  const [active, setActive] = useState(0);
  const [isMoreTabs, setIsMoreTabs] = useState(false);
  const handleClick = (e) => {
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
      <div className="pt-10 mt-6 mb-6 bg-white shadow">
        <Tabs>
          <Tab onClick={handleClick} active={active === 0} id={0}>
            Assign Mentor
          </Tab>

          <Tab onClick={handleClick} active={active === 1} id={1}>
            View Unassigned Mentors
          </Tab>

          <Tab onClick={handleClick} active={active === 2} id={2}>
            View Unassigned Students
          </Tab>

          <Tab onClick={handleClick} active={active === 3} id={3}>
            View Assigned Mentors
          </Tab>

          <Tab onClick={handleClick} active={active === 4} id={4}>
            View Assigned Students
          </Tab>
        </Tabs>

        <Content active={active === 0}>
          <AssignMentorTabData profileId={profileId} />
        </Content>
        <Content active={active === 2}>
          <UnAssignedStudentsTabData profileId={profileId} />
        </Content>
        <Content active={active === 4}>
          <AssignedStudentsTabData profileId={profileId} />
        </Content>
      </div>
    </React.Fragment>
  );
};

export default MentorTabsWrap;
