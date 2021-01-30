import React, { useState, useEffect } from "react";
import { Tabs, Tab, Content } from "../../../components/profile/tabs.styles";
import css from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faUserGraduate,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import TextBooksTabData from "./TextBooksTabData";
import ReferenceBooksTabData from "./referenceBooksTabData";
import ExternalResourceTabData from "./externalResourceTabData";
import NewRecordModal from "./newRecordModal";
import { getReferenceData } from "../../../services/allocateServices";
import PulseLoader from "react-spinners/PulseLoader";

const ReferenceModelData = ({ activeTabData, FacultyId }) => {
  const [active, setActive] = useState(0);
  const tabDetailName = [
    "Text Books & Authors",
    "Reference Books",
    "External Reference Links & Faculty Notes",
  ];
  const newRecordText = [
    "Text Book",
    "Reference Book",
    "Reference Links/Notes",
  ];
  const iconList = [faUserGraduate, faBook, faLink];
  const [forBookTable, setForBookTable] = useState([]);
  const [forLinkTable, setForLinkTable] = useState([]);
  const [unitsData, SetUnitsData] = useState([]);
  const [refBookData, setRefBookData] = useState([]);
  const [show, setShow] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const toggleModal = async () => {
    setShow(!show);
  };

  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  const loadReferenceData = async () => {
    const data = await getReferenceData(
      FacultyId,
      activeTabData[1].coursePrimaryId
    );
    //  console.log(data);
    setForBookTable(data?.courseBooks);
    setForLinkTable(data?.courseResources);
    SetUnitsData(data?.courseUnits);
    setRefBookData(data.courseRefBooks);
    setShowLoader(false);
  };

  useEffect(() => {
    loadReferenceData();
  }, []);
  return (
    <React.Fragment>
      {showLoader && <PulseLoader size="10" color="#3aafa9" />}
      {!showLoader && (
        <div>
          <h2
            css={css`
              font-size: 21px;
            `}
          >
            <FontAwesomeIcon icon={iconList[active]} /> {tabDetailName[active]}
          </h2>
          <Tabs className="float-right">
            <Tab onClick={handleClick} active={active === 0} id={0}>
              Text Books
            </Tab>

            <Tab onClick={handleClick} active={active === 1} id={1}>
              Reference Books
            </Tab>

            <Tab onClick={handleClick} active={active === 2} id={2}>
              External Resource Links & Notes
            </Tab>
          </Tabs>

          <Content active={active === 0}>
            <TextBooksTabData forBookTable={forBookTable} />
          </Content>
          <Content active={active === 1}>
            <ReferenceBooksTabData refBookData={refBookData} />
          </Content>
          <Content active={active === 2}>
            <ExternalResourceTabData forLinkTable={forLinkTable} />
          </Content>
          <button
            onClick={() => toggleModal()}
            className="py-2 px-4 rounded float-right bg-blue-400 mr-2 text-center text-white mb-4 hover:bg-blue-500 focus:outline-none"
          >
            Add New&nbsp;{newRecordText[active]}
          </button>
          {show && (
            <NewRecordModal
              toggleModal={toggleModal}
              activeTab={active}
              activeTabData={unitsData}
              FacultyId={FacultyId}
            />
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default ReferenceModelData;
