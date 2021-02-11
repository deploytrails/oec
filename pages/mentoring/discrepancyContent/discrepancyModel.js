import React, { useState, useEffect } from "react";
import {
  getDiscrepancyModelDetails,
  raiseIssueReq
} from "../../../services/mentoringServices";
import css from "@emotion/css";
import { Formik } from "formik";
import Cookies from "js-cookie";
import * as Yup from "yup";
import FormInput from "../../../components/General/formInput";
import { COLORS } from "../../../constants";
import moment from "moment";
import * as STYLES from "../../../components/General/modalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSnackbar } from "react-simple-snackbar";

const DiscrepancyModal = ({
  closeModal,
  isEnrollStudentData,
  getStudents,
  isSemSectionId
}) => {
  const desCreateSchema = Yup.object().shape({
    issuedetail: Yup.string().required()
  });
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const [courseDetailsList, setCourseDetailsList] = useState([]);
  const employeeName = Cookies.get("userName");
  const ProfileId = Cookies.get("employeeID");
  const currentDate = moment().format("MM-DD-YYYY");

  const getModelSupportData = async () => {
    const data = await getDiscrepancyModelDetails(
      isEnrollStudentData.enrollstudentId,
      ProfileId
    );
    setCourseDetailsList(data?.courseDetails);
  };

  useEffect(() => {
    getModelSupportData();
  }, []);

  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>
          Discrepancy Details{" "}
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => closeModal()}
            style={{ float: "right" }}
          />
        </STYLES.PopupTitle>
        <Formik
          initialValues={{
            courseCode: "",
            issuedetail: ""
          }}
          validationSchema={desCreateSchema}
          onSubmit={values => {
            console.log(values);
            raiseIssueReq(
              isEnrollStudentData.enrollstudentId,
              ProfileId,
              values.courseCode,
              values.issuedetail,
              currentDate
            ).then(data => {
              if (data.IssueStatus === "inserted") {
                openSnackbar("Issue Requested!");
                getStudents(isSemSectionId);
                closeModal();
              }
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <form onSubmit={handleSubmit}>
              <div
                className="text-sm font-sans"
                css={css`
                  & > p {
                    display: block;
                    margin-right: 10px;
                  }
                  & > p > span {
                    float: left;
                    width: 35%;
                    padding: 8px 0px;
                    color: ${COLORS.BLACK};
                  }
                  & > p > span > svg {
                    margin-right: 4px;
                  }
                `}
              >
                <p>
                  <span>Student Name</span>
                  <span>{isEnrollStudentData.firstName}</span>
                  <span>Faculty Name</span>
                  <span>{employeeName}</span>
                  <span>Course*</span>
                  <span>
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="courseCode"
                      css={css`
                        display: block;
                        width: 100%;
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
                      {courseDetailsList &&
                        courseDetailsList.map(opt => (
                          <option key={opt} value={opt.coursePrimaryId}>
                            {opt.courseCode}
                          </option>
                        ))}
                    </select>
                  </span>
                  <span>Date</span>
                  <span>{currentDate}</span>
                  <span>Detail's of Discrepancy/Issue*</span>
                  <span>
                    <FormInput
                      type="text"
                      name="issuedetail"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.issuedetail}
                      css={
                        errors.issuedetail &&
                        touched.issuedetail &&
                        errors.issuedetail &&
                        css`
                          border: 1px solid red;
                        `
                      }
                    />
                  </span>
                  <span></span>
                  <span>
                    <button
                      type="submit"
                      className="bg-red-400 px-3 py-2 rounded text-white float-right"
                    >
                      Issue Request
                    </button>
                  </span>
                </p>
              </div>
            </form>
          )}
        </Formik>
      </STYLES.PopupWrapper>
    </STYLES.PopupMask>
  );
};

export default DiscrepancyModal;
