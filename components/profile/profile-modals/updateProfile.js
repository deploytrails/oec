import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import { Formik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useSnackbar } from "react-simple-snackbar";
import { COLORS } from "../../../constants";
import * as STYLES from "../../../components/General/modalStyles";
import FormInput from "../../General/formInput";
import { updateProfileDetails } from "../../../services/profileService";

const Modal = ({ openModal, userData, loadProfileData }) => {
  const ProfileId = Cookies.get("employeeID");
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const bookCreateSchema = Yup.object().shape({
    prefix: Yup.string().required(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    surName: Yup.string().required(),
    gender: Yup.string().required(),
    dateOfBirth: Yup.string().required(),
    fatherName: Yup.string().required(),
    employeeType: Yup.string().required(),
    associationType: Yup.string().required(),
    designation: Yup.string().required(),
    dateOfJoining: Yup.string().required(),
    dateOfLeaving: Yup.string().required(),
    aadharNo: Yup.string().required(),
    panCardNo: Yup.string().required(),
    jntuhID: Yup.string().required(),
    aicteId: Yup.string().required(),
    achievements: Yup.string().required(),
    researchActivities: Yup.string().required(),
  });
  let state = "forBooksInsert";

  const prefixTypes = ["Choose your option", "Mr", "Mrs", "Ms", "Miss"];
  const genderTypes = ["Choose your option", "Male", "Female"];
  const assoTypes = [
    "Choose your option",
    "Regular",
    "Contractual",
    "Visiting",
  ];
  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>Update Profile</STYLES.PopupTitle>

        <Formik
          initialValues={{
            mobileNumber: userData?.mobileNumber,
            alternateMobile: userData?.alternateMobile,
            email: userData?.email,
            alternateEmail: userData?.alternateEmail,
            address: userData?.address,
            lastName: userData?.lastName,
            fatherName: userData?.fatherName,
            achievements: userData?.achievements,
            surName: userData?.surName,
            gender: userData?.gender,
            prefix: userData?.prefix,
            quinaryprogram: userData?.quinaryprogram,
            password: userData?.password,
            researchActivities: userData?.researchActivities,
            department: userData?.department,
            employeePrimaryId: userData?.employeePrimaryId,
            quaternaryprogram: userData?.quaternaryprogram,
            associationType: userData?.associationType,
            dateOfBirth: userData?.dateOfBirth?.substr(0,10),
            aadharNo: userData?.aadharNo,
            tertiaryprogram: userData?.tertiaryprogram,
            firstName: userData?.firstName,
            secondaryprogram: userData?.secondaryprogram,
            dateOfJoining: userData?.dateOfJoining?.substr(0,10),
            dateOfLeaving: userData?.dateOfLeaving?.substr(0,10),
            employeeType: userData?.employeeType,
            aicteId: userData?.aicteId,
            senaryprogram: userData?.senaryprogram,
            designation: userData?.designation,
            jntuhID: userData?.jntuhID,
            panCardNo: userData?.panCardNo,
            username: userData?.username,
            status: userData?.status,
            septenaryprogram: userData?.septenaryprogram,
            dept: userData?.dept,
            dept1: userData?.dept1,
            dept2: userData?.dept2,
            dept3: userData?.dept3,
            dept4: userData?.dept4,
            dept5: userData?.dept5,
          }}
          validationSchema={bookCreateSchema}
          onSubmit={(values) => {
            console.log("values",values);
            updateProfileDetails(values, state).then((data) => {
              if (data === true) {
                openSnackbar("Profile updated successfully");
                loadProfileData();
                openModal();
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
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="clearfix mb-3">
                <div className="w-4/12 float-left">
                  <label
                    htmlFor="Prefix"
                    css={css`
                      font-size: 14px;
                      display: block;
                      color: ${COLORS.BLACK};
                      .errorBorder {
                        border-color: ${COLORS.RED};
                      }
                    `}
                  >
                    Prefix
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="prefix"
                      value={values.prefix}
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
                      {prefixTypes &&
                        prefixTypes.map((opt) => (
                          <option
                            key={opt}
                            value={values.prefix === opt ? values.prefix : opt}
                            selected={
                              values.prefix === opt ? values.prefix : opt
                            }
                          >
                            {opt}
                          </option>
                        ))}
                    </select>
                  </label>
                </div>
                <div className="w-4/12 float-left px-1">
                  <FormInput
                    label="Name"
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    placeholder="Name"
                    css={
                      errors.firstName &&
                      touched.firstName &&
                      errors.firstName &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>

                <div className="w-4/12 float-left">
                  <FormInput
                    label="Last Name"
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    placeholder="Last Name"
                    css={
                      errors.lastName &&
                      touched.lastName &&
                      errors.lastName &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
              </div>

              <div className="clearfix  mb-3">
                <div className="w-4/12 float-left">
                  <FormInput
                    label="Sur Name"
                    type="text"
                    name="surName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.surName}
                    placeholder="Sur Name"
                    css={
                      errors.surName &&
                      touched.surName &&
                      errors.surName &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
                <div className="w-4/12 float-left px-1">
                  <label
                    htmlFor="Gender"
                    css={css`
                      font-size: 14px;
                      display: block;
                      color: ${COLORS.BLACK};
                      .errorBorder {
                        border-color: ${COLORS.RED};
                      }
                    `}
                  >
                    Prefix
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="gender"
                      value={values.gender}
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
                      {genderTypes &&
                        genderTypes.map((opt) => (
                          <option
                            key={opt}
                            value={values.gender === opt ? values.gender : opt}
                            selected={
                              values.gender === opt ? values.gender : opt
                            }
                          >
                            {opt}
                          </option>
                        ))}
                    </select>
                  </label>
                </div>

                <div className="w-4/12 float-left">
                  <FormInput
                    label="Date Of Birth"
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateOfBirth}
                    placeholder="Date Of Birth"
                    css={
                      errors.dateOfBirth &&
                      touched.dateOfBirth &&
                      errors.dateOfBirth &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
              </div>

              <div className="clearfix  mb-3">
                <div className="w-4/12 float-left">
                  <FormInput
                    label="Father Name"
                    type="text"
                    name="fatherName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fatherName}
                    placeholder="Father Name"
                    css={
                      errors.fatherName &&
                      touched.fatherName &&
                      errors.fatherName &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
                <div className="w-4/12 float-left px-1">
                  <FormInput
                    label="Employee Type"
                    type="text"
                    name="employeeType"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.employeeType}
                    placeholder="Employee Type"
                    css={
                      errors.employeeType &&
                      touched.employeeType &&
                      errors.employeeType &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>

                <div className="w-4/12 float-left">
                  <label
                    htmlFor="associationType"
                    css={css`
                      font-size: 14px;
                      display: block;
                      color: ${COLORS.BLACK};
                      .errorBorder {
                        border-color: ${COLORS.RED};
                      }
                    `}
                  >
                    Association Type
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="associationType"
                      value={values.associationType}
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
                      {assoTypes &&
                        assoTypes.map((opt) => (
                          <option
                            key={opt}
                            value={
                              values.associationType === opt
                                ? values.associationType
                                : opt
                            }
                            selected={
                              values.associationType === opt
                                ? values.associationType
                                : opt
                            }
                          >
                            {opt}
                          </option>
                        ))}
                    </select>
                  </label>
                </div>
              </div>

              <div className="clearfix  mb-3">
                <div className="w-4/12 float-left">
                  <FormInput
                    label="Designation"
                    type="text"
                    name="designation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.designation}
                    placeholder="Designation"
                    css={
                      errors.designation &&
                      touched.designation &&
                      errors.designation &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
                <div className="w-4/12 float-left px-1">
                  <FormInput
                    label="Joining Date"
                    type="date"
                    name="dateOfJoining"
                    id="dateOfJoining"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateOfJoining}
                    placeholder="Joining Date"
                    css={
                      errors.dateOfJoining &&
                      touched.dateOfJoining &&
                      errors.dateOfJoining &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>

                <div className="w-4/12 float-left">
                  <FormInput
                    label="Leaving Date"
                    type="date"
                    name="dateOfLeaving"
                    id="dateOfLeaving"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateOfLeaving}
                    placeholder="Date Of Leaving"
                  />
                </div>
              </div>
              <div className="clearfix  mb-3">
                <div className="w-4/12 float-left">
                  <FormInput
                    label="Aadhar Card No"
                    type="text"
                    name="aadharNo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.aadharNo}
                    placeholder="Aadhar Card No"
                    css={
                      errors.aadharNo &&
                      touched.aadharNo &&
                      errors.aadharNo &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
                <div className="w-4/12 float-left px-1">
                  <FormInput
                    label="PAN Card No."
                    type="text"
                    name="panCardNo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.panCardNo}
                    placeholder="PAN Card No"
                    css={
                      errors.panCardNo &&
                      touched.panCardNo &&
                      errors.panCardNo &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>

                <div className="w-4/12 float-left">
                  <FormInput
                    label="JNTUA No."
                    type="text"
                    name="jntuhID"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.jntuhID}
                    placeholder="JNTUA No"
                    css={
                      errors.jntuhID &&
                      touched.jntuhID &&
                      errors.jntuhID &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
              </div>

              <div className="clearfix  mb-3">
                <div className="w-4/12 float-left">
                  <FormInput
                    label="AICTE No."
                    type="text"
                    name="aicteId"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.aicteId}
                    placeholder="AICTE No"
                    css={
                      errors.aicteId &&
                      touched.aicteId &&
                      errors.aicteId &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
                <div className="w-4/12 float-left px-1">
                  <FormInput
                    label="Achievements"
                    type="text"
                    name="achievements"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.achievements}
                    placeholder="Achievements"
                    css={
                      errors.achievements &&
                      touched.achievements &&
                      errors.achievements &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>

                <div className="w-4/12 float-left">
                  <FormInput
                    label="Research Activities"
                    type="text"
                    name="researchActivities"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.researchActivities}
                    placeholder="Research Activities"
                    css={
                      errors.researchActivities &&
                      touched.researchActivities &&
                      errors.researchActivities &&
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
                  Update
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
export default Modal;
