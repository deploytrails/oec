import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import { Formik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useSnackbar } from "react-simple-snackbar";
import { COLORS } from "../../../constants";
import * as STYLES from "../../../components/General/modalStyles";
import FormInput from "../../General/formInput";
import { updateWorkshopDetails } from "../../../services/profileService";

const WorkshopModal = ({ openModal, workshopList, loadWorkshopInfo }) => {
  const ProfileId = Cookies.get("employeeID");
  const departmentIDdVal = Cookies.get("departId");
  const [openSnackbar, closeSnackbar] = useSnackbar();

  //YUP Grant schema
  const workCreateSchema = Yup.object().shape({
    typeOfWorkshopname: Yup.string().required(),
    orgnizedBy: Yup.string().required(),
    duration: Yup.string().required(),
    monYear: Yup.string().required(),
    place: Yup.string().required(),
    typeOfworkshop: Yup.string().required(),
  });
  let state = "forWorkshopInsert";
  const wshopList = ["Choose your option", "STTP", "FDP", "Training Programme"];
  const listTypes = ["Choose your option", "National", "International"];

  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>Workshop Details</STYLES.PopupTitle>
        <Formik
          initialValues={{
            workdeptId: departmentIDdVal,
            workID: workshopList?.workShopID,
            typeOfWorkshopname: workshopList?.workshop,
            orgnizedBy: workshopList?.organizedby,
            duration: workshopList?.duration,
            monYear: workshopList?.monthyear,
            place: workshopList?.place,
            typeOfworkshop: workshopList?.workshoptype,
          }}
          validationSchema={workCreateSchema}
          onSubmit={(values) => {
            updateWorkshopDetails(ProfileId, values, state).then((data) => {
              if (data === true) {
                openSnackbar(
                  workshopList?.clientID
                    ? "Workshops updated successfully"
                    : "Workshops created successfully"
                );
                loadWorkshopInfo();
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
                  <label
                    htmlFor="Work Shop"
                    css={css`
                      font-size: 14px;
                      display: block;
                      color: ${COLORS.BLACK};
                      .errorBorder {
                        border-color: ${COLORS.RED};
                      }
                    `}
                  >
                    Workshop Name
                    <select
                      name="typeOfWorkshopname"
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                      {wshopList &&
                        wshopList.map((opt) => (
                          <option
                            key={opt}
                            value={
                              values.typeOfWorkshopname === opt
                                ? values.typeOfWorkshopname
                                : opt
                            }
                            selected={
                              values.typeOfWorkshopname === opt
                                ? values.typeOfWorkshopname
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
                    label="Organized By"
                    type="text"
                    name="orgnizedBy"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.orgnizedBy}
                    placeholder="Organized By"
                    css={
                      errors.orgnizedBy &&
                      touched.orgnizedBy &&
                      errors.orgnizedBy &&
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
                    label="Duration"
                    type="text"
                    name="duration"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.duration}
                    placeholder="Duration"
                    css={
                      errors.duration &&
                      touched.duration &&
                      errors.duration &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
                <div className="w-6/12 float-left">
                  <FormInput
                    label="Workshop Month & Year"
                    type="date"
                    name="monYear"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.monYear}
                    placeholder="Workshop Month & Year"
                    css={
                      errors.monYear &&
                      touched.monYear &&
                      errors.monYear &&
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
                    label="Place"
                    type="text"
                    name="place"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.place}
                    placeholder="Place"
                    css={
                      errors.place &&
                      touched.place &&
                      errors.place &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
                <div className="w-6/12 float-left">
                  <label
                    htmlFor="Type Of Workshop"
                    css={css`
                      font-size: 14px;
                      display: block;
                      color: ${COLORS.BLACK};
                      .errorBorder {
                        border-color: ${COLORS.RED};
                      }
                    `}
                  >
                    Workshop Type
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="typeOfworkshop"
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
                              values.typeOfworkshop === opt
                                ? values.typeOfworkshop
                                : opt
                            }
                            selected={
                              values.typeOfworkshop === opt
                                ? values.typeOfworkshop
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

              <div className="float-right">
                <button
                  type="submit"
                  className="bg-green-400 px-3 py-2 rounded text-white"
                >
                  {workshopList?.clientID
                    ? "Update Workshop "
                    : "Save Workshop"}
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
export default WorkshopModal;
