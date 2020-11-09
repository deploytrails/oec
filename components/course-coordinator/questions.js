import React, { useEffect, useState } from 'react';
import { Formik } from "formik";
import css from "@emotion/css";
import { COLORS } from "../../constants";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import PulseLoader from "react-spinners/PulseLoader";
import { getExamTypeData,getQuestionsData } from "../../services/courceCoordinatorAllocationService";

const Questions = ({ courseData }) => {

    const [questionsData, setQuestionsData] = useState({});
    const [examTypeData, setExamTypeData] = useState({});

    const loadQuestionsData = async (courseCoordintorId,examType) => {
        const questionsData = await getQuestionsData(courseCoordintorId,examType);
        setQuestionsData(questionsData?.Questions);
    };

    const loadExamTypeData = async (courseCode) => {
        const examTypeData = await getExamTypeData(courseCode);
        setExamTypeData(examTypeData?.ExamType);
    };

    useEffect(() => {
        loadExamTypeData(courseData.coursecode, courseData.coordinatorId);
        loadQuestionsData(courseData.coordinatorId,examTypeData.length > 0 ? examTypeData[0].examTypeId:null);
      }, []);

    return (
        <React.Fragment>

        <div>
          <Formik
            initialValues={{
              examType: ""
            }}
          >
            {({ values, errors, touched, handleBlur,handleChange }) => (
              <form>
                <div
                  className="text-sm font-sans"
                  css={css`
                    & > p {
                      display: block;
                      margin-right: 10px;
                    }
                    & > p > span {
                      float: right;
                      width: 35%;
                      color: ${COLORS.BLACK};
                    }
                    & > p > span > svg {
                      margin-right: 4px;
                    }
                  `}
                >
                  <p>
                    <span>
       <label htmlFor="examType" style={{ display: 'block' }}>
        Exam Type
      </label>
      <select
        name="examType"
        value={values.examType}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ display: 'block' }}>
        <option value="" label="Select "  />
        <option value="E13E1F5FD94143C6B1683CA17A5AC5DE" label="MID 1" />
        <option value="AD97F17501B342549441C877CB2313FE" label="MID 2" />
       
      </select>
             <div
                        css={css`
                          position: absolute;
                          right: 10px;
                          top: 70px;
                          font-size: 14px;
                          color: ${COLORS.RED_DARKER};
                        `}
                      >
                        {errors.examType &&
                          touched.examType &&
                          errors.examType}
                      </div>
                    </span>
                  </p>
                </div>
              </form>
            )}
          </Formik>
        </div>

            <TABLE.TableWrapper>
                <TABLE.TableTR>
                    <TABLE.TableTh>Question No</TABLE.TableTh>
                    <TABLE.TableTh>Question sub</TABLE.TableTh>
                    <TABLE.TableTh>Questions</TABLE.TableTh>
                    <TABLE.TableTh>Marks</TABLE.TableTh>
                    <TABLE.TableTh>CO</TABLE.TableTh>
                    <TABLE.TableTh>Bloom Level</TABLE.TableTh>
                    <TABLE.TableTh>Bench Mark</TABLE.TableTh>
                </TABLE.TableTR>

                {questionsData &&
                    questionsData.length &&
                    questionsData.map((question) => (
                        <TABLE.TableTbody key={question?.questionNumber}>
                            {question && question?.noOfQuestions.map((subquestion) => (
                        <TABLE.TableTRR key={subquestion?.questionPaperId}>
                            <TABLE.TableTdd>{question.questionNumber}</TABLE.TableTdd>
                            <TABLE.TableTdd>{subquestion.questionName}</TABLE.TableTdd>
                            <TABLE.TableTdd>{subquestion.questions}</TABLE.TableTdd>
                            <TABLE.TableTdd>{subquestion.marks}</TABLE.TableTdd>
                            <TABLE.TableTdd>{subquestion.courseOutcome}</TABLE.TableTdd>
                            <TABLE.TableTdd>{subquestion.bloomsLevel}</TABLE.TableTdd>
                            <TABLE.TableTdd>{subquestion.benchMark}</TABLE.TableTdd>
                        </TABLE.TableTRR>
                        ))}
                        </TABLE.TableTbody>
                    ))}
               



                               
            </TABLE.TableWrapper>
        </React.Fragment>
    );
}

export default Questions;
