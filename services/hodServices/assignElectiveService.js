import fetch from "cross-fetch";

export const getSemesters = async (departmentId) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getSemesters?departmentID=${departmentId}`,

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

export const getElectiveTypes = async (departmentId, semesterId) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getElectiveTypes?departmentID=${departmentId}&semesterID=${semesterId}`,

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

export const getElectives = async (departmentId, electivesType) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getElectiveCourses?departmentID=${departmentId}&electivesType=${electivesType}`,

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

export const getStudents = async (semesterId, departmentId) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getStudentsFromSemesterAndDepartment?semesterID=${semesterId}&departmentID=${departmentId}`,

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

export const allocateElectives = async (
  semesterId,
  studentList
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/allocateElectives`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          semesterId,
          studentList: studentList,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};