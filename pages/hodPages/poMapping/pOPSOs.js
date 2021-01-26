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

  const loadPoPSoData = async (event) => {
    const cData = await getPoPsoData(event.target.value);
    console.log(cData);
    setIsPoPsoData(cData);
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
        values.po1=isPoPsoData.po1;
        values.po2=isPoPsoData.po2;
        values.po3=isPoPsoData.po3;
        values.po4=isPoPsoData.po4;
        values.po5=isPoPsoData.po5;
        values.po6=isPoPsoData.po5;
        values.po7=isPoPsoData.po7;
        values.po8=isPoPsoData.po8;
        values.po9=isPoPsoData.po9;
        values.po10=isPoPsoData.po10;
        values.po11=isPoPsoData.po11;
        values.po12=isPoPsoData.po12;
        values.pso1=isPoPsoData.pSo1;
        values.pso2=isPoPsoData.pSo2;
        values.pso3=isPoPsoData.pSo3;
        insertPoPsoData(values);
      }

      const insertPoPsoData =  async(values) => {
        console.log("values",values)
        const cData = await insertPoPSoData(values);
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
          handleBlur
        }) =>( 
      <Form>
      <div className="grid grid-cols-4">
        <div className=" w-screen">
        <FormikControl control = 'select' label='Program' name='Program' 
          options ={isDepartmentData} 
           onChange={(e) => {
            handleChange(e);
            loadPoPSoData(e);
           }}
           />
        </div>
       </div>

        <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 1' id='po1' name='po1' 
        value={isPoPsoData?.po1} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 2' id='po2' name='po2' 
        value={isPoPsoData?.po2} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 


       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 3' id='po3' name='po3' 
        value={isPoPsoData?.po3} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 4' id='po4' name='po4' 
        value={isPoPsoData?.po4} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 5' id='po5' name='po5' 
      value={isPoPsoData?.po5}   onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 6' id='po6' name='po6' 
      value={isPoPsoData?.po6}   onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 7' id='po7' name='po7' 
       value={isPoPsoData?.po7}  onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 8' id='po8' name='po8' 
       value={isPoPsoData?.po8}  onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 9' id='po9' name='po9' 
        value={isPoPsoData?.po9} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

       <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 10' id='po10' name='po10' 
        value={isPoPsoData?.po10} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 


      <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 11' id='po11' name='po11' 
        value={isPoPsoData?.po11} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

      <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PO 12' id='po12' name='po12' 
        value={isPoPsoData?.po12} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

      <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PSO 1' id='pso1' name='pso1' 
       value={isPoPsoData?.pSo1}  onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

      <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PSO 2' id='pso2' name='pso2' 
        value={isPoPsoData?.pSo2} onChange={handleChange} onBlur={handleBlur}
         />
      </div> 

      <br></br>  
      <div className="w-screen">
      <FormikControl control = 'textarea' label='PSO 3' id='pso3' name='pso3' 
        value={isPoPsoData?.pSo3} onChange={handleChange} onBlur={handleBlur}
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
