import React, { useState } from "react";
import Layout from "../../../components/layout";
import moment from "moment";
import Cookies from "js-cookie";

const NonPostedData = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [submitting, setSubmitting] = useState(true);
  const deptId = Cookies.get("departId");
  const handleEndate = (e) => {
    setEndDate(e.target.value);
    setSubmitting(false);
  };
  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };
  const handleDepartmentNonPostedData = (e) => {
    // let stddate=moment(startDate).format("DD-MM-yyyy");
    // let edate=moment(endDate).format("DD-MM-yyyy");
    window.open(
      "http://15.206.189.30:8081/faculty/getNonPosteddata?fromDate=" +
        startDate +
        "&departmentID=" +
        deptId +
        "&toDate=" +
        endDate
    );
  };
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
            onChange={(event) => {
              if (startDate != "") {
                handleEndate(event);
              }
            }}
            className="block w-5/12 text-black py-2 px-4 box-border  float-right mt-4 rounded shadow focus: outline-none"
          />

          <button
            type="button"
            className="bg-green-400 block  mx-auto px-2 py-1 rounded mb-2"
            disabled={submitting}
            onClick={(event) => handleDepartmentNonPostedData(event)}
          >
            Download
          </button>
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

export default NonPostedData;
