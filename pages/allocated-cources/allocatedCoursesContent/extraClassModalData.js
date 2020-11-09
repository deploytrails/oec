import React, { useState, useEffect } from "react";
import * as TABLE from "../../../components/dashboards/styles/table.styles";


const ExtraClassModelData = ({ activeTabData, FacultyId }) => {
 
  return (
    <React.Fragment>
      
        <div>
          <label>
            <b>Course Code:</b>
          </label>
          <span>&nbsp;{activeTabData[1].courseCode}</span>
          <br></br>
          <label>
            <b>Course Name:</b>
          </label>
          <span>&nbsp;{activeTabData[1].courseName}</span>
          <br></br>
          <div className="float-right">
               <input
                 type="date"
                 placeholder="Enter Date"
               />
                 </div>
        </div>
     
    </React.Fragment>
  );
};

export default ExtraClassModelData;
