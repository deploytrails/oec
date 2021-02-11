import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import Cookies from "js-cookie";
import * as STYLES from "../../../components/General/modalStyles";
import DatePicker from "react-datepicker";
import { useSnackbar } from "react-simple-snackbar";
import FormInput from "../../General/formInput";
import { updatePhdDetails } from "../../../services/profileService";
import { COLORS } from "../../../constants";

const PhdModal = ({ closeModal, isPHDdata, loadPhInfo }) => {
  console.log("isPHDdatassss", isPHDdata);
  const [startDate, setStartDate] = useState(new Date());
  const ProfileId = Cookies.get("employeeID");
  const [openSnackbar, closeSnackbar] = useSnackbar();
  //YUP validation schema
  const phdUpdateSchema = Yup.object().shape({
    researchTitle: Yup.string().required("Required"),
    university: Yup.string().required("Required"),
    registeredYear: Yup.string().required("Required"),
    phdstatus: Yup.string().required("Required"),
    dateAward: Yup.string().required("Required"),
    supervisorName: Yup.string().required("Required"),
    supervisionAff: Yup.string().required("Required"),
    deptId: Yup.string(),
    phdDetailsId: Yup.string(),
  });

  const statusInfo = ["Select Status", "Completed", "Pursuing"];

  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>Ph.D Details</STYLES.PopupTitle>
        <Formik
          initialValues={{
            researchTitle: isPHDdata?.researchTitle,
            university: isPHDdata?.university,
            registeredYear: isPHDdata?.registeredYear,
            phdstatus: isPHDdata?.status,
            dateAward: isPHDdata?.dateAward,
            supervisorName: isPHDdata?.supervisiorName,
            supervisionAff: isPHDdata?.supervisiorAffiliation,
            deptId: isPHDdata?.department?.departmentPrimaryId,
            phdDetailsId: isPHDdata?.phdDetailsID,
          }}
          validationSchema={phdUpdateSchema}
          onSubmit={(values) => {
            updatePhdDetails(ProfileId, values).then((data) => {
              if (data) {
                openSnackbar("Ph.D Details updated successfully.");
                loadPhInfo();
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
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="clearfix mb-3">
                <div className="w-6/12 float-left pr-2">
                  <FormInput
                    label="Research Title"
                    type="text"
                    name="researchTitle"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.researchTitle}
                    placeholder="Research Title"
                    css={
                      errors.researchTitle &&
                      touched.researchTitle &&
                      errors.researchTitle &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
                <div className="w-6/12 float-left ">
                  <FormInput
                    label="University"
                    type="text"
                    name="university"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.university}
                    placeholder="University"
                    css={
                      errors.university &&
                      touched.university &&
                      errors.university &&
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
                    label="Registered Year"
                    name="registeredYear"
                    placeholder="Registered Year"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.registeredYear}
                    css={
                      errors.registeredYear &&
                      touched.registeredYear &&
                      errors.registeredYear &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
                <div className="w-6/12 float-left">
                  <label
                    htmlFor=" Ph.D Status"
                    css={css`
                      font-size: 14px;
                      display: block;
                      color: ${COLORS.BLACK};
                      .errorBorder {
                        border-color: ${COLORS.RED};
                      }
                    `}
                  >
                    Ph.D Status
                    <select
                      name="phdstatus"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      css={
                        errors.phdstatus &&
                        touched.phdstatus &&
                        errors.phdstatus
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
                      {statusInfo &&
                        statusInfo.map((opt) => (
                          <option
                            key={opt}
                            value={
                              values.phdstatus === opt ? values.phdstatus : opt
                            }
                            selected={
                              values.phdstatus === opt ? values.phdstatus : opt
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
                <div className="w-4/12 float-left">
                  <FormInput
                    label="Date Award"
                    type="date"
                    name="dateAward"
                    id="DateAward"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateAward}
                    placeholder="dateAward"
                    css={
                      errors.dateAward &&
                      touched.dateAward &&
                      errors.dateAward &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>

                <div className="w-4/12 float-left px-2">
                  <FormInput
                    label="Supervisor Name"
                    type="text"
                    name="supervisorName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.supervisorName}
                    placeholder="Supervisor Name"
                    className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                    css={
                      errors.supervisorName &&
                      touched.supervisorName &&
                      errors.supervisorName &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>

                <div className="w-4/12 float-left ">
                  <FormInput
                    label="Supervisor Affiliation"
                    type="text"
                    name="supervisionAff"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.supervisionAff}
                    placeholder="Supervisor Affiliation"
                    className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                    css={
                      errors.supervisionAff &&
                      touched.supervisionAff &&
                      errors.supervisionAff &&
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
                  Save Ph.D Details
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
export default PhdModal;
