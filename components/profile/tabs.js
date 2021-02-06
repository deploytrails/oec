import React, { useState } from "react";
import css from "@emotion/css";
import { Tabs, Tab, Content } from "./tabs.styles";
//components
import ProfileInfo from "./profileInfo";
import ContactInfo from "./contactinfo";
import QualificationInfo from "./profileInfo/qualifications";
import WorkExp from "./profileInfo/workExp";
import BookPublications from "./profileInfo/bookPublications";
import JournalPublications from "./profileInfo/journalPublications";
import ResearchGuidlines from "./profileInfo/researchGuidlines";
import WorkshopDetails from "./profileInfo/workshopDetails";
import GrantRecieved from "./profileInfo/grantRecieved";
import Conferences from "./profileInfo/conferences";
import PhdDetails from "./profileInfo/phdDetails";

const TabsWrap = ({
  isProfileData,
  isQualificData,
  isExpeInfo,
  isBookPubInfo,
  isResearchGuidData,
  isWorkShopData,
  isGrantsData,
  isConfData,
  isPhData,
  isJourData,
  loadPhInfo, //update phd
  loadConfInfo,
  loadGrantsInfo,
  loadWorkshopInfo,
  loadResearchGuidInfo,
  loadBookPubInfo,
  loadQualificationInfo,
  loadExpInfo,
  loadProfileData,
  loadJournalPaperInfo
}) => {
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

  console.log(isProfileData);

  return (
    <React.Fragment>
      <div className="p-0">
        <Tabs>
          <Tab onClick={handleClick} active={active === 0} id={0}>
            Personal Details
          </Tab>

          <Tab onClick={handleClick} active={active === 1} id={1}>
            Contact Details
          </Tab>

          <Tab onClick={handleClick} active={active === 2} id={2}>
            Qualification Details
          </Tab>
          <Tab onClick={handleClick} active={active === 3} id={3}>
            Work Experience
          </Tab>
          <Tab onClick={handleClick} active={active === 4} id={4}>
            Book Publications
          </Tab>
          <Tab onClick={handleClick} active={active === 5} id={5}>
            Journal Publications
          </Tab>
          <Tab onClick={handleClick} active={active === 6} id={6}>
            Research Guidlance
          </Tab>
          <Tab
            className="relative"
            onClick={changeTabset}
            css={
              isMoreTabs &&
              css`
                background-color: #fff;
              `
            }
          >
            <span className="pr-1 font-bold text-md">+ MORE</span>
            {isMoreTabs && (
              <div
                className="absolute bg-white shadow w-40"
                css={css`
                  left: -85px;
                  top: 40px;
                  & > button {
                    display: block;
                    padding: 8px 10px;
                    width: 100%;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                  }
                `}
              >
                <button
                  type="button"
                  className="focus:outline-none"
                  onClick={handleClick}
                  id={7}
                >
                  Workshop Details
                </button>
                <button
                  type="button"
                  className="focus:outline-none"
                  onClick={handleClick}
                  id={8}
                >
                  Grant Received
                </button>
                <button
                  type="button"
                  className="focus:outline-none"
                  onClick={handleClick}
                  id={9}
                >
                  Conferences
                </button>
                <button
                  type="button"
                  className="focus:outline-none"
                  onClick={handleClick}
                  id={10}
                >
                  Ph.D Details
                </button>
              </div>
            )}
          </Tab>
        </Tabs>

        <Content active={active === 0}>
          <ProfileInfo
            isProfileData={isProfileData}
            loadProfileData={loadProfileData}
          />
        </Content>
        <Content active={active === 1}>
          <ContactInfo
            isProfileData={isProfileData}
            loadProfileData={loadProfileData}
          />
        </Content>
        <Content active={active === 2}>
          <QualificationInfo
            isQualificData={isQualificData}
            loadQualificationInfo={loadQualificationInfo}
            isProfileData={isProfileData}
          />
        </Content>
        <Content active={active === 3}>
          <WorkExp isExpeInfo={isExpeInfo} loadExpInfo={loadExpInfo} />
        </Content>
        <Content active={active === 4}>
          <BookPublications
            isBookPubInfo={isBookPubInfo}
            loadBookPubInfo={loadBookPubInfo}
          />
        </Content>
        <Content active={active === 5}>
          <JournalPublications
            isJourData={isJourData}
            loadJournalPaperInfo={loadJournalPaperInfo}
          />
        </Content>
        <Content active={active === 6}>
          <ResearchGuidlines
            isResearchGuidData={isResearchGuidData}
            loadResearchGuidInfo={loadResearchGuidInfo}
          />
        </Content>
        <Content active={active === 7}>
          <WorkshopDetails
            isWorkShopData={isWorkShopData}
            loadWorkshopInfo={loadWorkshopInfo}
          />
        </Content>
        <Content active={active === 8}>
          <GrantRecieved
            isGrantsData={isGrantsData}
            loadGrantsInfo={loadGrantsInfo}
          />
        </Content>
        <Content active={active === 9}>
          <Conferences isConfData={isConfData} loadConfInfo={loadConfInfo} />
        </Content>
        <Content active={active === 10}>
          <PhdDetails isPhData={isPhData} loadPhInfo={loadPhInfo} />
        </Content>
      </div>
    </React.Fragment>
  );
};

export default TabsWrap;
