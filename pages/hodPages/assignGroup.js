import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import css from "@emotion/css";
import Cookies from "js-cookie";
import { COLORS } from "../../constants";
import {
  getSemesters,
  getSemesterStudents,
  getSections,
  insertAllocateToGroup
} from "../../services/hodServices/assignGroupService";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";


const AssignGroup = () => {

  const [semesterList, setSemesterList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [sectionsList, setSectionsList] = useState([]);
  const [filterIDs, setFilterIds] = useState([]);
  const [semesterId, setSemesterId] = useState();
  const [isStudentData, setIsStudentData] = useState([]);

  const getSemesterInfo = async (employeeId) => {
    const data = await getSemesters(employeeId);
    setSemesterList(data?.semesterArray);
  };

  const getSectionsinfo = async (semesterId) => {
    const data = await getSections(semesterId);
    setSectionsList(data?.sectionsArray);
  };

  const getStudentSemesters = async (semesterId, sectionId) => {
    const data = await getSemesterStudents(semesterId, sectionId);
    setStudentList(data?.studentDetailsArray);
  };

  const insertAttendanceData = async (groupName) => {

    const data = await insertAllocateToGroup(
      filterIDs,
      groupName
    );

  };

  useEffect(() => {
    getSemesterInfo('64D1E79A8B6B11E98B0957863D7CDB1C');
  }, []);

  const retrieveSections = (e) => {   
    setSemesterId(e.target.value);
    getSectionsinfo(e.target.value);
  };

  const retrieveStudentsSems = (e) => {
    getStudentSemesters(semesterId, e.target.value);
  };

  const selectCheck = (selectedVal) => {
    const indexFound = filterIDs.indexOf(selectedVal);
    if (indexFound > -1) {
      filterIDs.splice(indexFound, 1);
      setFilterIds(filterIDs);
    }
  };

  const deSelectCheck = (selectedVal) => {
    filterIDs.push(selectedVal);
    setFilterIds(filterIDs);
  };

  const checkAssignGroup = (e, i, targetVal) => {
    const targetCheck = e.target.checked;
    if (!targetCheck) {
      selectCheck(targetVal);
    } else {
      deSelectCheck(targetVal);
    }

  };

  const checkAll = (e) => {
    const targetCheck = e.target.checked;
    setIsStudentData(
      isStudentData.map((el, i) => ({
        ...el,
        allocation: targetCheck,
      }))
    );
  };
  const markAllStudents = (e) => {
    const targetCheck = e.target.checked;
    setIsStudentData(
      isStudentData.map((el, i) => ({
        ...el,
        allocation: targetCheck,
      }))
    );
  }

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
            <b> Semester *</b>
            <select
              onChange={retrieveSections}
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
              {semesterList &&
                semesterList.map((semester) => (
                  <option value={semester?.semesterID}>
                    {semester?.semesterCode}
                  </option>
                ))}
            </select>
          </label>
        </div>
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
            <b> Sections *</b>
            <select
              onChange={retrieveStudentsSems}
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
              {sectionsList &&
                sectionsList.map((section) => (
                  <option value={section?.sectionID}>
                    {section?.sectionName}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <br></br>
        {!studentList || studentList?.length <= 0 ? (
          <div> {"No Data Available"}</div>
        ) : (
            <TABLE.TableWrapper>
              <TABLE.TableTR>
                <TABLE.TableTh>S NO</TABLE.TableTh>
                <TABLE.TableTh>Roll Number </TABLE.TableTh>
                <TABLE.TableTh>Student Name </TABLE.TableTh>
                <TABLE.TableTh>Group</TABLE.TableTh>
                <TABLE.TableTh>
                  {<lable htmlFor="attendIds">
                    <input
                      type="checkbox"
                      name="attendIds"
                      className="attendIds"
                      id="attendIds"
                   // onChange={(e) => markAllStudents(e)}
                    />
                  </lable>}

                Select All</TABLE.TableTh>
              </TABLE.TableTR>

              {studentList &&
                studentList.length &&
                studentList.map((student, index) => (
                  <TABLE.TableTRR key={student.id}>
                    <TABLE.TableTdd>{index + 1}</TABLE.TableTdd>
                    <TABLE.TableTdd>{student.rollNumber}</TABLE.TableTdd>
                    <TABLE.TableTdd>{student.firstName}</TABLE.TableTdd>
                    <TABLE.TableTdd>{student.studentGroup}</TABLE.TableTdd>
                    <TABLE.TableTdd>{student.studentSelect}</TABLE.TableTdd>
                    <TABLE.TableTdd>
                      <lable htmlFor={student.id}>
                        <input
                          type="checkbox"
                          className="atend"
                          name={student.id}
                          id={student.id}
                          defaultChecked={false}
                          onChange={(e) => checkAssignGroup(e, index, student.studentID)}
                        />
                      </lable>
                      {student.studentSelect}</TABLE.TableTdd>
                  </TABLE.TableTRR>
                ))}
            </TABLE.TableWrapper>

          )}
        <button
          onClick={() =>
            insertAttendanceData('Group-I')
          }
          type="button"
          className="bg-yellow-400 block  mx-auto px-2 py-1 rounded"
        >
          Allocate Group-I
            </button>
        <button
          onClick={() =>
            insertAttendanceData('Group-II')
          }
          type="button"
          className="bg-yellow-400 block  mx-auto px-2 py-1 rounded"
        >
          Allocate Group-II
            </button>
        <button
          onClick={() =>
            insertAttendanceData('Group-III')
          }
          type="button"
          className="bg-yellow-400 block  mx-auto px-2 py-1 rounded"
        >
          Allocate Group-III
            </button>
      </Layout>

    </React.Fragment>
  );
};

export default AssignGroup;
