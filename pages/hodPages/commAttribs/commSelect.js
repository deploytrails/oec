import React, { useState, useEffect } from "react";
import {
  getDegreeData,
  getAcademicDetailsData,
  getSemsterData,
  getSectionsData,
} from "../../../services/hodServices/studentEnrollService";
import css from "@emotion/css";
import { COLORS } from "../../../constants";
import Cookies from "js-cookie";

const CommSelect = ({ onSectionChange }) => {
  const [isDegreeData, setIsDegreeData] = useState([]);
  const [isAcademicYearData, setIsAcademicYearData] = useState([]);
  const [isSemesterData, setIsSemesterData] = useState([]);
  const [isSectionsData, setIsSectionsData] = useState([]);

  const [isDegreeDataSelect, setIsDegreeDataSelect] = useState("");
  const [isAcademicYearDataSelect, setIsAcademicYearDataSelect] = useState("");
  const [isSemesterDataSelect, setIsSemesterDataSelect] = useState("");

  const loadDegreeData = async () => {
    const cData = await getDegreeData();
    setIsDegreeData(cData?.degreeArray);
    console.log(cData);
  };

  const loadAcademicDetailsData = async (degreeId) => {
    setIsDegreeDataSelect(degreeId);
    console.log(Cookies.get("departId"));
    const cData = await getAcademicDetailsData(
      Cookies.get("departId"),
      degreeId
    );
    setIsAcademicYearData(cData?.academicYearArray);
    setIsSemesterData([]);
    setIsSectionsData([]);

    console.log(cData);
  };

  const loadSemesterData = async (acadYear) => {
    setIsAcademicYearDataSelect(acadYear);
    const cData = await getSemsterData(isDegreeDataSelect, acadYear);
    setIsSemesterData(cData?.semesterArray);
    setIsSectionsData([]);

    console.log(cData);
  };

  const loadSectionsData = async (semester) => {
    setIsSemesterDataSelect(semester);
    const cData = await getSectionsData(semester);
    setIsSectionsData(cData?.sectionArray);
    console.log(cData);
  };

  useEffect(() => {
    loadDegreeData();
  }, []);
  return (
    <React.Fragment>
      <div className="grid grid-cols-4">
        <div className=" w-auto">
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
              onChange={(e) => loadAcademicDetailsData(e.target.value)}
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
            >
              <option value="" selected disabled>
                Select Your option
              </option>
              {isDegreeData &&
                isDegreeData.map((degree) => (
                  <option value={degree[0]}>{degree[1]}</option>
                ))}
            </select>
          </label>
        </div>

        <div className=" w-auto">
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
              onChange={(e) => loadSemesterData(e.target.value)}
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
            >
              <option value="" selected disabled>
                Select Your option
              </option>
              {isAcademicYearData &&
                isAcademicYearData.map((acadYear) => (
                  <option value={acadYear[1]}>{acadYear[0]}</option>
                ))}
            </select>
          </label>
        </div>

        <div className=" w-auto">
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
            >
              <option value="" selected disabled>
                Select Your option
              </option>
              {isSemesterData &&
                isSemesterData.map((semester) => (
                  <option value={semester[0]}>{semester[1]}</option>
                ))}
            </select>
          </label>
        </div>

        <div className=" w-auto">
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
                onSectionChange({
                  degree: isDegreeDataSelect,
                  acadYear: isAcademicYearDataSelect,
                  semester: isSemesterDataSelect,
                  section: e.target.value,
                })
              }
              name="Sections"
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
            >
              <option value="" selected disabled>
                Select Your option
              </option>
              {isSectionsData &&
                isSectionsData.map((section) => (
                  <option value={section[0]}>{section[1]}</option>
                ))}
            </select>
          </label>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommSelect;
