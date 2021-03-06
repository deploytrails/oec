import React, { useState,useEffect } from "react";
import Layout from "../../../components/layout";
import {
  getProgrmPOData,
  getPoPsoData,
  insertPoPSoData
} from "../../../services/hodServices/poMappingService";
import {Formik,Form} from 'formik';
import FormikControl from "../../../components/General/FormikControl";
import Cookies from "js-cookie";
import css from "@emotion/css";


const POPSOs = () => {
  const ProfileId = Cookies.get("employeeID");
  const [isDepartmentData, setIsDepartmentData] = useState([]);
  const [isPoPsoData, setIsPoPsoData] = useState([]);

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

  const loadPoPSoData = async (event,setFieldValue) => {
    const cData = await getPoPsoData(event.target.value);
    console.log(cData);
    setIsPoPsoData(cData);
    setFieldValue('po1', cData?.po1);
    setFieldValue('po2', cData?.po2);
    setFieldValue('po3', cData?.po3);
    setFieldValue('po4', cData?.po4);
    setFieldValue('po5', cData?.po5);
    setFieldValue('po6', cData?.po6);
    setFieldValue('po7', cData?.po7);
    setFieldValue('po8', cData?.po8);
    setFieldValue('po9', cData?.po9);
    setFieldValue('po10', cData?.po10);
    setFieldValue('po11', cData?.po11);
    setFieldValue('po12', cData?.po12);
    setFieldValue('pso1', cData?.pSo1);
    setFieldValue('pso2', cData?.pSo2);
    setFieldValue('pso3', cData?.pSo3);  

  }

    const initialValues={
      Program:'',
      popsoID:'',
      po1:'',
      po2:'',
      po3:'',
      po4:'',
      po5:'',
      po6:'',
      po7:'',
      po8:'',
      po9:'',
      po10:'',
      po11:'',
      po12:'',
      pso1:'',
      pso2:'',
      pso3:'',
      }

      const onSubmit = async (values) =>{
        console.log("values ",values);
        values.popsoID=isPoPsoData.popsoDataID;
        insertPoPsoData(values);
      }

      const insertPoPsoData =  async(values) => {
        console.log("values",values)
        const cData = await insertPoPSoData(values);
        console.log("output",cData);
        if(cData?.Save === "Success"){
          alert("Program Outcomes & program Specific Outcomes data updated successfully");
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
          options ={isDepartmentData} 
           onChange={(e) => {
            handleChange(e);
            loadPoPSoData(e,setFieldValue);
           }}
           />
        </div>
       </div>

        <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 1' id='po1' name='po1' 
        value={values.po1} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 2' id='po2' name='po2' 
        value={values.po2} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 


       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 3' id='po3' name='po3' 
        value={values.po3} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 4' id='po4' name='po4' 
        value={values.po4} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 5' id='po5' name='po5' 
      value={values.po5}   onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 6' id='po6' name='po6' 
      value={values.po6}   onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 7' id='po7' name='po7' 
       value={values.po7}  onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 8' id='po8' name='po8' 
       value={values.po8}  onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 9' id='po9' name='po9' 
        value={values.po9} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 10' id='po10' name='po10' 
        value={values.po10} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 


      <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 11' id='po11' name='po11' 
        value={values.po11} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

      <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 12' id='po12' name='po12' 
        value={values.po12} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

      <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PSO 1' id='pso1' name='pso1' 
       value={values.pso1}  onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

      <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PSO 2' id='pso2' name='pso2' 
        value={values.pso2} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

      <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PSO 3' id='pso3' name='pso3' 
        value={values.pso3} onChange={handleChange} onBlur={handleBlur}
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

export default POPSOs;
