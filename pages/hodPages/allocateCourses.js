import React, { useState,useEffect } from "react";
import Layout from "../../components/layout";
import {
  getAcadProgrmFacultyData,
  getSemsterData,
  getSectionsData,
  getCoursesData,
  getSubjExpData,
  getFacultyCoursesData,
} from "../../services/hodServices/allocateCoursesService";
import Cookies from "js-cookie";

import css from "@emotion/css";
import { COLORS } from "../../constants";
import TableWrap from "../../components/TableUtilities/TableWrap";
import FormInput from "../../components/General/formInput";

const AllocateCourses = () => {
  const ProfileId = Cookies.get("employeeID");
  const [isDepartmentData, setIsDepartmentData] = useState([]);
  const [isAcademicYearData, setIsAcademicYearData] = useState([]);
  const [isFacultyData, setIsFacultyData] = useState([]);
  const [isSecondaryFacultyData, setIsSecondaryFacultyData] = useState([]);
  const [isTertiaryFacultyData, setIsTertiaryFacultyData] = useState([]);
  const [isQuaternaryFacultyData, setIsQuaternaryFacultyData] = useState([]);
  const [isSemesterData, setIsSemesterData] = useState([]);
  const [isSectionsData, setIsSectionsData] = useState([]);
  const [isCoursesData, setIsCoursesData] = useState([]);
  const [isFacultyCoursesData, setIsFacultyCoursesData] = useState([]);

  const loadAcadProgrmFacultyData = async () => {
    const cData = await getAcadProgrmFacultyData('64D1E79A8B6B11E98B0957863D7CDB1C');
    setIsDepartmentData(cData?.departmentDetailsArray);
    setIsAcademicYearData(cData?.academicDetailsArray);
    setIsFacultyData(cData?.facultyDetailsArray);
    console.log(cData);
  };

  const loadSemesterData = async (department) => {
    const cData = await getSemsterData('201961010429723213238372',department);
    setIsSemesterData(cData?.semesterDetailsArray);
    setIsSectionsData([]);
    console.log(cData);
  };

  const loadSectionsData = async (semester) => {
    const cData = await getSectionsData(semester);
    setIsSectionsData(cData?.semesterSectionDetailsArray);
    console.log(cData);
  };

  const loadCoursesData = async (section) => {
    const cData = await getCoursesData('20196101014224570834265',section,'64D1E79A8B6B11E98B0957863D7CDB1C');
    setIsCoursesData(cData?.courseArray);
    console.log(cData);
  };

  const loadSecondaryFacultyData = async(empid) => {
  loadFacultyCoursesData(empid);  
  setIsSecondaryFacultyData(isFacultyData);  
  //setIsSecondaryFacultyData(isSecondaryFacultyData.filter((faculty) => faculty.employeeID!=empid));
  };

  const loadTertiaryFacultyData =  async(empid) => {
    setIsTertiaryFacultyData(isSecondaryFacultyData);
  }

  const loadQuaternaryFacultyData =  async(empid) => {
    setIsQuaternaryFacultyData(isTertiaryFacultyData);
  }

  const loadFacultyCoursesData =  async(empid) => {
    const cData = await getFacultyCoursesData(empid);
    setIsFacultyCoursesData(cData?.courseDetailsArray);
  }


    const thValues = [
    "Course Code",
    "Course Name",
    "Course Type",
    "Academic Year",
    "Program",
    "Semester",
    "Section",
    "Faculty Level"
  ];
  const tdValues = [
    { valueProperty: "courseCode" },
    { valueProperty: "courseName" },
    { valueProperty: "courseType" },
    { valueProperty: "academicYear" },
    { valueProperty: "departmentCode" },
    { valueProperty: "semesterCode" },
    { valueProperty: "section" },
    { valueProperty: "employeeLevel" },
  ];

  useEffect(() => {
    loadAcadProgrmFacultyData();
  }, []);

  return (
    <React.Fragment>
      <Layout>
        <div className="grid grid-cols-4">
          <div className=" w-screen">
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
                    <option value={acadYear.academicID}>
                      {acadYear.academicYear}
                    </option>
                  ))}
              </select>
            </label>
          </div>

          <div className=" w-screen">
            <label
              htmlFor="Program"
              css={css`
                font-size: 14px;
                display: block;
                color: ${COLORS.BLACK};
                .errorBorder {
                  border-color: ${COLORS.RED};
                }
              `}
            >
              <b> Program </b>
              <select
                name="Program"
                onChange={(e) => loadSemesterData(e.target.value)}
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
                {isDepartmentData &&
                  isDepartmentData.map((department) => (
                    <option value={department.departmentID}>
                      {department.departmentCode}-{department.departmentName}
                      </option>
                  ))}
              </select>
            </label>
          </div>

          <div className=" w-screen">
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
                onChange={(e) => loadSectionsData(e.target.value)}
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
                    <option value={semester.semesterID}>{semester.semesterCode}</option>
                  ))}
              </select>
            </label>
          </div>

          <div className=" w-screen">
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
                onChange={(e) => loadCoursesData(e.target.value)}
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
                    <option value={section.sectionID}>{section.sectionName}</option>
                  ))}
              </select>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-4">
          <div className=" w-screen">
            <label
              htmlFor="Faculty"
              css={css`
                font-size: 14px;
                display: block;
                color: ${COLORS.BLACK};
                .errorBorder {
                  border-color: ${COLORS.RED};
                }
              `}
            >
              <b> Faculty </b>
              <select
                name="Faculty"
                onChange={(e) => loadSecondaryFacultyData(e.target.value)}
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
                {isFacultyData &&
                  isFacultyData.map((faculty) => (
                    <option value={faculty.employeeID}>
                      {faculty.employeeName}
                    </option>
                  ))}
              </select>
            </label>
          </div>

          <div className=" w-screen">
          <div className="w-2/12 float-left pr-2">
               <FormInput
                    label="Designation"
                    type="text"
                    name="DesignationName"
                    /*value={values.bookPublisherName}*/
                    placeholder="Designation"
                    disabled
                />
          </div>
          </div>
          <div className=" w-screen">          
          <div className="w-2/12 float-left pr-2">       
              <FormInput
                    label="Subject Experience"
                    type="text"
                    name="subjectExperienceName"
                    /*value={values.bookPublisherName}*/
                    placeholder="SubjectExperience"
                    disabled
                  />
            </div>
          </div>

          <div className=" w-screen">
            <label
              htmlFor="Course"
              css={css`
                font-size: 14px;
                display: block;
                color: ${COLORS.BLACK};
                .errorBorder {
                  border-color: ${COLORS.RED};
                }
              `}
            >
              <b> Course </b>
              <select
                name="course"
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
                {isCoursesData &&
                  isCoursesData.map((course) => (
                    <option value={course.courseCode}>{course.courseName}</option>
                  ))}
              </select>
            </label>
          </div>
        </div>              
        <div className="grid grid-cols-4">
          <div className=" w-screen">
            <label
              htmlFor="SecondaryFaculty"
              css={css`
                font-size: 14px;
                display: block;
                color: ${COLORS.BLACK};
                .errorBorder {
                  border-color: ${COLORS.RED};
                }
              `}
            >
              <b> Secondary Faculty </b>
              <select
                name="SecondaryFaculty"
                onChange={(e) => loadTertiaryFacultyData(e.target.value)}
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
                {isSecondaryFacultyData &&
                  isSecondaryFacultyData.map((faculty) => (
                    <option value={faculty.employeeID}>
                      {faculty.employeeName}
                    </option>
                  ))}
              </select>
            </label>
          </div>
          <div className=" w-screen">
            <label
              htmlFor="TertiaryFaculty"
              css={css`
                font-size: 14px;
                display: block;
                color: ${COLORS.BLACK};
                .errorBorder {
                  border-color: ${COLORS.RED};
                }
              `}
            >
              <b> Tertiary Faculty </b>
              <select
                name="TertiaryFaculty"
                onChange={(e) => loadQuaternaryFacultyData(e.target.value)}
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
                {isTertiaryFacultyData &&
                  isTertiaryFacultyData.map((faculty) => (
                    <option value={faculty.employeeID}>
                      {faculty.employeeName}
                    </option>
                  ))}
              </select>
            </label>
          </div>

           <div className=" w-screen">
            <label
              htmlFor="QuaternaryFaculty"
              css={css`
                font-size: 14px;
                display: block;
                color: ${COLORS.BLACK};
                .errorBorder {
                  border-color: ${COLORS.RED};
                }
              `}
            >
              <b> Quaternary Faculty </b>
              <select
                name="QuaternaryFaculty"
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
                {isQuaternaryFacultyData &&
                  isQuaternaryFacultyData.map((faculty) => (
                    <option value={faculty.employeeID}>
                      {faculty.employeeName}
                    </option>
                  ))}
              </select>
            </label>
          </div>          

        </div>             

        {isFacultyCoursesData && isFacultyCoursesData.length > 0 && (
          <div>
            <TableWrap
              thValues={thValues}
              tdValues={tdValues}
              data={isFacultyCoursesData}
            />
          </div>
        )}

        {}
      </Layout>
    </React.Fragment>
  );
};


export default AllocateCourses;
