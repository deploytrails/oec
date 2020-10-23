import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Cookies from "js-cookie";
import { Formik } from "formik";
import css from "@emotion/css";
import { COLORS } from "../constants";
import * as TABLE from "../components/dashboards/styles/table.styles";
import { getClassScheduleData } from "../services/classScheduleService";
import { getClassScheduleDataDayWise } from "../services/classScheduleService";

const ClassSchedule = () => {

  const [classScheduleData, setClassScheduleData] = useState([]);
  const facultyId = Cookies.get("employeeID");

  const getClassSchedule = async () => {
    const data = await getClassScheduleData(facultyId);
    setClassScheduleData(data);
  };
  const getClassScheduleDayWise = async (startdate) => {
    const data = await getClassScheduleDataDayWise (facultyId,startdate)
    setClassScheduleData(data);
  }

  useEffect(() => {
    getClassSchedule();
  }, []);
  

  const periodList = (period) => {

    let timetabledata  = classScheduleData?.facTimeTableDetails?.timetabledata;

    for(let timedat of timetabledata)
    {
      if(timedat.length==1 && timedat[0][22].includes(period) ){
      return timedat[0][2]+"-"+timedat[0][4]+"-"+timedat[0][6]+"-"+timedat[0][22];
    }
    }

  }

  const timeconvert = (date) => {
    let time = new Date(date);
     let  hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
     let am_pm = time.getHours() >= 12 ? "PM" : "AM";
     hours = hours < 10 ? "0" + hours : hours;
     let minutes = time.getMinutes() < 10 ? "0" + time.getMinutes()
          : time.getMinutes();
      time=hours +":"+ minutes + " "+am_pm;
      return time;    
  }

    
  return (
    <React.Fragment>
      <Layout>

      <div>

      <Formik
              initialValues={{
                classDate: "",
                 }}
                 onSubmit={(values) => {
                  console.log("coming here"+values.classdate);
                  getClassScheduleDayWise(values.classdate);
                 } 
                }

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
                  <label htmlFor="Class Date relative">
                    <input
                      type="text"
                      name="classdate"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Class Date"
                      value={values.classdate}
                      className="block w-full text-black py-2 px-4 box-border mt-4 rounded shadow focus: outline-none"
                      css={
                        errors.classdate &&
                        touched.classdate &&
                        errors.classdate &&
                        css`
                          border: 1px solid ${COLORS.RED};
                        `
                      }
                    />
                    <div
                      css={css`
                        position: absolute;
                        right: 10px;
                        top: 70px;
                        font-size: 14px;
                        color: ${COLORS.RED_DARKER};
                      `}
                    >
                      {errors.classdate && touched.classdate && errors.classdate}
                    </div>
                  </label> 
                  <button
                    type="submit"
                    className="inline-block w-5/12 font-medium  bg-green-600 focus:outline-none py-3 px-4 uppercase rounded shadow-2xl text-white mt-4 hover:bg-gray-700"
                  >
                    {"Submit"}
                  </button>
                  
                  
                  </form>)}
                  </Formik>
      </div>


      <div className="clearfix px-6 pb-6">


        <TABLE.TableWrapper>
        
          <TABLE.TableTR>
            <TABLE.TableTh>Day</TABLE.TableTh>
          {classScheduleData?.facTimeTableDetails?.totalperiods.map((period,index) => (    
		  <TABLE.TableTh key={index}>{period[3]}--{timeconvert(period[1])} -- {timeconvert(period[2])}</TABLE.TableTh>
      ))}
        </TABLE.TableTR>

        {classScheduleData?.facTimeTableDetails?.dayDate.map((classday,index) => (
   			<TABLE.TableTRR key={index}>
                <TABLE.TableTdd>{classday}</TABLE.TableTdd>
                {classScheduleData?.facTimeTableDetails?.totalperiods.map((period,index) => (    
		             <TABLE.TableTdd key={index}>{periodList(period[3])}</TABLE.TableTdd>
                  ))}
        </TABLE.TableTRR>	  
		    ))}
        
         
          </TABLE.TableWrapper>
        
       </div>
      </Layout>
    </React.Fragment>
  );
};

export default ClassSchedule;
