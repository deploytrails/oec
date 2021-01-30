import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import { Formik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useSnackbar } from "react-simple-snackbar";
import { COLORS } from "../../../constants";
import * as STYLES from "../../../components/General/modalStyles";
import FormInput from "../../General/formInput";
import { updateResearchGuidlinesDetails } from "../../../services/profileService";

const ResearchGuidlinesModal = ({
  openModal,
  guidList,
  loadResearchGuidInfo,
}) => {
  const ProfileId = Cookies.get("employeeID");
  const [openSnackbar, closeSnackbar] = useSnackbar();

  //YUP Grant schema
  const ResearchGuidlinesCreateSchema = Yup.object().shape({
    scholarName: Yup.string().required(),
    yearOfAdmission: Yup.string().required(),
    typeofAcademic: Yup.string().required(),
    topic: Yup.string().required(),
    universityName: Yup.string().required(),
  });
  let state = "forResearchGuidanceInsert";
  const listTypes = ["Choose your option", "Ph.D", "M.Phil"];
  const statusTypes = [
    "Choose your option",
    "Completed",
    "Submitted",
    "Pursuing",
  ];

  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>Research Guidance Details</STYLES.PopupTitle>

        <Formik
          initialValues={{
            ResearchGuidanceID: guidList?.researchGuidanceID,
            scholarName: guidList?.scholarname,
            yearOfAdmission: guidList?.yearOfAdmission,
            typeofAcademic: guidList?.phdOrMphil,
            topic: guidList?.topic,
            universityName: guidList?.universityName,
            status: guidList?.status,
          }}
          validationSchema={ResearchGuidlinesCreateSchema}
          onSubmit={(values) => {
            updateResearchGuidlinesDetails(ProfileId, values, state).then(
              (data) => {
                if (data === true) {
                  openSnackbar(
                    guidList?.clientID
                      ? "Research Guidlines updated successfully"
                      : "Research Guidlines created successfully"
                  );
                  loadResearchGuidInfo();
                  openModal();
                }
              }
            );
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
                  <FormInput
                    label="Scholar Name"
                    type="text"
                    name="scholarName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.scholarName}
                    placeholder="Scholar Name"
                    css={
                      errors.scholarName &&
                      touched.scholarName &&
                      errors.scholarName &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
                <div className="w-6/12 float-left">
                  <FormInput
                    label="Admission Year"
                    type="text"
                    name="yearOfAdmission"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.yearOfAdmission}
                    placeholder="Admission Year"
                    css={
                      errors.yearOfAdmission &&
                      touched.yearOfAdmission &&
                      errors.yearOfAdmission &&
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
                    htmlFor="Ph.D/M.Phil"
                    css={css`
                      font-size: 14px;
                      display: block;
                      color: ${COLORS.BLACK};
                      .errorBorder {
                        border-color: ${COLORS.RED};
                      }
                    `}
                  >
                    Ph.D/M.Phil
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="typeofAcademic"
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
                              values.typeofAcademic === opt
                                ? values.typeofAcademic
                                : opt
                            }
                            selected={
                              values.typeofAcademic === opt
                                ? values.typeofAcademic
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
                    label="Topic"
                    type="text"
                    name="topic"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.topic}
                    placeholder="Topic"
                    css={
                      errors.topic &&
                      touched.topic &&
                      errors.topic &&
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
                    label="University Name"
                    type="text"
                    name="universityName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.universityName}
                    placeholder="University Name"
                    css={
                      errors.universityName &&
                      touched.universityName &&
                      errors.universityName &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>

                <div className="w-6/12 float-left">
                  <label
                    htmlFor="Status"
                    css={css`
                      font-size: 14px;
                      display: block;
                      color: ${COLORS.BLACK};
                      .errorBorder {
                        border-color: ${COLORS.RED};
                      }
                    `}
                  >
                    Status
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="status"
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
                      {statusTypes &&
                        statusTypes.map((opt) => (
                          <option
                            key={opt}
                            value={values.status === opt ? values.status : opt}
                            selected={
                              values.status === opt ? values.status : opt
                            }
                          >
                            {opt}
                          </option>
                        ))}
                    </select>
                  </label>
                </div>
              </div>

              <div className="float-right">
                <button
                  type="submit"
                  className="bg-green-400 px-3 py-2 rounded text-white"
                >
                  {guidList?.researchGuidanceID
                    ? "Update Research Guidance "
                    : "Save Research Guidance"}
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
export default ResearchGuidlinesModal;
