import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import { Formik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useSnackbar } from "react-simple-snackbar";
import * as STYLES from "../../../components/General/modalStyles";
import FormInput from "../../General/formInput";
import { COLORS } from "../../../constants";
import { updateGrantDetails } from "../../../services/profileService";

const GrantRecievedModal = ({
  openModal,
  loadGrantsInfo,
  noGrant,
  grantList,
}) => {
  const ProfileId = Cookies.get("employeeID");
  const departmentIDdVal = Cookies.get("departId");
  const [openSnackbar, closeSnackbar] = useSnackbar();

  //YUP Grant schema
  const grantCreateSchema = Yup.object().shape({
    scheme: Yup.string().required(),
    amtsan: Yup.string().required(),
    sanlettr: Yup.string().required(),
    utipostoday: Yup.string().required(),
    uticerdet: Yup.string().required(),
    yeargrant: Yup.string().required(),
  });
  let state = "forGrantRcvdInsert";

  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>Grant Received Details</STYLES.PopupTitle>
        <Formik
          initialValues={{
            department: departmentIDdVal,
            grantrcvdID: grantList?.empgrantrcvdid,
            nameco: grantList?.facultyId?.firstName,
            scheme: grantList.scheme,
            amtsan: grantList.amtsancted,
            sanlettr: grantList.sanctdlettrno,
            utipostoday: grantList.utlzpostoday,
            uticerdet: grantList.utlcertdetls,
            yeargrant: grantList.year,
          }}
          validationSchema={grantCreateSchema}
          onSubmit={(values) => {
            console.log(values);
            updateGrantDetails(ProfileId, values).then((data) => {
              if (data === true) {
                openSnackbar(
                  grantList?.clientID
                    ? "Grant updated successfully"
                    : "Grant created successfully"
                );
                loadGrantsInfo();
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
                    label="Scheme"
                    type="text"
                    name="scheme"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.scheme}
                    placeholder="Scheme"
                    css={
                      errors.scheme &&
                      touched.scheme &&
                      errors.scheme &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
                <div className="w-6/12 float-left">
                  <FormInput
                    label="Amount Sanctioned"
                    type="text"
                    name="amtsan"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.amtsan}
                    placeholder="Amount Sanctioned"
                    css={
                      errors.amtsan &&
                      touched.amtsan &&
                      errors.amtsan &&
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
                    label="Sanctioned Letter No."
                    type="text"
                    name="sanlettr"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.sanlettr}
                    placeholder="Sanctioned Letter No."
                    css={
                      errors.sanlettr &&
                      touched.sanlettr &&
                      errors.sanlettr &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
                <div className="w-6/12 float-left">
                  <FormInput
                    label="Current Utilisation Position"
                    type="text"
                    name="utipostoday"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.utipostoday}
                    placeholder="Current Utilisation Position"
                    css={
                      errors.utipostoday &&
                      touched.utipostoday &&
                      errors.utipostoday &&
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
                    label="Utilisation Certificate Details"
                    type="text"
                    name="uticerdet"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.uticerdet}
                    placeholder="Utilisation Certificate Details"
                    css={
                      errors.uticerdet &&
                      touched.uticerdet &&
                      errors.uticerdet &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
                <div className="w-6/12 float-left">
                  <FormInput
                    label="Year"
                    type="text"
                    name="yeargrant"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.yeargrant}
                    placeholder="Year"
                    css={
                      errors.yeargrant &&
                      touched.yeargrant &&
                      errors.yeargrant &&
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
                  {grantList?.clientID
                    ? "Update Grant Recieved "
                    : "Save Grant Recieved"}
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
export default GrantRecievedModal;
