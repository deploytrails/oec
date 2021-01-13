import fetch from "cross-fetch";

export const getMentorData = async (facultyID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getMentorList?employeeID=${facultyID}`,

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

export const getUnAssignedStudentsData = async (facultyID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getUnAssignedStudentsDetails?employeeID=${facultyID}`,
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

export const getAssignedStudentsData = async (facultyID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getAssignedStudentsDetails?employeeID=${facultyID}`,
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
