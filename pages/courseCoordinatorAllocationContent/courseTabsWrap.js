import React, { useState, useEffect } from "react";
import { Tabs, Tab, Content } from "../../components/profile/tabs.styles";
import css from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Syllabus from "../../components/course-coordinator/syllabus";
import Questions from "../../components/course-coordinator/questions";
import COPOMapping from "../../components/course-coordinator/COPOMapping";

const CourseTabsWrap = ({
  getExpandedRowData,
  courseData
}) => {
  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };



  return (
    <React.Fragment>
      <div className="pt-10 mt-6 mb-6 bg-white shadow">
        <Tabs>
          <Tab onClick={handleClick} active={active === 0} id={0}>
            Syllabus
    </Tab>

          <Tab onClick={handleClick} active={active === 1} id={1}>
            CO-PO Mapping
    </Tab>

          <Tab onClick={handleClick} active={active === 2} id={2}>
            Question Paper Entry
    </Tab>

          <Tab onClick={handleClick} active={active === 3} id={3}>
            Reports
    </Tab>
          <span className="absolute cursor-pointer bg-gray-200 w-6 h-6 rounded-full block shadow hover:bg-green-400" css={css` top:4px; right:4px; text-center`}>
            <FontAwesomeIcon
              css={css` position:relative; left:6px; top:2px;`}
              icon={faTimes}
              onClick={() => getExpandedRowData()}
            />
      &nbsp;&nbsp;
    </span>
        </Tabs>

        <Content active={active === 0}>
          <Syllabus
            courseData={courseData}
          ></Syllabus>
        </Content>
        <Content active={active === 1}>
          <COPOMapping
            courseData={courseData}
          >
          </COPOMapping>
        </Content>
        <Content active={active === 2}>
          <Questions />
        </Content>
        <Content active={active === 3}>Reports data</Content>


      </div>
   
    </React.Fragment>
  );
};

export default CourseTabsWrap;
