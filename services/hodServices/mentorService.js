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

// semesterID,degreeID,acadYearID,sectionID,programID
export const getStudentsData = async () => {
  const dataObj = {
    semesterID: "201961010142243267854922",
    degreeID: "5C8F976CE5064A9B82556FC8A6A9D0C5",
    acadYearID: "201961010429723213238372",
    sectionID: "2019923828268041003620",
    departmentID: "20196101013404918557388",
  };

  const semesterID = "201961010142243267854922";
  const degreeID = "5C8F976CE5064A9B82556FC8A6A9D0C5";
  const acadYearID = "201961010429723213238372";
  const sectionID = "2019923828268041003620";
  const departmentID = "20196101013404918557388";

  const enc = encodeURIComponent(JSON.stringify(dataObj));
  console.log(dataObj.semesterID);
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getStudentsDetails`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          semesterID,
          degreeID,
          acadYearID,
          sectionID,
          departmentID,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
