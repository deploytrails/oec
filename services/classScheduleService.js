import fetch from "cross-fetch";

export const getClassScheduleData = async (facultyID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/ClassScheduleServlet?employeeid1=${facultyID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getClassScheduleDataDayWise = async (facultyID,startdate) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/ClassScheduleServlet?employeeid1=${facultyID}&startdate=${startdate}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const finaldata = {"facTimeTableDetails":data};
    return finaldata;
  } catch (error) {
    console.log(error);
  }
};
