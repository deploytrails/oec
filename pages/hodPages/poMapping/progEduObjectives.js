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
    const loadPeoData = async (event) => {
      const cData = await getPEOData(event.target.value);
      console.log(cData);
      setIsPeoData(cData);     

    }
      const onSubmit = async (values) =>{
        console.log("values ",values);
        values.peoID=isPeoData.ID;
        values.peo1=isPeoData.peo1;
        values.peo2=isPeoData.peo2;
        values.peo3=isPeoData.peo3;
        values.peo4=isPeoData.peo4;
        values.peo5=isPeoData.peo5;
        insertPeoData(values);
        
      }

      const insertPeoData = async(values) =>{
        console.log(values);
        const cData = await insertPEOData(values);
        console.log(cData);
        
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
          handleBlur
        }) =>( 
      <Form>
      <div className="grid grid-cols-4">
        <div className=" w-screen">
        <FormikControl control = 'select' label='Program' name='Program' 
          options ={isDepartmentData}   onChange={(e) => {
            handleChange(e);
            loadPeoData(e);
           }}
           />
        </div>
       </div>
        
       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PEO 1' id='peo1' name='peo1' 
        value={isPeoData?.peo1} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PEO 2' id='peo2' name='peo2' 
        value={isPeoData?.peo2} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 


       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PEO 3' id='peo3' name='peo3' 
        value={isPeoData?.peo3} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PEO 4' id='peo4' name='peo4' 
        value={isPeoData?.peo4} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PEO 5' id='peo5' name='peo5' 
      value={isPeoData?.peo5}   onChange={handleChange} onBlur={handleBlur}
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
