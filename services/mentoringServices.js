import fetch from "cross-fetch";

export const getAssignedStudentsList = async facultyID => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AssignedStudentsServletStudentsData`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          facultyID
        })
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getStudentProfileData = async enrollID => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AssignedStudentsServletprofile`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          enrollID
        })
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getStudentCourseFacultyDetail = async (
  enrollID,
  sectionID,
  semesterID
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AssignedStudentsServletFacultyCourse`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          enrollID,
          sectionID,
          semesterID
        })
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getStudentDiscrepancyDetail = async enrollID => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AssignedStudentsServletDiscrepancyIssue`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          enrollID
        })
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
