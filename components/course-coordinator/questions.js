import React, { useEffect, useState } from 'react';
 import { Formik, Form, Field, FieldArray } from 'formik';
 import FormInput from "../General/formInput";
import css from "@emotion/css";
import { COLORS } from "../../constants";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import PulseLoader from "react-spinners/PulseLoader";
import { getExamTypeData,getQuestionsData } from "../../services/courceCoordinatorAllocationService";
import * as Yup from "yup";

const Questions = ({ courseData }) => {

    const [questionsData, setQuestionsData] = useState({});
    const [examTypeData, setExamTypeData] = useState({});

    const loadQuestionsData = async (e) => {
        const data = await getQuestionsData(courseData.coordinatorId, e.target.value);
        setQuestionsData(data?.Questions);
        console.log(data?.Questions)
    };

    const loadExamTypeData = async (courseCode) => {
        const examTypeData = await getExamTypeData(courseCode);
        setExamTypeData(examTypeData?.ExamType);
    };

    useEffect(() => {
        loadExamTypeData(courseData.coursecode, courseData.coordinatorId);
       // loadQuestionsData(examTypeData.length > 0 ? examTypeData[0].examTypeId:null);
      }, []);

      const validateSchema = Yup.object().shape({
  friends: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Please enter email"),
        includeAge: Yup.bool(),
        age: Yup.mixed().when("includeAge", {
          is: true,
          then: Yup.number()
            .nullable()
            .required("Age is required")
        })
      })
    )
    .min(1, "Friends is >= 1")
});

    return (
        <React.Fragment>

        <div>
         
       <label htmlFor="examType" style={{ display: 'block' }}>
        Exam Type
      </label>
      <select
        name="examType"
        onChange={(e) => loadQuestionsData(e)}
        style={{ display: 'block' }}>
        <option value="" label="Select "  />
        <option value="E13E1F5FD94143C6B1683CA17A5AC5DE" label="MID 1" />
        <option value="AD97F17501B342549441C877CB2313FE" label="MID 2" />
       
      </select>
           </div> 
<Formik
    enableReinitialize
      initialValues={questionsData}
    //  validationSchema={validateSchema}
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
      >
        {({ values, errors, touched, handleBlur,handleChange, handleSubmit }) => (
      
          <Form onSubmit={handleSubmit}>
             
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
                <FieldArray
                  name="questionsDataArray"
                  render={({ insert, remove, push }) => (
                   <>   
                         
                {values &&
                    values.length &&
                    values.map((question,mainIndex) => (
                        <TABLE.TableTbody key={question?.questionNumber}>
                            {question && question?.noOfQuestions.map((subquestion, subIndex) => (
                        <TABLE.TableTRR key={subquestion?.questionPaperId}>
                            <TABLE.TableTdd>{question.questionNumber}</TABLE.TableTdd>
                            <TABLE.TableTdd>
                             
                                <FormInput
                   
                   type="text"
                   name={`values[${mainIndex}].noOfQuestions[${subIndex}].questionName`}
                  name="questionName'"
                 value={subquestion.questionName}
                    placeholder="Question Name"
                    onChange={handleChange}
                     onBlur={handleBlur}
                    
                  />{subquestion.questionName} :: {values[mainIndex].noOfQuestions[subIndex].questionName}
                                </TABLE.TableTdd>
                            <TABLE.TableTdd>{subquestion.questions}</TABLE.TableTdd>
                            <TABLE.TableTdd>{subquestion.marks}</TABLE.TableTdd>
                            <TABLE.TableTdd>{subquestion.courseOutcome}</TABLE.TableTdd>
                            <TABLE.TableTdd>{subquestion.bloomsLevel}</TABLE.TableTdd>
                            <TABLE.TableTdd>{subquestion.benchMark}</TABLE.TableTdd>
                        </TABLE.TableTRR>
                        ))}
                        
                      
                        </TABLE.TableTbody>
                    ))}
                   </>
                      )}
                /> 
               
          </TABLE.TableWrapper>
          <button type="submit" className="btn btn-block btn-primary">
                  Submit
                </button>
                              </Form>
        )}
    
   </Formik>

           
               
  
        </React.Fragment>
    );
}

export default Questions;
