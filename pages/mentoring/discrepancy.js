import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import Cookies from "js-cookie";
import { COLORS } from "../../constants";
import {
  getSemSection,
  getSemSectionStudents
} from "../../services/mentoringServices";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import DiscrepancyModal from "./discrepancyContent/discrepancyModel";

const DiscrepancyIssue = () => {
  const [semSecList, setSemSecList] = useState([]);
  const ProfileId = Cookies.get("employeeID");
  const [studentList, setStudentList] = useState();
  const [isEnrollStudentId, setIsEnrollStudentId] = useState();
  const [show, setShow] = useState(false);
  const [isSemSectionId, setIsSemSectionId] = useState();

  const getSemAndSection = async () => {
    const data = await getSemSection(ProfileId);
    setSemSecList(data?.DiscrepancyData.ClassRoster);
  };

  const getStudents = async () => {
    const std = await getSemSectionStudents(isSemSectionId);
    setStudentList(std?.studentobj.EnrollStudentDetails);
  };

  const handleChange = e => {
    setIsSemSectionId(e.target.value);
    getStudents();
  };
  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
    setIsEnrollStudentId();
  };
  const openDiscrepancyModel = id => {
    setIsEnrollStudentId(id);
    openModal();
  };

  useEffect(() => {
    getSemAndSection();
  }, []);
  return (
    <React.Fragment>
      <Layout>
        <div>
          <label
            htmlFor="Semester"
            css={css`
              font-size: 14px;
              display: block;
              color: ${COLORS.BLACK};
              .errorBorder {
                border-color: ${COLORS.RED};
              }
            `}
          >
            <b> Semester</b>
            <select
              onChange={handleChange}
              name="Semester"
              css={css`
                display: block;
                width: 20%;
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
              <option value="" selected disabled>
                Select Your option
              </option>
              {semSecList &&
                semSecList.map(section => (
                  <option value={section[1].sectionPrimaryId}>
                    {section[0].semesterCode}-{section[1].sectionName}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <br></br>
        {/* /Table Starts Here/ */}
        <TABLE.TableWrapper>
          <TABLE.TableTR>
            <TABLE.TableTh>Roll No</TABLE.TableTh>
            <TABLE.TableTh>Name </TABLE.TableTh>
            <TABLE.TableTh>Mentor </TABLE.TableTh>
            <TABLE.TableTh>Contact No.</TABLE.TableTh>
            <TABLE.TableTh>Email</TABLE.TableTh>
            <TABLE.TableTh>Issue</TABLE.TableTh>
            <TABLE.TableTh>Discrepancy</TABLE.TableTh>
          </TABLE.TableTR>

          {studentList &&
            studentList.length &&
            studentList.map(student => (
              <TABLE.TableTRR key={student[0].enrollstudentId}>
                <TABLE.TableTdd>{student[0].roll}</TABLE.TableTdd>
                <TABLE.TableTdd>{student[0].firstName}</TABLE.TableTdd>
                <TABLE.TableTdd>{student[0].mentor}</TABLE.TableTdd>
                <TABLE.TableTdd>{student[0].mobileNo}</TABLE.TableTdd>
                <TABLE.TableTdd>{student[0].email}</TABLE.TableTdd>
                <TABLE.TableTdd>
                  {student[0].issuestatus ? student[0].issuestatus : "N"}
                </TABLE.TableTdd>

                <TABLE.TableTdd>
                  <button
                    onClick={() =>
                      openDiscrepancyModel(student[0].enrollstudentId)
                    }
                    className="py-2 px-4 rounded  bg-blue-400 mr-2 text-center text-white mb-4 hover:bg-blue-500 focus:outline-none"
                  >
                    Discrepancy &nbsp;
                    <FontAwesomeIcon icon={faStreetView} />
                  </button>
                </TABLE.TableTdd>
              </TABLE.TableTRR>
            ))}
        </TABLE.TableWrapper>
        {show && (
          <DiscrepancyModal
            closeModal={closeModal}
            studentEnrollId={isEnrollStudentId}
            getStudents={getStudents}
          />
        )}
      </Layout>
    </React.Fragment>
  );
};

export default DiscrepancyIssue;
