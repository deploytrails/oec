import fetch from "cross-fetch";

export const getDegreeData = async (facultyID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/fetchStudentEnrolledDegreeDetails`,
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

export const getAcademicDetailsData = async (departmentID,degreeID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/fetchStudentEnrolledAcadYearDetails?departmentID=${departmentID}&degreeID=${degreeID}`,
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

export const getSemsterData = async (degreeID,acadYear) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/fetchStudentEnrolledSemesterDetails?departmentID=20196101013404918557388&degreeID=${degreeID}&acadYearID=${acadYear}`,
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

export const getSectionsData = async (semester) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/fetchStudentEnrolledSectionDetails?semesterID=${semester}`,
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

export const getStudentsData = async (section) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/fetchStudentEnrolledStudentDetails?sectionID=${section}`,
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