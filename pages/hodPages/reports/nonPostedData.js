import React, { useState } from "react";
import Layout from "../../../components/layout";
import moment from "moment";
import Cookies from "js-cookie";



const NonPostedData = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [disable,setDisable]=useState(true);
  const deptId = Cookies.get("departId");
  const handleEndate = (e) => {
    if(startDate!=""){
      setEndDate(e.target.value)
      setDisable(false);
    }  
  }
  const handleStartDate = (e) => {
    if(endDate!=""){
      setStartDate(e.target.value);
      setDisable(false);
    }
   
  }
  const handleDepartmentNonPostedData = (e) => {
    // let stddate=moment(startDate).format("DD-MM-yyyy");
    // let edate=moment(endDate).format("DD-MM-yyyy");
    window.open("http://15.206.189.30:8081/faculty/getNonPosteddata?fromDate=" + startDate + "&departmentID=" + deptId + "&toDate=" + endDate);

  }
  return (
    <React.Fragment>
      <Layout>
        <div>DepartmentWise Faulty Non Posted Attendance Details Report</div>
        <React.Fragment>
          <b> Start Date</b>
          <input
            type="date"
            name="startDate"
            //value={moment(startDate).format("YYYY-MM-DD")}
            onChange={(event) => handleStartDate(event)}
            placeholder="Start Date"
            className="block w-5/12 text-black py-2 px-4 box-border  float-right mt-4 rounded shadow focus: outline-none"
          />
          <b>End Date</b>
          <input
            type="date"
            name="endDate"
            placeholder="End Date"
            onChange={(event) => handleEndate(event)}
            className="block w-5/12 text-black py-2 px-4 box-border  float-right mt-4 rounded shadow focus: outline-none"
          />

          {startDate!="" && endDate!="" &&
            <button
              type="button"
              className="bg-green-400 block  mx-auto px-2 py-1 rounded mb-2"
              onClick={(event) => handleDepartmentNonPostedData(event)}
              disabled={disable}
            >
              Download
                                    </button>
          }
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

export default NonPostedData;
