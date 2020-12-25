import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import Cookies from "js-cookie";
import { getAssignedStudentsList } from "../../services/mentoringServices";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import StudentTabsWrap from "./assignStudentContent/studentTabs";
import MoreDetailsModal from "./assignStudentContent/moreDetailsModal";
import PulseLoader from "react-spinners/PulseLoader";

const Assignedstudents = () => {
  const [show, setShow] = useState(false);
  const ProfileId = Cookies.get("employeeID");
  const [studentList, setStudentList] = useState([]);
  const [isRowStudentId, setIsRowStudentId] = useState("");
  const [isMoreOptionsStdId, setIsMoreOptionsStdId] = useState("");
  const [studentModelData, setstudentModelData] = useState({});
  const [activeButton, setActiveButton] = useState(0);

  const toggleModal = (id) => {
    setShow(!show);
    setIsMoreOptionsStdId("");
    setActiveButton(id);
  };

  const getMoreOptions = async (studentObj) => {
    //  console.log(studentObj);
    setstudentModelData(studentObj);
    isMoreOptionsStdId == studentObj.enrollstudentId
      ? setIsMoreOptionsStdId("")
      : setIsMoreOptionsStdId(studentObj.enrollstudentId);
  };

  const getExpandedRowData = async (id) => {
    isRowStudentId == id ? setIsRowStudentId("") : setIsRowStudentId(id);
  };

  const getAllAssignedStudents = async () => {
    const data = await getAssignedStudentsList(ProfileId);
    console.log("data", data);
    setStudentList(data?.assignstudentsDetails?.assignStudentsArray);

    return data;
  };
  useEffect(() => {
    getAllAssignedStudents();
  }, []);
  return (
    <React.Fragment>
      <Layout>
        {!studentList ? (
          <div>No Data Available</div>
        ) : (
          <TABLE.TableWrapper>
            <TABLE.TableTR>
              <TABLE.TableTh>S.No.</TABLE.TableTh>
              <TABLE.TableTh>Roll Number</TABLE.TableTh>
              <TABLE.TableTh>Name</TABLE.TableTh>
              <TABLE.TableTh>Semester</TABLE.TableTh>
              <TABLE.TableTh>Section</TABLE.TableTh>
              <TABLE.TableTh>Status</TABLE.TableTh>
              <TABLE.TableTh>Others</TABLE.TableTh>
            </TABLE.TableTR>

            {studentList &&
              studentList.length &&
              studentList.map((studentArray, index) => (
                <TABLE.TableTbody key={studentArray.data.enrollstudentId}>
                  <TABLE.TableTRR>
                    <TABLE.TableTdd>{index + 1}</TABLE.TableTdd>
                    <TABLE.TableTdd>{studentArray.data.roll}</TABLE.TableTdd>
                    <TABLE.TableTdd>
                      {studentArray.data.firstName}
                    </TABLE.TableTdd>
                    <TABLE.TableTdd>
                      {studentArray.data.semesterDetails.semesterCode}
                    </TABLE.TableTdd>
                    <TABLE.TableTdd>
                      {studentArray.data?.semesterSections?.sectionName}
                    </TABLE.TableTdd>
                    <TABLE.TableTdd>
                      {studentArray.data.issuestatus}
                    </TABLE.TableTdd>
                    <TABLE.TableTdd>
                      <button
                        onClick={() =>
                          getExpandedRowData(studentArray.data.enrollstudentId)
                        }
                        className="py-2 px-4 rounded  bg-blue-400 mr-2 text-center text-white mb-4 hover:bg-blue-500 focus:outline-none"
                      >
                        Profile&nbsp;
                        <FontAwesomeIcon icon={faUser} />
                      </button>
                      <span className="relative">
                        <button
                          onClick={() => getMoreOptions(studentArray.data)}
                          className="py-2 px-4 rounded  bg-blue-400 mr-2 text-center text-white mb-4 hover:bg-blue-500 focus:outline-none"
                        >
                          More Details&nbsp;
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            css={
                              isMoreOptionsStdId ==
                              studentArray.data.enrollstudentId
                                ? css`
                                    transform: rotate(180deg);
                                    transition: 0.3s ease-in-out;
                                  `
                                : css`
                                    transform: rotate(0deg);
                                    transition: 0.3s ease-in-out;
                                  `
                            }
                          />
                        </button>
                        {isMoreOptionsStdId ==
                          studentArray.data.enrollstudentId && (
                          <div
                            className="shadow-2xl p-0 m-0 absolute bg-white w-full"
                            css={css`
                              left: 0px;
                              top: 40px;
                              z-index: 1;
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
                              onClick={() => toggleModal(0)}
                            >
                              Course and Faculty Details
                            </button>
                            {studentArray.data.issuestatus == "Y" && (
                              <button
                                type="button"
                                className="focus:outline-none"
                                onClick={() => toggleModal(1)}
                              >
                                Discrepancy/Issue
                              </button>
                            )}
                            <button
                              type="button"
                              className="focus:outline-none"
                              onClick={() => toggleModal(2)}
                            >
                              Student Details
                            </button>
                            <button
                              type="button"
                              className="focus:outline-none"
                              onClick={() => toggleModal(3)}
                            >
                              Communication Details
                            </button>
                          </div>
                        )}
                      </span>
                    </TABLE.TableTdd>
                  </TABLE.TableTRR>
                  {isRowStudentId == studentArray.data.enrollstudentId && (
                    <TABLE.TableTRR>
                      <td
                        colSpan={7}
                        css={css`
                          padding-left: 15px !important;
                        `}
                      >
                        <StudentTabsWrap studentProfileId={isRowStudentId} />
                      </td>
                    </TABLE.TableTRR>
                  )}
                </TABLE.TableTbody>
              ))}
          </TABLE.TableWrapper>
        )}

        {show && (
          <MoreDetailsModal
            toggleModal={toggleModal}
            activeButton={activeButton}
            studentModelData={studentModelData}
          />
        )}
      </Layout>
    </React.Fragment>
  );
};

export default Assignedstudents;
