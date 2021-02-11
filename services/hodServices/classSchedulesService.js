import fetch from "cross-fetch";

export const getClassSchedule = async (employeeID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getEmployeeTimeTable?employeeID=${employeeID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getTimeTables = async (semesterID, sectionID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getTimeTablesForHOD?semesterID=${semesterID}&sectionID=${sectionID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
