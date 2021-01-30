import React from "react";
import css from "@emotion/css";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS } from "../../../constants";
import * as STYLES from "../../../components/General/modalStyles";
import FormInput from "../../General/formInput";
import { updateWorkExpDetails } from "../../../services/profileService";
import Cookies from "js-cookie";
import { useSnackbar } from "react-simple-snackbar";
import moment from "moment";

const WorkExpModal = ({ openModal, expList, loadExpInfo }) => {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const ProfileId = Cookies.get("employeeID");
  let state = "saveWorkExperience";
  const expCreateSchema = Yup.object().shape({
    collegename: Yup.string().required(),
    designation: Yup.string().required(),
    responsibilites: Yup.string().required(),
    expFrom: Yup.date().required(),
    expTo: Yup.date().required(),
  });
  const listTypes = [
    "Choose your option",
    "Dean",
    "Principal",
    "HOD",
    "Professor & Principal",
    "Professor & HOD",
    "Professor",
    "Assistant Professor",
    "Associate Professor",
    "Senior Lab Co-ordinator",
    "Lab Co-ordinator",
    "AO",
    "Secretary",
    "Administrator",
    "Librarian",
    "TPO",
    "Finance",
  ];
  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>Add Designation</STYLES.PopupTitle>
        <Formik
          initialValues={{
            workExperienceId: expList?.workExperienceId,
            collegename: expList?.collegename,
            designation: expList?.designation,
            responsibilites: expList?.responsibilites,
            expFrom: expList?.expFrom,
            expTo: expList?.expTo,
          }}
          validationSchema={expCreateSchema}
          onSubmit={(values) => {
            updateWorkExpDetails(ProfileId, values, state).then((data) => {
              if (data === true) {
                openSnackbar(
                  expList?.workExperienceId
                    ? "Work Experience updated successfully"
                    : "Work Experience created successfully"
                );
                loadExpInfo();
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
                <div className="w-6/12 float-left pr-2">
                  <FormInput
                    label="College Name*"
                    type="text"
                    name="collegename"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.collegename}
                    placeholder="College Name*"
                    css={
                      errors.collegename &&
                      touched.collegename &&
                      errors.collegename &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
                <div className="w-6/12 float-left">
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
                    Designation
                    <select
                      value={values.designation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="designation"
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
                              values.designation === opt
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
              </div>

              <div className="clearfix mb-3">
                <div className="w-full float-left">
                  <FormInput
                    label="Roles & Responsibilities"
                    type="text"
                    name="responsibilites"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.responsibilites}
                    placeholder="Roles & Responsibilities"
                    css={
                      errors.responsibilites &&
                      touched.responsibilites &&
                      errors.responsibilites &&
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
                    label="From"
                    type="date"
                    name="expFrom"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={moment(values.expFrom).format("YYYY-MM-DD")}
                    placeholder="From"
                    css={
                      errors.expFrom &&
                      touched.expFrom &&
                      errors.expFrom &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
                <div className="w-6/12 float-left">
                  <FormInput
                    label="To"
                    type="date"
                    name="expTo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={moment(values.expTo).format("YYYY-MM-DD")}
                    placeholder="To"
                    css={
                      errors.expTo &&
                      touched.expTo &&
                      errors.expTo &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
              </div>

              <div className="clearfix mb-3" style={{ display: "none" }}>
                <div className="w-full">
                  <label htmlFor="Address">
                    <input
                      type="file"
                      name="Qualification Certificate Upload"
                    />
                  </label>
                </div>
              </div>

              <div className="float-right">
                <button
                  type="submit"
                  className="bg-green-400 px-3 py-2 rounded text-white"
                >
                  {expList?.workExperienceId
                    ? "Update Work Experience"
                    : " Save Work Experience"}
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
export default WorkExpModal;
