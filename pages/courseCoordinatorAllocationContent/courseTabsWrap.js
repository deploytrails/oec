import React, { useState } from "react";
import { Tabs, Tab, Content } from "../../components/profile/tabs.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CourseTabsWrap = ({ getExpandedRowData }) => {
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
        <span style={{ float: "right" }}>
          {" "}
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => getExpandedRowData()}
          />
          &nbsp;&nbsp;
        </span>
      </Tabs>

      <Content active={active === 0}>Syllabus data</Content>
      <Content active={active === 1}>CO-PO Mapping data</Content>
      <Content active={active === 2}>Question Paper Entry data</Content>
      <Content active={active === 3}>Reports data</Content>
    </React.Fragment>
  );
};

export default CourseTabsWrap;
