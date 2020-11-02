import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";

const AttendanceDetails = ({ closeAttendDetails, classAttend }) => {
  const [frmValue, setFrmValue] = useState([]);
  const [checkValues, setCheckValues] = useState([]);
  const [filterIDs, setFilterIds] = useState([]);
  const presentIds = [];
  const absentIds = [];


  classAttend.map((item) => {
    presentIds.push(item.roll);
  });

  const selectCheck = (selectedVal) => {
    const indexFound = filterIDs.indexOf(selectedVal);
    const checkSelect = checkValues;
    checkSelect.push(selectedVal);
    setCheckValues(checkSelect);
    if (indexFound > -1) {
      filterIDs.splice(indexFound, 1);
      setFilterIds(filterIDs)
    }
    
    console.log('absentIds', filterIDs)
  };

  const unSelectCheck = (selectedVal) => {
    const indexFound = checkValues.indexOf(selectedVal);
    if (indexFound > -1) {
      checkValues.splice(indexFound, 1);
      setCheckValues(checkValues);
    }
    const idsSelect = presentIds.filter(item => item.indexOf(selectedVal) !== indexFound);
    filterIDs.push(...idsSelect);
    setFilterIds(filterIDs)
    console.log('absentIds', filterIDs)
  };

  
  const checkAttend = (e) => {
    const targetCheck = e.target.checked;
    const targetVal = e.target.value;

    if (targetCheck) {
      selectCheck(targetVal);
      
    } else {
      unSelectCheck(targetVal);
    }

 
    setFrmValue(filterIDs.join("\n"));
  };
  

  useEffect(() => {
    const totalIDS = document.getElementById("attendIds");
    const x = document.querySelectorAll(".atend");
    totalIDS.checked = true;
    let checkState = totalIDS.checked;
    if(checkState === true){
      for(let i = 0; i < x.length; i+=1){
        x[i].checked = true;
      }
    } else{
      for(let i = 0; i < x.length; i+=1){
        x[i].checked = false;
      }
     
    }
    
  });

  return (
    <React.Fragment>
      <div className="w-screen fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-75">
        <div className="w-9/12 absolute right-0 bg-white p-4 h-screen overflow-y-scroll">
          <button
            type="button"
            onClick={closeAttendDetails}
            className=" bg-green-400 px-4 py-1 absolute rounded focus:outline-none font-bold text-sm text-white"
            css={css`
              right: 20px;
            `}
          >
            CLOSE
          </button>
          <h2 className="font-sans text-lg font-bold">
            Attendance Details Page
          </h2>
          <table
            className="block w-full pr-0 mt-4"
            css={css`
              border: 1px solid #ddd;
              & > tr > th {
                border-bottom: 1px solid #ddd;
                width: 200px;
                padding: 6px 0px;
              }
              & > tr > td {
                width: 195px;
                padding: 6px 0px;
                text-align: center;
                font-size: 14px;
              }
              & > tr:nth-of-type(even) {
                background-color: #f5f5f5;
              }
            `}
          >
            <React.Fragment>
              <tr className="block w-full">
                <th>S.No</th>
                <th>Roll No</th>
                <th>Name</th>
                <th>
                  <lable htmlFor="attendIds">
                    <input type="checkbox" name="attendIds" className="attendIds" id="attendIds" />
                  </lable>
                  Attendance
                </th>
                <th>Remarks</th>
              </tr>
              {classAttend &&
                classAttend.map((item, i) => (
                  <tr key={item.enrollstudentId}>
                    <td>{i + 1}</td>
                    <td>{item.roll}</td>
                    <td>{item.firstName}</td>
                    <td>
                    <lable htmlFor={item.enrollstudentId} >
                      <input
                          type="checkbox"
                          className="atend"
                          name={item.enrollstudentId}
                          id={item.enrollstudentId}
                          value={item.roll}
                          onChange={(e) => checkAttend(e)}
                          checked={filterIDs.indexOf(item) !== -1}
                          //checked={checkValues.indexOf(item) === -1}
                          
                        />
                  </lable>
                      
                    </td>
                    <td>
                      <input
                        type="text"
                        className="border py-1 rounded px-2 border-gray-400 focus:outline-none"
                      />
                    </td>
                  </tr>
                ))}
            </React.Fragment>
          </table>

          <div className="clearfix my-4">
            <div className="w-6/12 float-left">
              <h3 className="font-sans font-bold text-red-600">Absentee</h3>
              <label>
                <textarea
                  rows="3"
                  cols="4"
                  id="attendIds"
                  value={frmValue}
                  className="w-full border py-1 rounded px-2 border-gray-400 focus:outline-none resize-none"
                ></textarea>
              </label>
            </div>
            <div className="w-6/12 float-right">
              <div className="pl-4 pt-5">
                <p className="text-sm text-green-600">
                  No of Present : {presentIds.length - filterIDs.length}
                </p>
                <p className="text-sm text-red-600">
                  No of Absent : {filterIDs.length}
                </p>
                <button
                  type="button"
                  className="bg-green-400 py-2 shadow-md px-2 rounded focus:outline-none mt-2 font-bold text-sm text-white"
                >
                  Submit Attendane
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AttendanceDetails;
