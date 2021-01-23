import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import css from "@emotion/css";
import Cookies from "js-cookie";
import { COLORS } from "../../constants";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import { getSemesters ,getElectiveTypes,getElectives,getStudents} from "../../services/hodServices/assignElectiveService";


const AssignElectives = () => {
 
  const [semesterList, setSemesterList] = useState([]);
  const [electiveTypesList, setElectiveTypesList] = useState([]);
  const [electivesList, setElectivesList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [semesterId, setSemesterId] = useState();

  const getSemesterInfo = async (departmentId) => {
    const data = await getSemesters(departmentId);
    setSemesterList(data?.semesterDetails);
    console.log("Semester list: "+semesterList);
  };

  const getElectiveTypesInfo = async (semesterId,departmentId) => {
    const data = await getElectiveTypes(semesterId,departmentId);
    setElectiveTypesList(data?.electiveTypeDetails);
  }

  const getElectivesInfo = async (semesterId,departmentId) => {
    const data = await getElectives(semesterId,departmentId);
    setElectivesList(data?.electiveCourseDetails);
    console.log("Electives: "+electivesList)
  }

  const getStudentsInfo = async (semesterId,departmentId) => {
    const data = await getStudents(semesterId,departmentId);
    setStudentList(data?.studentDetails); 
    setFilteredData(studentList);
  }

  useEffect(() => {
    getSemesterInfo('20196101013404918557388');    
  }, []);

  const retrieveElectiveTypes = (e) => {   
    setSemesterId(e.target.value);
    getElectiveTypesInfo('20196101013404918557388','201961010142249513362891');
  };

  const retrieveElectives = (e) => {   
    setSemesterId(e.target.value);
    getElectivesInfo('20196101013404918557388','Theory-PEI');
  };

  const retrieveStudents = (e) => {
    setSemesterId(e.target.value);
    getStudentsInfo('201961010142249513362891','20196101013404918557388');
  }

  const excludeColumns = ["0"];
  const searchFilterFunction = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
     if (lowercasedValue === "") setFilteredData(studentList);
     else {
      const filteredData = studentList.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setFilteredData(filteredData);
    }
  };

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
            onChange={retrieveElectiveTypes}
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
          <b> Elective Types</b>
          <select
            onChange={retrieveElectives}
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
            {electiveTypesList &&
              electiveTypesList.map((electiveType) => (
                <option value={electiveType}>
                  {electiveType}
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
          <b> Electives</b>
          <select
            onChange={retrieveStudents}
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
            {electivesList &&
              electivesList.map((elective) => (
                <option value={elective?.courseCode}>
                  {elective?.courseCode}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div className="float-left">
          <label htmlFor="search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none "
              onChange={(e) => searchFilterFunction(e.target.value)}
            />
          </label>
        </div>
      <br></br>
      {!studentList || studentList?.length <= 0 ? (
          <div> {"No Data Available"}</div>
        ) : (
            <TABLE.TableWrapper>
              <TABLE.TableTR>
                <TABLE.TableTh>R NO</TABLE.TableTh>
                <TABLE.TableTh>Nme</TABLE.TableTh>
                <TABLE.TableTh>Semester</TABLE.TableTh>
                <TABLE.TableTh>Electives</TABLE.TableTh>
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

              {filteredData &&
                filteredData.length &&
                filteredData.map((student, index) => (
                  <TABLE.TableTRR key={student.roll}>
                    <TABLE.TableTdd>{student.roll}</TABLE.TableTdd>
                    <TABLE.TableTdd>{student.firstName}</TABLE.TableTdd>
                    <TABLE.TableTdd>{student.semesterCode}</TABLE.TableTdd>
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
          insertAttendanceData('Allocate Electives')
        }
        type="button"
        className="bg-yellow-400 block  mx-auto px-2 py-1 rounded"
      >
        Allocate Group-I
          </button>
    
    </Layout>

  </React.Fragment>
  );
};

export default AssignElectives;
