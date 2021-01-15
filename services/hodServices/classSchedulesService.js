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
