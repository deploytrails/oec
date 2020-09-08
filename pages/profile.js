import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Layout from "../components/layout";
import TabsWrap from "../components/profile/tabs";
import {
  getProfileData,
  getQualificationDetails,
  getWorkExpDetails,
  getBookPubDetails,
  getResearchGuidlines,
  getWorkshopDetails,
  getgrantsDetails,
  getConferenceDetails,
  getPhdDetails,
} from "../services/profileService";

const Profile = () => {
  const [isProfileData, setIsProfileData] = useState({});
  const [isQualificData, setisQualificData] = useState({});
  const [isExpData, setIsExpData] = useState({});
  const [isBookPubData, setIsBookPubData] = useState({});
  const [isResearchGuidData, setesearchGuidData] = useState({});
  const [isWorkShopData, setWorkShopData] = useState({});
  const [isGrantsData, setGrantsData] = useState({});
  const [isConfData, setIsConfData] = useState({});
  const [isPhData, setIsPhData] = useState({});

  const ProfileId = Cookies.get("employeeID");
  //fetching profile Details
  const loadProfileData = async () => {
    const profileInfo = await getProfileData(ProfileId);
    setIsProfileData(profileInfo);
  };

  const loadQualificationInfo = async () => {
    const qualficInfo = await getQualificationDetails(ProfileId);
    setisQualificData(qualficInfo);
  };

  const loadExpInfo = async () => {
    const expInfo = await getWorkExpDetails(ProfileId);
    setIsExpData(expInfo);
  };

  const loadBookPubInfo = async () => {
    const bookPubInfo = await getBookPubDetails(ProfileId);
    setIsBookPubData(bookPubInfo);
  };

  const loadResearchGuidInfo = async () => {
    const rshGuidInfo = await getResearchGuidlines(ProfileId);
    setesearchGuidData(rshGuidInfo);
  };

  const loadWorkshopInfo = async () => {
    const wshpInfo = await getWorkshopDetails(ProfileId);
    setWorkShopData(wshpInfo);
  };

  const loadGrantsInfo = async () => {
    const gransData = await getgrantsDetails(ProfileId);
    setGrantsData(gransData);
  };

  const loadConfInfo = async () => {
    const confData = await getConferenceDetails(ProfileId);
    setIsConfData(confData);
  };

  const loadPhInfo = async () => {
    const phData = await getPhdDetails(ProfileId);
    setIsPhData(phData);
  };

  useEffect(() => {
    loadProfileData();
  }, []);

  useEffect(() => {
    loadQualificationInfo();
  }, []);

  useEffect(() => {
    loadExpInfo();
  }, []);

  useEffect(() => {
    loadBookPubInfo();
  }, []);

  useEffect(() => {
    loadResearchGuidInfo();
  }, []);

  useEffect(() => {
    loadWorkshopInfo();
  }, []);

  useEffect(() => {
    loadGrantsInfo();
  }, []);

  useEffect(() => {
    loadConfInfo();
  }, []);

  useEffect(() => {
    loadPhInfo();
  }, []);
  //update details phd

  return (
    <React.Fragment>
      <Layout>
        <div className=" bg-white mt-8">
          <TabsWrap
            isProfileData={isProfileData}
            isQualificData={isQualificData?.profile}
            isExpeInfo={isExpData?.profile}
            isBookPubInfo={isBookPubData?.profile}
            isResearchGuidData={isResearchGuidData?.profile}
            isWorkShopData={isWorkShopData?.profile}
            isGrantsData={isGrantsData?.profile}
            isConfData={isConfData?.profile}
            isPhData={isPhData?.profile}
            loadPhInfo={loadPhInfo}
            loadConfInfo={loadConfInfo}
            loadGrantsInfo={loadGrantsInfo}
            loadWorkshopInfo={loadWorkshopInfo}
          />
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Profile;
