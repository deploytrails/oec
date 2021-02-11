import fetch from "cross-fetch";

export const getSemesters = async (employeeId) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getHodSemesterDataByEmployeeData?employeeID=${employeeId}`,

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

export const getSections = async (semesterId) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getSectionsData?semesterID=${semesterId}`,

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

export const getSemesterStudents = async (semesterId, sectionId) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getSemesterStudents?semesterID=${semesterId}&sectionID=${sectionId}`,

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

export const insertAllocateToGroup = async (
  studentIdList,
  groupName
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/allocateStudentsToGroup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentIdList: studentIdList,
          groupName,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};