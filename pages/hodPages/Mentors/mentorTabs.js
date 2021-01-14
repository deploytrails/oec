import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import { Tabs, Tab, Content } from "../../../components/profile/tabs.styles";
import AssignMentorTabData from "./assignMentorTabData";
import UnAssignedStudentsTabData from "./unAssignedStudentsTabData";
import AssignedStudentsTabData from "./assignedStudentsTabData";
import { getMentorData } from "../../../services/hodServices/mentorService";
import UnAssignedMentorsTabData from "./unAssignedMentorsTabData";
import AssignedMentorsTabData from "./assignedMentorsTabData";

const MentorTabsWrap = ({ profileId }) => {
  const [active, setActive] = useState(0);
  const [isMoreTabs, setIsMoreTabs] = useState(false);
  const [isAssignedData, setIsAssignedData] = useState([]);
  const [isUnAssignedData, setIsUnAssignedData] = useState([]);

  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  const getMentorList = async () => {
    const cData = await getMentorData(profileId);
    var assignedMentors = [];
    var unAssignedMentors = [];

    cData?.MentorsDetailList.forEach((data) => {
      data[3] >= 30
        ? (assignedMentors = [...assignedMentors, data])
        : (unAssignedMentors = [...unAssignedMentors, data]);
    });
    setIsAssignedData(assignedMentors);
    setIsUnAssignedData(unAssignedMentors);
  };

  const changeTabset = () => {
    setIsMoreTabs(!isMoreTabs);
  };

  useEffect(() => {
    getMentorList();
  }, []);

  return (
    <React.Fragment>
      <div
        className="pt-10 mt-6 mb-6 bg-white shadow"
        css={css`
          min-height: 100vh;
          overflow: auto;
        `}
      >
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
          <AssignMentorTabData isUnAssignedData={isUnAssignedData} />
        </Content>
        <Content active={active === 1}>
          <UnAssignedMentorsTabData isUnAssignedData={isUnAssignedData} />
        </Content>
        <Content active={active === 2}>
          <UnAssignedStudentsTabData profileId={profileId} />
        </Content>
        <Content active={active === 3}>
          <AssignedMentorsTabData isAssignedData={isAssignedData} />
        </Content>
        <Content active={active === 4}>
          <AssignedStudentsTabData profileId={profileId} />
        </Content>
      </div>
    </React.Fragment>
  );
};

export default MentorTabsWrap;
