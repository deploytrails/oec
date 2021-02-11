import React from "react";
import css from "@emotion/css";
import * as STYLES from "../../../components/General/modalStyles";
import { Formik } from "formik";
import FormInput from "../../General/formInput";
import * as Yup from "yup";
import { COLORS } from "../../../constants";
import { updateQualificationDetails } from "../../../services/profileService";
import Cookies from "js-cookie";
import { useSnackbar } from "react-simple-snackbar";

const QualificationModal = ({
  openModal,
  qualificationList,
  loadQualificationInfo,
  isProfileData,
}) => {
  const listTypes = [
    "Choose your option",
    "Ph.D",
    "M.Phil",
    "Post Graduation",
    "Graduation/UnderGraduation",
    "Intermediate/Diploma",
    "SSC",
  ];
  const ProfileId = Cookies.get("employeeID");
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const qualificationCreateSchema = Yup.object().shape({
    collegeName: Yup.string().required(),
    branchName: Yup.string().required(),
    yearOfPass: Yup.string().required(),
    qualificationType: Yup.string().required()
  });
  const submitQualification = async (values) => {
    console.log("values",values);
    console.log("profileid",ProfileId);
    saveQualificationDetails(values);
  }

  const saveQualificationDetails = async(values) => {
    const cData = await updateQualificationDetails(ProfileId,values);
    console.log(cData);
    if (cData) {
      openSnackbar(
        qualificationList?.qualificationID
          ? "Qualification updated successfully"
          : "Qualification created successfully"
      );
      loadQualificationInfo();
      openModal();
  }
    }




  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>Qualification Details</STYLES.PopupTitle>

        <Formik
          initialValues={{
            employeeID: isProfileData.profile[0],
            qualificationID: qualificationList?.qualificationID,
            collegeName: qualificationList?.collegeName,
            branchName: qualificationList?.branchName,
            qualificationType: qualificationList?.qualificationType,
            yearOfPass: qualificationList?.yearOfPass,
          }}
          validationSchema={qualificationCreateSchema}
          onSubmit={submitQualification}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="clearfix mb-3">
                <div className="w-6/12 float-left pr-2">
                  <label
                    htmlFor="Designation"
                    css={css`
                      font-size: 14px;
                      display: block;
                      color: ${COLORS.BLACK};
                      .errorBorder {
                        border-color: ${COLORS.RED};
                      }
                    `}
                  >
                    Qualification Type
                    <select
                      value={values.qualificationType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="qualificationType"
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
                      {listTypes &&
                        listTypes.map((opt) => (
                          <option
                            key={opt}
                            value={
                              values.qualificationList === opt
                                ? values.designation
                                : opt
                            }
                          >
                            {opt}
                          </option>
                        ))}
                    </select>
                  </label>
                </div>

                <div className="w-6/12 float-left">
                  <FormInput
                    label="College/University Name"
                    type="text"
                    name="collegeName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.collegeName}
                    placeholder="Roles & Responsibilities"
                    css={
                      errors.collegeName &&
                      touched.collegeName &&
                      errors.collegeName &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
              </div>

              <div className="clearfix mb-3">
                <div className="w-6/12 float-left pr-2">
                  <FormInput
                    label="Branch Name"
                    type="text"
                    name="branchName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.branchName}
                    placeholder="Branch Name"
                    css={
                      errors.branchName &&
                      touched.branchName &&
                      errors.branchName &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>

                <div className="w-6/12 float-left">
                  <FormInput
                    label="Completion Year"
                    type="text"
                    name="yearOfPass"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.yearOfPass}
                    placeholder="Completion Year"
                    css={
                      errors.yearOfPass &&
                      touched.yearOfPass &&
                      errors.yearOfPass &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
              </div>

              <div className="float-right">
                <button
                  type="submit"
                  className="bg-green-400 px-3 py-2 rounded text-white"
                >
                  {qualificationList?.qualificationID
                    ? "Update Qualification"
                    : "Save Qualification"}
                </button>
                <button
                  type="button"
                  onClick={openModal}
                  className="bg-black px-3 py-2 ml-2 rounded text-white"
                >
                  Close
                </button>
              </div>
            </form>
          )}
        </Formik>
      </STYLES.PopupWrapper>
    </STYLES.PopupMask>
  );
};
export default QualificationModal;
