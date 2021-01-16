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

export const getDegreeData = async () => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getDegreeDetails`,
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

export const getAcadmicYearData = async (pogramID, degreeID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getAcadYearDetails?departmentID=${pogramID}&degreeID=${degreeID}`,

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

export const getSemesterData = async (pogramID, degreeID, acadYearID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getSemesterDetails?departmentID=${pogramID}&degreeID=${degreeID}&acadYearID=${acadYearID}`,
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

export const getSectionData = async (semesterID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getSectionsDetails?semesterID=${semesterID}`,
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

//
export const getStudentsData = async (
  semesterID,
  degreeID,
  acadYearID,
  sectionID,
  departmentID
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getStudentsDetails`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          semesterID: semesterID,
          degreeID: degreeID,
          acadYearID: acadYearID,
          sectionID: sectionID,
          departmentID: departmentID,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const insertStudentAttendance = async (profileId, studentdataArray) => {
  try {
    const response = await fetch(`${process.env.APIBaseUrl}faculty/setSaving`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        employeeID: profileId,
        studentDetails: studentdataArray,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
