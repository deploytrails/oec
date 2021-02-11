import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import moment from "moment";
import Cookies from "js-cookie";
import Layout from "../../components/layout";
import {
  getMarksByFacultyId,
  getMarksToViewByCourseId,
} from "../../services/marksEntryServices";
import MarksTable from "../../components/marks/marksTable";

const MarksEntry = () => {
  const [marksData, setMarksData] = useState([]);
  const facultyId = Cookies.get("employeeID");
  const examTypes = ["MID 1", "MID 2", "End Test"];

  const getAllMarksEntries = async () => {
    const data = await getMarksByFacultyId(facultyId);
    console.log(data);
    setMarksData(data?.examArray);
  };

  useEffect(() => {
    getAllMarksEntries();
  }, []);

  return (
    <React.Fragment>
      <Layout>
        {examTypes.map((examType) => (
          <React.Fragment>
            <h1 className="w-full block text-white bg-black shadow-lg mb-4 border p-2">
              {examType}
            </h1>
            <MarksTable marksData={marksData} examType={examType}></MarksTable>
          </React.Fragment>
        ))}
      </Layout>
    </React.Fragment>
  );
};

export default MarksEntry;
