import React, { useState, useEffect } from "react";
import { getStudentDiscrepancyDetail } from "../../../services/mentoringServices";
import * as TABLE from "../../../components/dashboards/styles/table.styles";
import moment from "moment";
import css from "@emotion/css";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DiscrepancyData = ({ studentModelData }) => {
  const [isDiscrepancyData, setIsDiscrepancyData] = useState([]);
  const [isAlert, setIsAlert] = useState(false);

  const openAlertModal = () => {
    setIsAlert(!isAlert);
  };
  const loadCourseFacultyData = async () => {
    const courseFacultyInfo = await getStudentDiscrepancyDetail(
      studentModelData.enrollstudentId
    );
    setIsDiscrepancyData(courseFacultyInfo.discrepancyissueDetails);
    console.log(courseFacultyInfo);
  };

  const closeIssue = async id => {
    const bookData = await deleteBookDetails(id);
    loadBookPubInfo();
    openSnackbar("Successfully deleted Book Publications record");
    setIsAlert(!isAlert);
  };

  useEffect(() => {
    loadCourseFacultyData();
  }, []);
  return (
    <React.Fragment>
      <TABLE.TableWrapper>
        <TABLE.TableTR>
          <TABLE.TableTh>Student Name</TABLE.TableTh>
          <TABLE.TableTh>Faculty Name</TABLE.TableTh>
          <TABLE.TableTh>Course</TABLE.TableTh>
          <TABLE.TableTh>Date</TABLE.TableTh>
          <TABLE.TableTh colSpan={7}>
            Details of Discrepency /Issue
          </TABLE.TableTh>
        </TABLE.TableTR>

        {isDiscrepancyData &&
          isDiscrepancyData.length &&
          isDiscrepancyData.map(discrepancyArray => (
            <TABLE.TableTRR>
              <TABLE.TableTdd>
                {discrepancyArray[0].enrollStudentDetails.firstName} -{" "}
                {discrepancyArray[0].enrollStudentDetails.roll}
              </TABLE.TableTdd>
              <TABLE.TableTdd>
                {discrepancyArray[0].hrEmployee.firstName} -{" "}
                {discrepancyArray[0].hrEmployee.username}
              </TABLE.TableTdd>
              <TABLE.TableTdd>
                {discrepancyArray[0].course.courseCode}
              </TABLE.TableTdd>
              <TABLE.TableTdd>
                {moment(discrepancyArray[0].issueDate).format("DD/MM/YYYY")}
              </TABLE.TableTdd>
              <TABLE.TableTdd>{discrepancyArray[0].mentorissue}</TABLE.TableTdd>
              <TABLE.TableTdd>
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  onClick={openAlertModal}
                />
              </TABLE.TableTdd>
            </TABLE.TableTRR>
          ))}
      </TABLE.TableWrapper>
      {isAlert && (
        <section
          className="w-full h-full fixed top-o bottom-0 left-0 right-0"
          css={css`
            background-color: rgba(0, 0, 0, 0.2);
          `}
        >
          <div
            className="absolute bg-white w-64 rounded shadow-2xl p-4"
            css={css`
              transform: translate(-50%, -50%);
              top: 50%;
              left: 50%;
            `}
          >
            <h3 className="font-bold">Confirmation</h3>
            <p>Do you realy want to close the Issue?</p>
            <div>
              <button
                type="button"
                onClick={closeIssue}
                className="bg-red-600 mr-1 mt-2 rounded py-1 px-2 text-sm text-white text-center font-sans"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={openAlertModal}
                className="bg-blue-600 py-1 mt-2 px-2 rounded text-sm text-white text-center font-sans"
              >
                No
              </button>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default DiscrepancyData;
