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

export const getAcademicDetailsData = async (programId,degreeId) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/fetchStudentEnrolledAcadYearDetails?programId=${programId}&degreeId=${degreeId}`,
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

export const getSemsterData = async (acadYear) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/fetchStudentEnrolledSemesterDetails?programId=5C8F976CE5064A9B82556FC8A6A9D0C5&degreeId=20196101013404918557388&acadYearId=${acadYear}`,
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
      `${process.env.APIBaseUrl}faculty/fetchStudentEnrolledSectionDetails?semesterId=${semester}`,
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
      `${process.env.APIBaseUrl}faculty/fetchStudentEnrolledStudentDetails?sectionId=${section}`,
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