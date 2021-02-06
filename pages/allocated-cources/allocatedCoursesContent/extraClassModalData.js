import React, { useState, useEffect } from "react";
import * as TABLE from "../../../components/dashboards/styles/table.styles";
import { getAllocatedPeriods, saveExtraClasses } from "../../../services/allocateServices";

const ExtraClassModelData = ({ activeTabData, FacultyId }) => {

  const [periodsList, setPeriodsList] = useState([]);
  const [filterIDs, setFilterIds] = useState([]);
  const [filteredPeriods, setFilteredPeriods] = useState([]);

  const getAllocatedPeriodsData = async (semesterId, date, courseId, FacultyID, section) => {
    const data = await getAllocatedPeriods(semesterId, date, courseId, FacultyID, section);
    setPeriodsList(data?.PeriodsList);
  };

  useEffect(() => {
    getAllocatedPeriodsData("20196101014224570834265", '2021-02-03', '201961010181720351491670', '64D4589B8B6B11E98B09F5D4FE0AE507', 'A');
  }, []);

  const selectedPeriod = (e) => {
    const targetCheck = e.target.checked;

    if (!targetCheck) {
      selectCheck(e.target.value);
    } else {
      deSelectCheck(e.target.value);
    }
    console.log("Selected Classes: " + filterIDs);
  }

  const saveExtraClassesData = async (roomId, facultyID,period, selectedDate) => {
    const data = await saveExtraClasses(roomId, facultyID,period, selectedDate);
   
  };

  const saveClasses = () => {
    var result = periodsList.filter(function (item) {
      return filterIDs.indexOf(item.periodId) !== -1;
    });
    console.log("Final object: " + result[0].periodId)
    
    saveExtraClassesData(
      "201961253159478881162",
      "64D4589B8B6B11E98B09F5D4FE0AE507",
      result,
      "2021-02-03");
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
          id={period.periodId}
          value={period.periodId}
          onChange={(e) => selectedPeriod(e)} />
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
