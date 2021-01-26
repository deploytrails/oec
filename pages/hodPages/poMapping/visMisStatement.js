import React, { useState,useEffect } from "react";
import Layout from "../../../components/layout";
import {
  getProgrmPOData,
  getVisionMissionPOData,
  insertPOVission
} from "../../../services/hodServices/poMappingService";
import {Formik,Form} from 'formik';
import FormikControl from "../../../components/General/FormikControl";
import Cookies from "js-cookie";
import css from "@emotion/css";

const VisMisStatement = () => { const ProfileId = Cookies.get("employeeID");
const [isDepartmentData, setIsDepartmentData] = useState([]);
const [isVisionMissionData, setIsVisionMissionData] = useState([]);

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

const loadVisionMissionData = async (event) => {
  const cData = await getVisionMissionPOData(event.target.value);
  setIsVisionMissionData(cData);
   }


  const initialValues={
    vmID:'',
    Program:'',
    vision:'',
    mission:''
    }

    const onSubmit = async (values) =>{
      console.log("values ",values);
      values.vmID=isVisionMissionData?.vmDataID;
      values.vision=isVisionMissionData?.vision;
      values.mission=isVisionMissionData?.mission;
      insertPOVisMisData(values);
    }

    const insertPOVisMisData =  async(values) => {
      console.log("values",values)
      const cData = await insertPOVission(values);
      console.log("output",cData);
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
        touched
      }
      ) =>( 
    <Form>
    <div className="grid grid-cols-4">
      <div className=" w-screen">
      <FormikControl control = 'select' label='Program' name='Program' 
        options ={isDepartmentData}  onChange={(e) => {
          handleChange(e);
          loadVisionMissionData(e);
         }}
         />
      </div>
     </div>
      <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='Vision Statement' id='vision' name='vision' 
        value={values.vision} onChange={handleChange} onBlur={handleBlur}
         />
      </div>
     

      <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='Mission Statement' id='misison' name='mission' 
         value={isVisionMissionData?.mission} onChange={handleChange} onBlur={handleBlur}
         />
      </div>
      <br></br>
      <div className=" w-screen">  
          <button css={css`allign:center`} type="submit"
              className="float-left bg-blue-400 block  mx-auto px-2 py-1 rounded">
			       Save Statements
            </button>
            </div>
    


     </Form>
     )}
      </Formik>      
    </Layout>
  </React.Fragment>
);
};

export default VisMisStatement;
