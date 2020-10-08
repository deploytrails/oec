import React, { useState } from "react";
import css from "@emotion/css";
import { Tabs, Tab, Content } from "../../../components/profile/tabs.styles";
import ProfileTabData from "./profileTabData";
import EducationTabData from "./educationTabData";
import SemMarksTabData from "./semMarksTabData";

const StudentTabsWrap = ({ studentProfileId }) => {
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
          Profile
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
          Education
        </Tab>

        <Tab onClick={handleClick} active={active === 2} id={2}>
          Semester Wise Marks
        </Tab>
      </Tabs>

      <Content active={active === 0}>
        <ProfileTabData studentProfileId={studentProfileId} />
      </Content>
      <Content active={active === 1}>
        <EducationTabData studentProfileId={studentProfileId} />
      </Content>
      <Content active={active === 2}>
        <SemMarksTabData />
      </Content>
    </React.Fragment>
  );
};

export default StudentTabsWrap;
