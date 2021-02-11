import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import { Formik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useSnackbar } from "react-simple-snackbar";
import { COLORS } from "../../../constants";
import * as STYLES from "../../../components/General/modalStyles";
import FormInput from "../../General/formInput";
import { updatePaperPublicationsDetails } from "../../../services/profileService";
import moment from "moment";

const JournalPublicationModal = ({ openModal, journalList, loadJournalPaperInfo }) => {
  const ProfileId = Cookies.get("employeeID");
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const journalSchema = Yup.object().shape({
    typeOfAuthor: Yup.string().required(),
    titlePublication: Yup.string().required(),
    journalName: Yup.string().required(),
    typeOfPublication: Yup.string().required()
  });
  const listTypes = ["Choose your option", "National", "International"];
  const authorList = ["Choose your option", "Author", "Co-Author"];
  const issueList = ["Choose your option", "SCOPUS", "WOS","ICI","UGC"];

  const submitJournalPub = async (values) => {
    console.log("values",values);
    console.log("profileid",ProfileId);
    saveJournalPubDetails(values);
  }

  const saveJournalPubDetails = async(values) => {
    const cData = await updatePaperPublicationsDetails(ProfileId,values);
    console.log(cData);
    if (cData) {
      openSnackbar(
        journalList?.paperPublicationID
          ? "Book Publications updated successfully"
          : "Book Publications created successfully"
      );
      loadJournalPaperInfo();
      openModal();
       }
    }


  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>Journal Publication Details</STYLES.PopupTitle>

        <Formik
          initialValues={{
            paperID: journalList?.paperPublicationID, 
            typeOfAuthor: journalList?.authorCoAuthor,
            titlePublication: journalList?.publicationTitle,
            journalName: journalList?.journalName,
            typeOfPublication: journalList?.publicationType,
            pageNos: journalList?.pageNos,
            issnNo: journalList?.issnNo,
            typeOfissue: journalList?.issueType,
            issueNo: journalList?.issueNo,
            monYear:journalList?.publicationMonthYear,
            volumeNo: journalList?.volumeNo,
            impactFactor: journalList?.impactFactor,
            Hindex: journalList?.hindex
          }}
          validationSchema={journalSchema}
          onSubmit={submitJournalPub}
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
                    htmlFor="Author / Co-Author"
                    css={css`
                      font-size: 14px;
                      display: block;
                      color: ${COLORS.BLACK};
                      .errorBorder {
                        border-color: ${COLORS.RED};
                      }
                    `}
                  >
                    Author / Co-Author
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="typeOfAuthor"
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
                      {authorList &&
                        authorList.map((opt) => (
                          <option
                            key={opt}
                            value={
                              values.typeOfAuthor === opt
                                ? values.typeOfAuthor
                                : opt
                            }
                            selected={
                              values.typeOfAuthor === opt
                                ? values.typeOfAuthor
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
                    label="Paper Title"
                    type="text"
                    name="titlePublication"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.titlePublication}
                    placeholder="Paper Title"
                    css={
                      errors.titlePublication &&
                      touched.titlePublication &&
                      errors.titlePublication &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
               
              </div>

              <div className="clearfix mb-3">

               <div className="w-6/12 float-left">
                  <FormInput
                    label="Journal Title"
                    type="text"
                    name="journalName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.journalName}
                    placeholder="Full Journal Title"
                    css={
                      errors.journalName &&
                      touched.journalName &&
                      errors.journalName &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>    
               
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
                      name="typeOfPublication"
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
                              values.typeOfPublication === opt
                                ? values.typeOfPublication
                                : opt
                            }
                            selected={
                              values.typeOfPublication === opt
                                ? values.typeOfPublication
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


                <div className="w-6/12 float-left pr-2">
                  <FormInput
                    label="Page Nos."
                    type="text"
                    name="pageNos"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pageNos}
                    placeholder="Page Nos."
                    css={
                      errors.pageNos &&
                      touched.pageNos &&
                      errors.pageNos &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>
              

              
                <div className="w-6/12 float-left pr-2">
                  <FormInput
                    label="ISSN Number"
                    type="text"
                    name="issnNo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.issnNo}
                    placeholder="ISSN Number"
                    css={
                      errors.issnNo &&
                      touched.issnNo &&
                      errors.issnNo &&
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
                    label="Publication Date"
                    type="date"
                    name="monYear"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={moment(values.monYear).format("YYYY-MM-DD")}
                    placeholder="From"
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

                <div className="w-6/12 float-left pr-2">
                  <label
                    htmlFor="Issue Type"
                    css={css`
                      font-size: 14px;
                      display: block;
                      color: ${COLORS.BLACK};
                      .errorBorder {
                        border-color: ${COLORS.RED};
                      }
                    `}
                  >
                   Issue Type
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="typeOfissue"
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
                      {issueList &&
                        issueList.map((opt) => (
                          <option
                            key={opt}
                            value={
                              values.typeOfissue === opt
                                ? values.typeOfissue
                                : opt
                            }
                            selected={
                              values.typeOfissue === opt
                                ? values.typeOfissue
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
                <div className="w-6/12 float-left pr-2">
                  <FormInput
                    label="Issue Number"
                    type="text"
                    name="issueNo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.issueNo}
                    placeholder="Issue Number"
                    css={
                      errors.issueNo &&
                      touched.issueNo &&
                      errors.issueNo &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>

              

            
              <div className="w-6/12 float-left pr-2">
                  <FormInput
                    label="Volume No."
                    type="text"
                    name="volumeNo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.volumeNo}
                    placeholder="Volume No"
                    css={
                      errors.volumeNo &&
                      touched.volumeNo &&
                      errors.volumeNo &&
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
                    label="Impact Factor"
                    type="text"
                    name="impactFactor"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.impactFactor}
                    placeholder="Impact Factor"
                    css={
                      errors.impactFactor &&
                      touched.impactFactor &&
                      errors.impactFactor &&
                      css`
                        border: 1px solid red;
                      `
                    }
                  />
                </div>

                <div className="w-6/12 float-left pr-2">
                  <FormInput
                    label="H-Index"
                    type="text"
                    name="Hindex"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Hindex}
                    placeholder="H Index"
                    css={
                      errors.Hindex &&
                      touched.Hindex &&
                      errors.Hindex &&
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
                  {journalList?.paperPublicationID
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
export default JournalPublicationModal;
