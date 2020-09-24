import fetch from "cross-fetch";

export const getAttendanceList = async (facultyId, selectedDate, operation) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AttendanceServletInitial`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          facultyId,
          selectedDate,
          operation,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAttendanceListById = async (employeeID, operation) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AttendanceServlet?employeeID=${employeeID}&operation=${operation}`,
      {
        method: "POST",
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
