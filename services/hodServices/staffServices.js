import fetch from "cross-fetch";

export const getTeachingStaffData = async (facultyID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getTeachingStaffOfHODEmployee?employeeId=${facultyID}`,
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

export const getNonTeachingStaffData = async (facultyID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getNonTeachingStaffOfHODEmployee?employeeId=${facultyID}`,
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
