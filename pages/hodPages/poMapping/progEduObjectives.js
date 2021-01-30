import React, { useState,useEffect } from "react";
import Layout from "../../../components/layout";
import {
  getProgrmPOData,
  getPEOData,
  insertPEOData
} from "../../../services/hodServices/poMappingService";
import {Formik,Form} from 'formik';
import FormikControl from "../../../components/General/FormikControl";
import Cookies from "js-cookie";
import css from "@emotion/css";

const ProgEduObjectives = () => {
  const ProfileId = Cookies.get("employeeID");
  const [isDepartmentData, setIsDepartmentData] = useState([]);
  const [isPeoData, setIsPeoData] = useState([]);
  
  const loadDepartmentData = async () => {
    const cData = await getProgrmPOData('30243CDEFA3641D092CD40B388D78065');
    let departOptions = [];
     const depart = cData?.departmentIdAndName;
      departOptions.push({
        value:depart[0],
        key:depart[1]
      })
      console.log("depart",departOptions);
      setIsDepartmentData(departOptions);
    }

    const initialValues={
      Program:'',
      peoID:'',
      peo1:'',
      peo2:'',
      peo3:'',
      peo4:'',
      peo5:''
      }
    const loadPeoData = async (event,setFieldValue) => {
      const cData = await getPEOData(event.target.value);
      console.log(cData);
      setIsPeoData(cData);
      setFieldValue('peo1', cData?.peo1);
      setFieldValue('peo2', cData?.peo2);
      setFieldValue('peo3', cData?.peo3);
      setFieldValue('peo4', cData?.peo4);
      setFieldValue('peo5', cData?.peo5);     

    }
      const onSubmit = async (values) =>{
        console.log("values ",values);
        values.peoID=isPeoData.ID;
        insertPeoData(values);
        
      }

      const insertPeoData = async(values) =>{
        console.log(values);
        const cData = await insertPEOData(values);
        console.log(cData);
        if(cData?.Save === "Success"){
          alert("Program Educational Objectives data updated successfully");
          //openSnackbar("Vision data updated successfully");
        }
        
      }
    


    useEffect(() => {
      loadDepartmentData();
    }, []);


  return (
    <React.Fragment>
    <Layout>
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      >
      {({
          values,
          handleChange,
          handleBlur,
          setFieldValue
        }) =>( 
      <Form>
      <div className="grid grid-cols-4">
        <div className=" w-screen">
        <FormikControl control = 'select' label='Program' name='Program' 
          options ={isDepartmentData}   onChange={(e) => {
            handleChange(e);
            loadPeoData(e,setFieldValue);
           }}
           />
        </div>
       </div>
        
       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PEO 1' id='peo1' name='peo1' 
        value={values.peo1} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PEO 2' id='peo2' name='peo2' 
        value={values.peo2} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 


       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PEO 3' id='peo3' name='peo3' 
        value={values.peo3} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PEO 4' id='peo4' name='peo4' 
        value={values.peo4} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PEO 5' id='peo5' name='peo5' 
      value={values.peo5}   onChange={handleChange} onBlur={handleBlur}
         />
      </div> 
      
      <br></br>
      <div className=" w-screen">  
          <button css={css`allign:center`} type="submit"
              className="float-left bg-blue-400 block  mx-auto px-2 py-1 rounded">
			       Save
            </button>
            </div>
 
 
       </Form>
       )}
        </Formik>      
      </Layout>
    </React.Fragment>
  );
};


export default ProgEduObjectives;
