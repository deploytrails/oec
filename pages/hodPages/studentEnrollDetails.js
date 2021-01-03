import React, { useState ,useEffect} from "react";
import Layout from "../../components/layout";
import {
  getDegreeData,
  getAcademicDetailsData,
  getSemsterData,
  getSectionsData,
  getStudentsData} from "../../services/hodServices/studentEnrollService";

import * as TABLE from "../../components/dashboards/styles/table.styles";  
import css from "@emotion/css";
import { COLORS } from "../../constants";


const StudentEnrollDetails = () => {
  const [isDegreeData, setIsDegreeData] = useState([]); 
  const [isAcademicYearData, setIsAcademicYearData] = useState([]); 
  const [isSemesterData, setIsSemesterData] = useState([]); 
  const [isSectionsData, setIsSectionsData] = useState([]); 
  const [isStudentsData, setIsStudentsData] = useState([]); 

  const loadDegreeData = async () => {
    const cData = await getDegreeData();
    setIsDegreeData(cData?.degreeArray);
    console.log(cData);
    };

  const loadAcademicDetailsData = async (degreeId) => {
    console.log(degreeId);
    const cData = await getAcademicDetailsData('20196101013404918557388',degreeId);
    setIsAcademicYearData(cData?.academicYearArray);
    console.log(cData);
  }
  
  const loadSemesterData =  async (acadYear) => {
    const cData = await getSemsterData(acadYear);
    setIsSemesterData(cData?.semesterArray);
    console.log(cData);
  }

  const loadSectionsData =  async (semester) => {
    const cData = await getSectionsData(semester);
    setIsSectionsData(cData?.sectionArray);
    console.log(cData);
  }
  const loadStudentsData = async (section) => {
    const cData = await getStudentsData(section);
    setIsStudentsData(cData?.studentArray);
    console.log(cData);
  }


    useEffect(() => {
      loadDegreeData();
     }, []);  

  return (
    <React.Fragment>
      <Layout>
      <div css={css`
      display:inline-block;`}>
      <div>
          <label
            htmlFor="Degree"
            css={css`
              font-size: 14px;
              display: block;
              color: ${COLORS.BLACK};
              .errorBorder {
                border-color: ${COLORS.RED};
              }
            `}
          >
            <b> Degree</b>
            <select
              // onChange={handleChange}
              name="Degree"
              onChange={(e) =>
                loadAcademicDetailsData(e.target.value)
              }
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
              {isDegreeData &&
                isDegreeData.map((degree) => (
                  <option value={degree[0]}>
                    {degree[1]}
                  </option>
                ))}
            </select>
          </label>
        </div>

        <div>
          <label
            htmlFor="AcadYear"
            css={css`
              font-size: 14px;
              display: block;
              color: ${COLORS.BLACK};
              .errorBorder {
                border-color: ${COLORS.RED};
              }
            `}
          >
            <b> Academic Year</b>
            <select
              // onChange={handleChange}
              name="AcadYear"
              onChange={(e) =>
                loadSemesterData(e.target.value)
              }
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
              {isAcademicYearData &&
                isAcademicYearData.map((acadYear) => (
                  <option value={acadYear.academicDetails.academicID}>
                    {acadYear.academicDetails.academicYear}
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
            <b> Semester </b>
            <select
              onChange={(e) =>
                loadSectionsData(e.target.value)
              }
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
              {isSemesterData &&
                isSemesterData.map((semester) => (
                  <option value={semester[0]}>
                    {semester[1]}
                  </option>
                ))}
              </select>
          </label>
        </div>    

         <div>
          <label
            htmlFor="Sections"
            css={css`
              font-size: 14px;
              display: block;
              color: ${COLORS.BLACK};
              .errorBorder {
                border-color: ${COLORS.RED};
              }
            `}
          >
            <b> Sections </b>
            <select
               onChange={(e) =>
                loadStudentsData(e.target.value)
              }
              name="Sections"
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
              {isSectionsData &&
                isSectionsData.map((section) => (
                  <option value={section[0]}>
                    {section[1]}
                  </option>
                ))}
              </select>
          </label>
        </div>       
        </div>

        <div>
            <TABLE.TableWrapper>
              <TABLE.TableTR>
                <TABLE.TableTh>Roll Number</TABLE.TableTh>
                <TABLE.TableTh>Student Name</TABLE.TableTh>
                <TABLE.TableTh>Mobile Number</TABLE.TableTh>
                <TABLE.TableTh>Email Id</TABLE.TableTh>
                <TABLE.TableTh>Semester</TABLE.TableTh>
              </TABLE.TableTR>
              <TABLE.TableTbody>
                {isStudentsData &&
                  isStudentsData.length &&
                  isStudentsData.map((student) => (
                    <TABLE.TableTRR key={student[0]}>
                      <TABLE.TableTdd>
                        {student[0]}
                      </TABLE.TableTdd>
                      <TABLE.TableTdd>
                        {student[1]}
                      </TABLE.TableTdd>
                      <TABLE.TableTdd>
                        {student[2]}
                      </TABLE.TableTdd>
                      <TABLE.TableTdd>
                        {student[3]}
                      </TABLE.TableTdd>
                      <TABLE.TableTdd>
                        {student[4]}
                      </TABLE.TableTdd>
                    </TABLE.TableTRR>
                  ))}
              </TABLE.TableTbody>
            </TABLE.TableWrapper>
          </div>          

        </Layout>
     
    </React.Fragment>
  );
};

export default StudentEnrollDetails;
