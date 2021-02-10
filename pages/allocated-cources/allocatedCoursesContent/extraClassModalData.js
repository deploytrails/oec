import React, { useState, useEffect } from "react";
import * as TABLE from "../../../components/dashboards/styles/table.styles";
import { getAllocatedPeriods, saveExtraClasses } from "../../../services/allocateServices";

const ExtraClassModelData = ({ activeTabData, FacultyId }) => {

  const [periodsList, setPeriodsList] = useState([]);
  const [filterIDs, setFilterIds] = useState([]);
  const [filteredPeriods, setFilteredPeriods] = useState([]);

  const courseId =activeTabData[1]?.coursePrimaryId;
  const semId =activeTabData[3]?.semesterDetails?.semesterID;
  const sectionId =activeTabData[3]?.semesterSections?.sectionPrimaryId;
  const sectionName=activeTabData[2]?.sectionName;
  const roomId =activeTabData[3]?.room?.roomPrimaryId;
  const classType=activeTabData[1]?.courseType;
  const [updatedDate, setUpdatedDate] =useState('');
  

  const getAllocatedPeriodsData = async (semesterId, date, courseId, FacultyID, section) => {
    const data = await getAllocatedPeriods(semesterId, date, courseId, FacultyID, section);
    setPeriodsList(data?.PeriodsList);
  };

  const selectedPeriod = (e,period) => {
    const targetCheck = e.target.checked;
    if (!targetCheck) {
      selectCheck(e.target.value);
    } else {
      deSelectCheck(e.target.value);
    }
  }

  const dateSelected = (e) => {   
    setUpdatedDate(e.target.value);
    getAllocatedPeriodsData(semId, updatedDate, courseId,FacultyId,sectionName);
  }

  const saveExtraClassesData = async (roomId, facultyID,selectedDate) => {
    let periodsTBPersisted = [];
    filterIDs.map(time => {
      periodsTBPersisted.push({
      semId:semId,
      sectionId:sectionId,
      startTime:time.split("-")[0],
      endTime:time.split("-")[1],
      courseId:courseId,
      classType:classType
      })
    })    
    const data = await saveExtraClasses(roomId, facultyID,periodsTBPersisted, selectedDate);
   
  };

  const saveClasses = () => {
    var result = periodsList.filter(function (item) {
      return filterIDs.indexOf(item.periodId) !== -1;
    });
      
    saveExtraClassesData(roomId,FacultyId,updatedDate);
  }

  const selectCheck = (selectedVal) => {
    const indexFound = filterIDs.indexOf(selectedVal);
    if (indexFound > -1) {
      filterIDs.splice(indexFound, 1);
      setFilterIds(filterIDs);
    }
  };

  const deSelectCheck = (selectedVal) => {
    filterIDs.push(selectedVal);
    setFilterIds(filterIDs);
  };

  const renderSelectItem = (period) => {
    
    return (
      <React.Fragment>
        <input type="checkbox"
          name="extraClsIds"
          className="extraClsIds"
          disabled={period?.semId !== ""} 
          id={period.periodId}
          value={period.startTime+"-"+period.endTime}
          onChange={(e) => selectedPeriod(e,period)} />
        {period.startTime} - {period.endTime}  &nbsp;&nbsp;
      </React.Fragment>
    );

  };

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
            onChange={(e) => dateSelected(e)}
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <div>
        {periodsList &&
          periodsList.map((period) => (
            renderSelectItem(period)
          ))}
      </div>

      <div>
        <button
          onClick={saveClasses}
          type="button"
          className="bg-yellow-400 block  mx-auto px-2 py-1 rounded"
        >Submit</button>
      </div>

    </React.Fragment>
  );
};

export default ExtraClassModelData;
