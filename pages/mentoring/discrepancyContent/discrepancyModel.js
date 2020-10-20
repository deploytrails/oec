import React, { useState, useEffect } from "react";
import {
  getSelectedComDetail,
  updateComDetail
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

const DiscrepancyModal = ({ studentEnrollId, closeModal, getStudents }) => {
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
            mentorCommuPrimaryID: isComData?.mentorCommuPrimaryID,
            FacultyName: isComData?.FacultyName,
            studentName: isComData?.studentName,
            commuNo: 3,
            commuDate: isComData?.commuDate,
            commuMode: isComData?.commuMode,
            commuType: isComData?.commuType,
            commuActionItem: isComData?.commuActionItem,
            commuActionStatus: isComData?.commuActionStatus,
            commuDetails: isComData?.commuDetails,
            commuRemarks: isComData?.commuRemarks,
            recordStatus: isComData?.recordStatus
          }}
          validationSchema={comCreateSchema}
          onSubmit={values => {
            console.log(values);
            updateComDetail(
              JSON.stringify(values),
              studentModelData.enrollstudentId,
              "NotRecordSaved",
              ProfileId,
              3,
              "2020-08-03"
            ).then(data => {
              if (data === true) {
                openSnackbar(
                  expList?.workExperienceId
                    ? "Communication has been completed successfully!"
                    : "New communication has been started!"
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
                  <span>Faculty Name</span>
                  <span>{employeeName}</span>
                  <span>Student Name</span>
                  <span>{studentModelData.firstName}</span>
                  <span>Communication No.</span>
                  <span>
                    <FormInput
                      type="number"
                      name="commuNo"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.commuNo}
                      css={
                        errors.commuNo &&
                        touched.commuNo &&
                        errors.commuNo &&
                        css`
                          border: 1px solid red;
                        `
                      }
                    />
                  </span>
                  <span>Date</span>
                  <span>
                    <FormInput
                      type="date"
                      name="commuDate"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={moment(values.commuDate).format("YYYY-MM-DD")}
                      css={
                        errors.commuDate &&
                        touched.commuDate &&
                        errors.commuDate &&
                        css`
                          border: 1px solid red;
                        `
                      }
                    />
                  </span>
                  <span>Communication Mode</span>
                  <span>
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="commuMode"
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
                      {comModeList &&
                        comModeList.map(opt => (
                          <option
                            key={opt}
                            value={
                              values.commuMode === opt ? values.commuMode : opt
                            }
                            selected={
                              values.commuMode === opt ? values.commuMode : opt
                            }
                          >
                            {opt}
                          </option>
                        ))}
                    </select>
                  </span>
                  <span>Communication Type</span>
                  <span>
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="commuType"
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
                      {comTypeList &&
                        comTypeList.map(opt => (
                          <option
                            key={opt}
                            value={
                              values.commuType === opt ? values.commuType : opt
                            }
                            selected={
                              values.commuType === opt ? values.commuType : opt
                            }
                          >
                            {opt}
                          </option>
                        ))}
                    </select>
                  </span>
                  <span>Action Item</span>
                  <span>
                    <FormInput
                      type="text"
                      name="commuActionItem"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.commuActionItem}
                      css={
                        errors.commuActionItem &&
                        touched.commuActionItem &&
                        errors.commuActionItem &&
                        css`
                          border: 1px solid red;
                        `
                      }
                    />
                  </span>
                  <span>Action Item Status</span>
                  <span>
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="commuActionStatus"
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
                      {comActionList &&
                        comActionList.map(opt => (
                          <option
                            key={opt}
                            value={
                              values.commuActionStatus === opt
                                ? values.commuActionStatus
                                : opt
                            }
                            selected={
                              values.commuActionStatus === opt
                                ? values.commuActionStatus
                                : opt
                            }
                          >
                            {opt}
                          </option>
                        ))}
                    </select>
                  </span>
                  <span>Communication Details</span>
                  <span>
                    <FormInput
                      type="text"
                      name="commuDetails"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.commuDetails}
                      css={
                        errors.commuDetails &&
                        touched.commuDetails &&
                        errors.commuDetails &&
                        css`
                          border: 1px solid red;
                        `
                      }
                    />
                  </span>
                  <span>Remarks</span>
                  <span>
                    <FormInput
                      type="text"
                      name="commuRemarks"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.commuRemarks}
                    />
                  </span>
                  <span></span>
                  <span>
                    <button
                      type="submit"
                      className="bg-green-400 px-3 py-2 rounded text-white float-right"
                    >
                      {isComData?.mentorCommuPrimaryID
                        ? "Update Communication Details"
                        : " Save Communication Details"}
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
