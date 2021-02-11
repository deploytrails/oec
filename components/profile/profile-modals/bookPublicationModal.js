import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import { Formik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useSnackbar } from "react-simple-snackbar";
import { COLORS } from "../../../constants";
import * as STYLES from "../../../components/General/modalStyles";
import FormInput from "../../General/formInput";
import { updateBookPublicationsDetails } from "../../../services/profileService";

const BookPublicationModal = ({ openModal, bookList, loadBookPubInfo }) => {
  const ProfileId = Cookies.get("employeeID");
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const bookCreateSchema = Yup.object().shape({
    bookTitlePublication: Yup.string().required(),
    bookPublisherName: Yup.string().required(),
    bookPublicationType: Yup.string().required(),
    isbn: Yup.string().required(),
    bookyear: Yup.string().required(),
  });
  let state = "forBooksInsert";
  const listTypes = ["Choose your option", "National", "International"];

  const submitBookPub = async (values) => {
    console.log("values",values);
    console.log("profileid",ProfileId);
    saveBookPubDetails(values);
  }

  const saveBookPubDetails = async(values) => {
    const cData = await updateBookPublicationsDetails(ProfileId,values,state);
    console.log(cData);
    if (cData) {
      openSnackbar(
        bookList?.bookPublicationID
          ? "Book Publications updated successfully"
          : "Book Publications created successfully"
      );
      loadBookPubInfo();
      openModal();
       }
    }


  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>Book Publication Details</STYLES.PopupTitle>

        <Formik
          initialValues={{
            bookID: bookList?.bookPublicationID,
            bookTitlePublication: bookList?.bookTitle,
            bookPublisherName: bookList?.publisherName,
            bookPublicationType: bookList?.bookPublicationType,
            isbn: bookList?.isbnNo,
            bookyear: bookList?.bookPublicationYear,
          }}
          validationSchema={bookCreateSchema}
          onSubmit={submitBookPub}
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
                    label="Book Title"
                    type="text"
                    name="bookTitlePublication"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bookTitlePublication}
                    placeholder="Book Title"
                    css={
                      errors.bookTitlePublication &&
                      touched.bookTitlePublication &&
                      errors.bookTitlePublication &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
                <div className="w-6/12 float-left">
                  <FormInput
                    label="Publisher Name"
                    type="text"
                    name="bookPublisherName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bookPublisherName}
                    placeholder="Publisher Name"
                    css={
                      errors.bookPublisherName &&
                      touched.bookPublisherName &&
                      errors.bookPublisherName &&
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
                    htmlFor="Publication Type"
                    css={css`
                      font-size: 14px;
                      display: block;
                      color: ${COLORS.BLACK};
                      .errorBorder {
                        border-color: ${COLORS.RED};
                      }
                    `}
                  >
                    Publication Type
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="bookPublicationType"
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
                              values.bookPublicationType === opt
                                ? values.bookPublicationType
                                : opt
                            }
                            selected={
                              values.bookPublicationType === opt
                                ? values.bookPublicationType
                                : opt
                            }
                          >
                            {opt}
                          </option>
                        ))}
                    </select>
                  </label>
                </div>

                <div className="w-6/12 float-left pr-2">
                  <FormInput
                    label="ISBN"
                    type="text"
                    name="isbn"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.isbn}
                    placeholder="ISBN"
                    css={
                      errors.isbn &&
                      touched.isbn &&
                      errors.isbn &&
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
                    label="Year"
                    type="text"
                    name="bookyear"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bookyear}
                    placeholder="Year"
                    css={
                      errors.bookyear &&
                      touched.bookyear &&
                      errors.bookyear &&
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
                  {bookList?.bookPublicationID
                    ? "Update Book Publications"
                    : "Save Book Publications"}
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
export default BookPublicationModal;
