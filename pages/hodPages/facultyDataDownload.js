import React, { useState } from "react";
import Layout from "../../components/layout";
import { getPublicationData } from "../../services/hodServices/facultyDataDownloadService";
import TableWrap from "../../components/TableUtilities/TableWrap";
import css from "@emotion/css";
import { COLORS } from "../../constants";
import CommFileDownload from "../../components/FileDownloads/commFileDownload";
import Cookies from "js-cookie";
import PulseLoader from "react-spinners/PulseLoader";

const FacultyDataDownload = () => {
  const departmentId = Cookies.get("departId");
  const [isPublicationData, setIsPublicationData] = useState([]);
  const [thValues, setThValues] = useState([]);
  const [tdValues, setTdValues] = useState([]);
  const [isheading, setIsHeading] = useState("");
  const [isUrlPathDownload, setIsUrlPathDownload] = useState("");
  const [isFileName, setIsFileName] = useState("");
  const [ispulseLoader, setIspulseLoader] = useState(true);
  const isDataList = [
    { value: "Book Publications" },
    { value: "Grant Recevied" },
    { value: "Conference Details" },
    { value: "Journal Publications" },
    { value: "Research Publications" },
    { value: "Workshop Details" },
  ];

  const loadData = async (event) => {
    setIspulseLoader(true);
    const targetValue = event.target.value;
    setIsHeading(targetValue);
    switch (targetValue) {
      case "Book Publications":
        const cData = await getPublicationData(
          departmentId,
          "getFacultyBookPublicationDetails"
        );
        setIsPublicationData(cData?.facultyBookPublicationDetails);
        setThValues([
          "Faculty Number",
          "Faculty Name",
          "Book Publication Type",
          "Book Publication Year",
          "Book Title",
          "ISBN No.",
          "Publisher Name",
        ]);
        setTdValues([
          { valueProperty: "facultyNumber" },
          { valueProperty: "facultyName" },
          { valueProperty: "bookPublicationType" },
          { valueProperty: "bookPublicationYear" },
          { valueProperty: "bookTitle" },
          { valueProperty: "isbnNo" },
          { valueProperty: "publisherName" },
        ]);
        setIsUrlPathDownload(
          "getFacultyBookPublicationData?departmentID=" + departmentId
        );
        setIsFileName("BookPublicationData.xlsx");
        setIspulseLoader((ispulseLoader) => !ispulseLoader);
        break;
      case "Grant Recevied":
        const cGrantData = await getPublicationData(
          departmentId,
          "getFacultyGrantReceivedDetails"
        );

        setIsPublicationData(cGrantData?.grantReceiveDetails);
        setThValues([
          "Faculty Number",
          "Faculty Name",
          "Scheme",
          "Amount Sanctioned",
          "Sanction Letter No.",
          "utl Certificate Details",
          "utl Pos Today",
          "Year",
        ]);

        setTdValues([
          { valueProperty: "facultNumber" },
          { valueProperty: "facultyName" },
          { valueProperty: "scheme" },
          { valueProperty: "amountSanctioned" },
          { valueProperty: "sanctionLetterNo" },
          { valueProperty: "utlCertDetails" },
          { valueProperty: "utlPosToday" },
          { valueProperty: "year" },
        ]);
        setIsUrlPathDownload(
          "getFacultyGrantReceivedData?departmentID=" + departmentId
        );
        setIsFileName("GrantReceivedData.xlsx");
        setIspulseLoader((ispulseLoader) => !ispulseLoader);
        break;
      case "Conference Details":
        const cConfData = await getPublicationData(
          departmentId,
          "getFacultyConferenceDetails"
        );
        setIsPublicationData(cConfData?.conferenceDetails);
        setThValues([
          "Faculty Number",
          "Faculty Name",
          "Title of the Conference",
          "National / International",
          "Month & Year",
          "Conference / Seminar",
          "ISSN / ISBN No.",
          "Organized By",
        ]);

        setTdValues([
          { valueProperty: "facultNumber" },
          { valueProperty: "facultyName" },
          { valueProperty: "titleConference" },
          { valueProperty: "internationalNational" },
          { valueProperty: "conferenceMonthYear" },
          { valueProperty: "typeOfconferenceName" },
          { valueProperty: "issnIsbnNo" },
          { valueProperty: "organizedBy" },
        ]);
        setIsUrlPathDownload(
          "getFacultyConferenceData?departmentID=" + departmentId
        );
        setIsFileName("ConferenceData.xlsx");
        setIspulseLoader((ispulseLoader) => !ispulseLoader);
        break;

      case "Journal Publications":
        const cJournalData = await getPublicationData(
          departmentId,
          "getJournalDetails"
        );
        setIsPublicationData(cJournalData?.paperPublicationDetails);
        setThValues([
          "Faculty Number",
          "Faculty Name",
          "Author / CoAuthor",
          "Title of the Paper",
          "Title of the Journal",
          "National / International",
          "Page Nos",
          "ISSN No.",
          "Month & Year",
          "Issue Type",
          "Issue No",
          "Impact Factor",
          "H Index",
        ]);

        setTdValues([
          { valueProperty: "facultNumber" },
          { valueProperty: "facultyName" },
          { valueProperty: "authorCoAuthor" },
          { valueProperty: "publicationTitle" },
          { valueProperty: "journalName" },
          { valueProperty: "publicationType" },
          { valueProperty: "pageNos" },
          { valueProperty: "issnNo" },
          { valueProperty: "publicationMonthYear" },
          { valueProperty: "issueType" },
          { valueProperty: "issueNo" },
          { valueProperty: "impactFactor" },
          { valueProperty: "hindex" },
        ]);
        setIsUrlPathDownload("getJournalData?departmentID=" + departmentId);
        setIsFileName("JournalPublicationsData.xlsx");
        setIspulseLoader((ispulseLoader) => !ispulseLoader);
        break;
      case "Research Publications":
        const cResearchData = await getPublicationData(
          departmentId,
          "getResearchGuidanceDetails"
        );
        setIsPublicationData(cResearchData?.researchGuidanceDetails);
        setThValues([
          "Faculty Number",
          "Faculty Name",
          "Name of the Scholar",
          "Year Of Admission",
          "Ph.D / M.Phil",
          "Topic",
          "Name of the University",
          "Completed/Submitted/Pursuing",
        ]);

        setTdValues([
          { valueProperty: "facultNumber" },
          { valueProperty: "facultyName" },
          { valueProperty: "scholarName" },
          { valueProperty: "yearOfAdmission" },
          { valueProperty: "phdOrMphil" },
          { valueProperty: "topic" },
          { valueProperty: "universityName" },
          { valueProperty: "status" },
        ]);
        setIsUrlPathDownload(
          "getResearchGuidanceData?departmentID=" + departmentId
        );
        setIsFileName("ResearchGuidanceData.xlsx");
        setIspulseLoader((ispulseLoader) => !ispulseLoader);
        break;
      case "Workshop Details":
        const cWorkData = await getPublicationData(
          departmentId,
          "getWorkshopDetails"
        );
        setIsPublicationData(cWorkData?.workshopDetails);
        setThValues([
          "Faculty Number",
          "Faculty Name",
          "Workshop",
          "Workshop Title",
          "Organized By",
          "Duration",
          "Month & Year",
          "Place",
          "National / International",
        ]);

        setTdValues([
          { valueProperty: "facultNumber" },
          { valueProperty: "facultyName" },
          { valueProperty: "workshop" },
          { valueProperty: "workShopVenue" },
          { valueProperty: "organizedBy" },
          { valueProperty: "duration" },
          { valueProperty: "monthYear" },
          { valueProperty: "place" },
          { valueProperty: "workshopType" },
        ]);
        setIsUrlPathDownload("getWorkshopData?departmentID=" + departmentId);
        setIsFileName("WorkshopData.xlsx");
        setIspulseLoader((ispulseLoader) => !ispulseLoader);
        break;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <Layout>
        <div className="grid grid-rows-1 grid-flow-col gap-4">
          <div>
            <h1 className="text-2xl font-bold leading-tight text-gray-900">
              {isheading}
            </h1>
          </div>
          <div>
            <select
              className="float-right"
              defaultValue=""
              onChange={(e) => loadData(e)}
              css={css`
                display: block;
                width: 40%;
                height: 42px;
                padding: 0px 10px;
                margin-bottom: 0px;
                box-sizing: border-box;
                font-family: "Open Sans", sans-serif;
                border: 1px solid ${COLORS.GRAY_DARK};
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                -ms-border-radius: 4px;
                border-radius: 4px;
                font-size: 14px;
                &:focus {
                  outline: none;
                }
              `}
            >
              <option value="" disabled>
                Select Your option
              </option>

              {isDataList &&
                isDataList.map((data) => (
                  <option value={data.value} key={data.value}>
                    {data.value}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {ispulseLoader && isheading !== "" ? (
          <PulseLoader size="10" color="#3aafa9" />
        ) : (
          <>
            {isPublicationData && isPublicationData.length > 0 ? (
              <>
                <div
                  css={css`
                    margin-top: 5px;
                  `}
                  className="float-right"
                >
                  <CommFileDownload
                    buttonName={isheading}
                    urlPath={isUrlPathDownload}
                    fileName={isFileName}
                    type={"text/excel"}
                  />
                </div>
                <div>
                  <TableWrap
                    thValues={thValues}
                    tdValues={tdValues}
                    data={isPublicationData}
                  />
                </div>
              </>
            ) : (
              <>
                {isheading !== "" && (
                  <div
                    css={css`
                      margin-top: 20px;
                    `}
                    className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                    role="alert"
                  >
                    <p className="font-bold"> No Data is Avaliable</p>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </Layout>
    </React.Fragment>
  );
};

export default FacultyDataDownload;
