import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import * as STYLES from "../../../components/General/modalStyles";
import css from "@emotion/css";
import CoPoModelData from "./coPoModelData";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../../../components/General/formInput";
import {
  updateTextBook,
  updateRefTextBook,
  updateRefLink,
} from "../../../services/allocateServices";
import { useSnackbar } from "react-simple-snackbar";
import { COLORS } from "../../../constants";

const EditRecordModal = ({
  toggleEditModal,
  activeTab,
  activeTabData,
  loadReferenceData,
  unitsData,
}) => {
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const modalDetailName = [
    "Book Details",
    "Book Details",
    "Reference Link Details",
  ];
  const newRecordButtonText = [
    "Update Book",
    "Update Reference Book",
    "Update Reference Link",
  ];
  const bookDetailsSchema = Yup.object().shape({
    bookName: Yup.string().required("Required"),
    bookAuthor: Yup.string().required("Required"),
  });
  const referenceDetailsSchema = Yup.object().shape({
    bookName: Yup.string().required("Required"),
    bookAuthor: Yup.string().required("Required"),
    prefUnits: Yup.string().required("Required"),
  });
  const externalLinkSchema = Yup.object().shape({
    refPriorityNo: Yup.number().required("Required"),
    // prefUnit: Yup.string().required("Required"),
    refType: Yup.string().required("Required"),
    refLink: Yup.string().required("Required"),
    linkDesc: Yup.string().required("Required"),
  });
  useEffect(() => {
    console.log(activeTabData);
    // console.log(courseId);
  }, []);
  const updateTextBookDetails = (values) => {
    updateTextBook(
      activeTabData?.courseBookId,
      values.bookName,
      values.bookAuthor
    ).then((data) => {
      if (data) {
        // console.log(data);
        openSnackbar("Book details updated successfully.");
        toggleEditModal();
        loadReferenceData();
      }
    });
  };

  const updateRefBookDetails = (values) => {
    updateRefTextBook(
      activeTabData?.courseRefBookId,
      values.bookName,
      values.bookAuthor,
      values.prefUnits
    ).then((data) => {
      if (data) {
        // console.log(data);
        openSnackbar("Reference book details updated successfully.");
        toggleEditModal();
        loadReferenceData();
      }
    });
  };

  const updateRefLinkData = (values) => {
    console.log(values);
    updateRefLink(
      activeTabData?.courseResourcesId,
      values.refPriorityNo,
      values.refLink,
      values.linkDesc,
      "",
      values.refType
    ).then((data) => {
      if (data) {
        // console.log(data);
        openSnackbar("Reference link details updated successfully.");
        toggleEditModal();
        loadReferenceData();
      }
    });
  };

  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>
          {modalDetailName[activeTab]}
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => toggleEditModal()}
            style={{ float: "right" }}
          />
        </STYLES.PopupTitle>
        {activeTab === 0 && (
          <Formik
            initialValues={{
              bookName: activeTabData?.bookName,
              bookAuthor: activeTabData?.author,
            }}
            validationSchema={bookDetailsSchema}
            onSubmit={(values) => {
              updateTextBookDetails(values);
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
                      label="Book Name"
                      type="text"
                      name="bookName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.bookName}
                      placeholder="Book Name"
                      css={
                        errors.bookName &&
                        touched.bookName &&
                        errors.bookName &&
                        css`
                          border: 1px solid red;
                        `
                      }
                    />
                  </div>
                  <div className="w-6/12 float-left ">
                    <FormInput
                      label="Book Author"
                      type="text"
                      name="bookAuthor"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.bookAuthor}
                      placeholder="Book Author"
                      css={
                        errors.bookAuthor &&
                        touched.bookAuthor &&
                        errors.bookAuthor &&
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
                    {newRecordButtonText[activeTab]}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        )}
        {activeTab === 1 && (
          <Formik
            initialValues={{
              bookName: activeTabData?.bookName,
              bookAuthor: activeTabData?.author,
              prefUnits: activeTabData?.unitsSelected,
            }}
            validationSchema={referenceDetailsSchema}
            onSubmit={(values) => {
              updateRefBookDetails(values);
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
                      label="Book Name"
                      type="text"
                      name="bookName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.bookName}
                      placeholder="Book Name"
                      css={
                        errors.bookName &&
                        touched.bookName &&
                        errors.bookName &&
                        css`
                          border: 1px solid red;
                        `
                      }
                    />
                  </div>
                  <div className="w-6/12 float-left ">
                    <FormInput
                      label="Book Author"
                      type="text"
                      name="bookAuthor"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.bookAuthor}
                      placeholder="Book Author"
                      css={
                        errors.bookAuthor &&
                        touched.bookAuthor &&
                        errors.bookAuthor &&
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
                      htmlFor="Preferred Units"
                      css={css`
                        font-size: 14px;
                        display: block;
                        color: ${COLORS.BLACK};
                        .errorBorder {
                          border-color: ${COLORS.RED};
                        }
                      `}
                    >
                      Preferred Units
                      <select
                        name="prefUnits"
                        id="prefUnits"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.prefUnits}
                        className="border border-2 border-solid p-2 rounded w-full focus:outline-none"
                        css={
                          errors.prefUnits &&
                          touched.prefUnits &&
                          errors.prefUnits
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
                        <option key="Select Your Option" value="">
                          Select Your Option
                        </option>
                        {unitsData &&
                          unitsData.map((opt) => (
                            <option key={opt.courseunitID} value={opt.cunit}>
                              {opt.cunit}
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
                    {newRecordButtonText[activeTab]}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        )}
        {activeTab === 2 && (
          <Formik
            initialValues={{
              refPriorityNo: activeTabData?.priorityNo,
              refType: activeTabData?.linkType,
              refLink: activeTabData?.link,
              linkDesc: activeTabData?.linkDescription,
            }}
            validationSchema={externalLinkSchema}
            onSubmit={(values) => {
              updateRefLinkData(values);
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
                      label="Reference Priority No."
                      type="text"
                      name="refPriorityNo"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.refPriorityNo}
                      placeholder="Reference Priority No."
                      css={
                        errors.refPriorityNo &&
                        touched.refPriorityNo &&
                        errors.refPriorityNo &&
                        css`
                          border: 1px solid red;
                        `
                      }
                    />
                  </div>
                  <div className="w-6/12 float-left ">
                    <FormInput
                      label="Unit"
                      type="text"
                      name="prefUnit"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.prefUnit}
                      placeholder="Unit"
                      css={
                        errors.prefUnit &&
                        touched.prefUnit &&
                        errors.prefUnit &&
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
                      label="Reference Type"
                      type="text"
                      name="refType"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.refType}
                      placeholder="Reference Type"
                      css={
                        errors.refType &&
                        touched.refType &&
                        errors.refType &&
                        css`
                          border: 1px solid red;
                        `
                      }
                    />
                  </div>
                  <div className="w-6/12 float-left ">
                    <FormInput
                      label="Reference Link"
                      type="text"
                      name="refLink"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.refLink}
                      placeholder="Reference Link"
                      css={
                        errors.refLink &&
                        touched.refLink &&
                        errors.refLink &&
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
                      label="Link Description"
                      type="text"
                      name="linkDesc"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.linkDesc}
                      placeholder="Link Description"
                      css={
                        errors.linkDesc &&
                        touched.linkDesc &&
                        errors.linkDesc &&
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
                    {newRecordButtonText[activeTab]}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        )}
      </STYLES.PopupWrapper>
    </STYLES.PopupMask>
  );
};
export default EditRecordModal;
