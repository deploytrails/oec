import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import { Formik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useSnackbar } from "react-simple-snackbar";
import { COLORS } from "../../../constants";
import * as STYLES from "../../../components/General/modalStyles";
import FormInput from "../../General/formInput";
import { updateContactDetails } from "../../../services/profileService";

const ContactModal = ({ openModal, userData, loadProfileData }) => {
  const ProfileId = Cookies.get("employeeID");
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const bookCreateSchema = Yup.object().shape({
    mobileNumber: Yup.string().required(),
    alternateMobile: Yup.string(),
    email: Yup.string().required(),
    alternateEmail: Yup.string(),
    address: Yup.string(),
  });
  let state = "updateRec";

  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>Update Contact Details</STYLES.PopupTitle>
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
            dateOfBirth: userData?.dateOfBirth,
            aadharNo: userData?.aadharNo,
            tertiaryprogram: userData?.tertiaryprogram,
            firstName: userData?.firstName,
            secondaryprogram: userData?.secondaryprogram,
            dateOfJoining: userData?.dateOfJoining,
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
            updateContactDetails(values, state).then((data) => {
              if (data === true) {
                openSnackbar("Contact updated successfully");
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
                <div className="w-6/12 float-left pr-2">
                  <FormInput
                    label="Mobile No"
                    type="text"
                    name="mobileNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mobileNumber}
                    placeholder="Mobile No"
                    css={
                      errors.mobileNumber &&
                      touched.mobileNumber &&
                      errors.mobileNumber &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
                <div className="w-6/12 float-left">
                  <FormInput
                    label="Alternate Mobile No"
                    type="text"
                    name="alternateMobile"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.alternateMobile}
                    placeholder="Alternate Mobile No"
                    css={
                      errors.alternateMobile &&
                      touched.alternateMobile &&
                      errors.alternateMobile &&
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
                    label="Email"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email"
                    css={
                      errors.email &&
                      touched.email &&
                      errors.email &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>

                <div className="w-6/12 float-left">
                  <FormInput
                    label="Alternate Email"
                    type="text"
                    name="alternateEmail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.alternateEmail}
                    placeholder="Alternate Email"
                    css={
                      errors.alternateEmail &&
                      touched.alternateEmail &&
                      errors.alternateEmail &&
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
                    label="Address"
                    type="text"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    placeholder="Address"
                    css={
                      errors.address &&
                      touched.address &&
                      errors.address &&
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
                  Update Contact Details
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
export default ContactModal;
