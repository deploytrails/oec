import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import { Formik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useSnackbar } from "react-simple-snackbar";
import FormInput from "../../General/formInput";
import * as STYLES from "../../../components/General/modalStyles";
import { updateConfDetails } from "../../../services/profileService";
import { COLORS } from "../../../constants";

const ConferenceModal = ({ confData, closeModal, loadConfInfo }) => {
  console.log("confData", confData);
  const ProfileId = Cookies.get("employeeID");
  const departmentIDdVal = Cookies.get("departId");
  const [openSnackbar, closeSnackbar] = useSnackbar();

  //YUP validation schema
  const confUpdateSchema = Yup.object().shape({
    typeOfconferencename: Yup.string(),
    titleConference: Yup.string(),
    internationalNational: Yup.string(),
    organizedBy: Yup.string(),
    confMonYear: Yup.string(),
    typeOfIssn: Yup.string(),
    issnIsbnNo: Yup.string(),
    typeOfissue: Yup.string(),
    issueNo: Yup.string(),
    depart: Yup.string(),
    conferenceID: Yup.string(),
    //deptId: Yup.string(),
  });
  let deptId = undefined;
  let state = "forConferenceInsert";

  const confernceName = ["Choose your option", "Conference", "Seminar"];
  const categoryConference = [
    "Choose your option",
    "National Conference",
    "International Conference",
  ];
  const issnNums = ["Choose your option", "ISSN", "ISBN"];
  const issueNums = ["Choose your option", "SCOPUS", "Wos", "ICI", "UGC"];
  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>Conference Details</STYLES.PopupTitle>
        <Formik
          initialValues={{
            typeOfconferencename: confData?.typeOfconferencename,
            titleConference: confData?.titleConference,
            internationalNational: confData?.internationalNational,
            organizedBy: confData?.organizedBy,
            confMonYear: confData?.conferenceMonthYear,
            typeOfIssn: confData?.typeOfIssn,
            issnIsbnNo: confData?.issnIsbnNo,
            typeOfissue: confData?.typeOfissue,
            issueNo: confData?.issueNo,
            depart: departmentIDdVal,
            conferenceID: confData?.conferenceID,
          }}
          validationSchema={confUpdateSchema}
          onSubmit={(values) => {
            updateConfDetails(ProfileId, values, deptId, state).then((data) => {
              if (data === true) {
                openSnackbar(
                  confData?.conferenceID
                    ? "Conference details updated successfully"
                    : "Conference  created successfully"
                );
                closeModal();
                loadConfInfo();
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
                <div className="w-6/12 float-left pr-2">
                  <label
                    htmlFor="Conference / Seminar Name"
                    css={css`
                      font-size: 14px;
                      display: block;
                      color: ${COLORS.BLACK};
                      .errorBorder {
                        border-color: ${COLORS.RED};
                      }
                    `}
                  >
                    Conference / Seminar Name
                    <select
                      id="typeOfconferencename"
                      name="typeOfconferencename"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.typeOfconferencename}
                      className="border border-2 border-solid p-2 rounded w-full focus:outline-none"
                      css={
                        errors.typeOfconferencename &&
                        touched.typeOfconferencename &&
                        errors.typeOfconferencename
                          ? css`
                              border: 1px solid red;
                            `
                          : css`
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
                            `
                      }
                    >
                      {confernceName &&
                        confernceName.map((opt) => (
                          <option
                            key={opt}
                            value={
                              values.typeOfconferencename === opt
                                ? values.typeOfconferencename
                                : opt
                            }
                            selected={
                              values.typeOfconferencename === opt
                                ? values.typeOfconferencename
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
                    label="Paper Title"
                    type="text"
                    id="titleConference"
                    name="titleConference"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.titleConference}
                    placeholder="Paper Title"
                    css={
                      errors.titleConference &&
                      touched.titleConference &&
                      errors.titleConference &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
              </div>

              <div className="clearfix mb-3">
                <div className="w-6/12 float-left pr-2">
                  <label
                    htmlFor="Conference Category"
                    css={css`
                      font-size: 14px;
                      display: block;
                      color: ${COLORS.BLACK};
                      .errorBorder {
                        border-color: ${COLORS.RED};
                      }
                    `}
                  >
                    Conference Category
                    <select
                      name="internationalNational"
                      id="internationalNational"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.internationalNational}
                      className="border border-2 border-solid p-2 rounded w-full focus:outline-none"
                      css={
                        errors.internationalNational &&
                        touched.internationalNational &&
                        errors.internationalNational
                          ? css`
                              border: 1px solid red;
                            `
                          : css`
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
                            `
                      }
                    >
                      {categoryConference &&
                        categoryConference.map((opt) => (
                          <option
                            key={opt}
                            value={
                              values.internationalNational === opt
                                ? values.internationalNational
                                : opt
                            }
                            selected={
                              values.internationalNational === opt
                                ? values.internationalNational
                                : opt
                            }
                          >
                            {opt}
                          </option>
                        ))}
                    </select>
                  </label>
                </div>
                <div className="w-6/12 float-left ">
                  <FormInput
                    label="Organized By"
                    type="text"
                    id="organizedBy"
                    name="organizedBy"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.organizedBy}
                    placeholder="Organized By"
                    css={
                      errors.organizedBy &&
                      touched.organizedBy &&
                      errors.organizedBy &&
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
                    label="Month & Year"
                    type="date"
                    name="confMonYear"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confMonYear}
                    placeholder="Month & Year"
                    css={
                      errors.confMonYear &&
                      touched.confMonYear &&
                      errors.confMonYear &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>

                <div className="w-6/12 float-left">
                  <label
                    htmlFor="ID Type"
                    css={css`
                      font-size: 14px;
                      display: block;
                      color: ${COLORS.BLACK};
                      .errorBorder {
                        border-color: ${COLORS.RED};
                      }
                    `}
                  >
                    ID Type
                    <select
                      name="typeOfIssn"
                      id="typeOfIssn"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.typeOfIssn}
                      className="border border-2 border-solid p-2 rounded w-full focus:outline-none"
                      css={
                        errors.typeOfIssn &&
                        touched.typeOfIssn &&
                        errors.typeOfIssn
                          ? css`
                              border: 1px solid red;
                            `
                          : css`
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
                            `
                      }
                    >
                      {issnNums &&
                        issnNums.map((opt) => (
                          <option
                            key={opt}
                            value={
                              values.typeOfIssn === opt
                                ? values.typeOfIssn
                                : opt
                            }
                            selected={
                              values.typeOfIssn === opt
                                ? values.typeOfIssn
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

              <div className="clearfix mb-3">
                <div className="w-6/12 float-left pr-2">
                  <FormInput
                    label="ID Number"
                    type="text"
                    name="issnIsbnNo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.issnIsbnNo}
                    placeholder="ID Number"
                    css={
                      errors.issnIsbnNo &&
                      touched.issnIsbnNo &&
                      errors.issnIsbnNo &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>

                <div className="w-6/12 float-left">
                  <label
                    htmlFor="Issue Type"
                    css={css`
                      font-size: 14px;
                      display: block;
                      color: ${COLORS.BLACK};
                      .errorBorder {
                        border-color: ${COLORS.RED};
                      }
                    `}
                  >
                    Issue Type
                    <select
                      name="typeOfissue"
                      id="typeOfissue"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.typeOfissue}
                      className="border border-2 border-solid p-2 rounded w-full focus:outline-none"
                      css={
                        errors.typeOfissue &&
                        touched.typeOfissue &&
                        errors.typeOfissue
                          ? css`
                              border: 1px solid red;
                            `
                          : css`
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
                            `
                      }
                    >
                      {issueNums &&
                        issueNums.map((opt) => (
                          <option
                            key={opt}
                            value={
                              values.typeOfissue === opt
                                ? values.typeOfissue
                                : opt
                            }
                            selected={
                              values.typeOfissue === opt
                                ? values.typeOfissue
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

              <div className="clearfix mb-3">
                <div className="w-6/12">
                  <FormInput
                    label="Issue No."
                    type="text"
                    name="issueNo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.issueNo}
                    placeholder=" Issue No."
                    css={
                      errors.issueNo &&
                      touched.issueNo &&
                      errors.issueNo &&
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
                  {confData?.conferenceID
                    ? "Update Conference Details"
                    : "Save Conference Details"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
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
export default ConferenceModal;
