import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import {
  getDegreeData,
  getAcademicDetailsData,
  getSemsterData,
  getSectionsData,
  getStudentsData,
} from "../../services/hodServices/studentEnrollService";
import Cookies from "js-cookie";
import css from "@emotion/css";
import TableWrap from "../../components/TableUtilities/TableWrap";
import { Formik, Form } from "formik";
import FormikControl from "../../components/General/FormikControl";
import { COLORS } from "../../constants";
const StudentEnrollDetails = () => {
  const [isDegreeData, setIsDegreeData] = useState([]);
  const [isAcademicYearData, setIsAcademicYearData] = useState([]);
  const [isSemesterData, setIsSemesterData] = useState([]);
  const [isSectionsData, setIsSectionsData] = useState([]);
  const [isStudentsData, setIsStudentsData] = useState([]);

  const loadDegreeData = async () => {
    const cData = await getDegreeData();
    let degreeOptions = [];
    cData?.degreeArray.forEach((element) => {
      degreeOptions.push({
        value: element[0],
        key: element[1],
      });
    });
    setIsDegreeData(degreeOptions);
    console.log("degreeOptions" + degreeOptions);
  };

  const loadAcademicDetailsData = async (degreeId) => {
    console.log(degreeId);
    const cData = await getAcademicDetailsData(
      Cookies.get("departId"),
      degreeId
    );
    //let acadOptions = JSON.parse(JSON.stringify(options));
    let acadOptions = [];
    cData?.academicYearArray.forEach((element) => {
      acadOptions.push({
        value: element[1],
        key: element[0],
      });
    });
    setIsAcademicYearData(acadOptions);
    setIsSemesterData([]);
    setIsSectionsData([]);
    setIsStudentsData([]);

    console.log(acadOptions);
  };

  const loadSemesterData = async (degreeID, acadYear) => {
    console.log("Degree " + degreeID);
    const cData = await getSemsterData(degreeID, acadYear);
    let semOptions = [];
    cData?.semesterArray.forEach((element) => {
      semOptions.push({
        value: element[0],
        key: element[1],
      });
    });
    setIsSemesterData(semOptions);
    setIsSectionsData([]);
    setIsStudentsData([]);

    console.log(semOptions);
  };

  const loadSectionsData = async (semester) => {
    const cData = await getSectionsData(semester);
    let sectionsOptions = [];
    cData?.sectionArray.forEach((element) => {
      sectionsOptions.push({
        value: element[0],
        key: element[1],
      });
    });
    setIsSectionsData(sectionsOptions);
    setIsStudentsData([]);
    console.log(sectionsOptions);
  };
  const loadStudentsData = async (section) => {
    const cData = await getStudentsData(section);
    setIsStudentsData(cData?.studentArray);
    console.log(cData);
  };
  const thValues = [
    "Roll Number",
    "Student Name",
    "Mobile Number",
    "Email Id",
    "Semester",
  ];
  const tdValues = [
    { valueProperty: "0" },
    { valueProperty: "1" },
    { valueProperty: "2" },
    { valueProperty: "3" },
    { valueProperty: "4" },
  ];

  const initialValues = {
    Degree: "",
    AcadYear: "",
    Semester: "",
    Sections: "",
  };

  const onSubmit = (values) => {
    console.log("values " + values);
  };

  useEffect(() => {
    loadDegreeData();
  }, []);

  return (
    <React.Fragment>
      <Layout>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, handleChange }) => (
            <Form>
              <div className="grid grid-cols-4">
                <div className="  w-auto">
                  <FormikControl
                    css={css`
                      display: block;
                      width: 75%;
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
                    control="select"
                    label="Degree"
                    name="Degree"
                    options={isDegreeData}
                    onChange={(e) => {
                      handleChange(e);
                      loadAcademicDetailsData(e.target.value);
                    }}
                  />
                </div>

                <div className="  w-auto">
                  <FormikControl
                    css={css`
                      display: block;
                      width: 75%;
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
                    control="select"
                    label="Academic Year"
                    name="AcadYear"
                    options={isAcademicYearData}
                    onChange={(e) => {
                      handleChange(e);
                      loadSemesterData(values.Degree, e.target.value);
                    }}
                  />
                </div>

                <div className="  w-auto">
                  <FormikControl
                    css={css`
                      display: block;
                      width: 75%;
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
                    control="select"
                    label="Semester"
                    name="Semester"
                    options={isSemesterData}
                    onChange={(e) => {
                      handleChange(e);
                      loadSectionsData(e.target.value);
                    }}
                  />
                </div>

                <div className="  w-auto">
                  <FormikControl
                    css={css`
                      display: block;
                      width: 75%;
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
                    control="select"
                    label="Sections"
                    name="Sections"
                    options={isSectionsData}
                    onChange={(e) => {
                      handleChange(e);
                      loadStudentsData(e.target.value);
                    }}
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
        {isStudentsData && isStudentsData.length > 0 && (
          <div>
            <TableWrap
              thValues={thValues}
              tdValues={tdValues}
              data={isStudentsData}
            />
          </div>
        )}
      </Layout>
    </React.Fragment>
  );
};

export default StudentEnrollDetails;
