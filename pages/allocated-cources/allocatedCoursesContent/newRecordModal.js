import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import * as STYLES from "../../../components/General/modalStyles";
import css from "@emotion/css";
import CoPoModelData from "./coPoModelData";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../../../components/General/formInput";

const NewRecordModal = ({
  toggleModal,
  activeTab,
  activeTabData,
  FacultyId,
}) => {
  const modalDetailName = [
    "Book Details",
    "Book Details",
    "Reference Link Details",
  ];
  const newRecordButtonText = [
    "Add Reference Book",
    "Add Reference Book",
    "Add Reference Link",
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
    refPriorityNo: Yup.string().required("Required"),
    prefUnit: Yup.string().required("Required"),
    refType: Yup.string().required("Required"),
    refLink: Yup.string().required("Required"),
    linkDesc: Yup.string().required("Required"),
  });

  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>
          {modalDetailName[activeTab]}
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => toggleModal()}
            style={{ float: "right" }}
          />
        </STYLES.PopupTitle>
        {activeTab === 0 && (
          <Formik
            initialValues={{
              bookName: "",
              bookAuthor: "",
            }}
            validationSchema={bookDetailsSchema}
            onSubmit={(values) => {
              //  updatePhdDetails(ProfileId, values).then((data) => {
              //    if (data) {
              //      openSnackbar("Book details added successfully.");
              //    }
              //  });
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
              bookName: "",
              bookAuthor: "",
              prefUnits: "",
            }}
            validationSchema={referenceDetailsSchema}
            onSubmit={(values) => {
              //  updatePhdDetails(ProfileId, values).then((data) => {
              //    if (data) {
              //      openSnackbar("Book details added successfully.");
              //    }
              //  });
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
                    <FormInput
                      label="Preferred Units"
                      type="text"
                      name="prefUnits"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.prefUnits}
                      placeholder="Preferred Units"
                      css={
                        errors.prefUnits &&
                        touched.prefUnits &&
                        errors.prefUnits &&
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
        {activeTab === 2 && (
          <Formik
            initialValues={{
              refPriorityNo: "",
              prefUnit: "",
              refType: "",
              refLink: "",
              linkDesc: "",
            }}
            validationSchema={externalLinkSchema}
            onSubmit={(values) => {
              //  updatePhdDetails(ProfileId, values).then((data) => {
              //    if (data) {
              //      openSnackbar("Book details added successfully.");
              //    }
              //  });
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
export default NewRecordModal;
