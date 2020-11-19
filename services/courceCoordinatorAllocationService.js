import fetch from "cross-fetch";

export const getCoursedData = async FacultyID => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/CourseCoordinatorServlet?FacultyID=${FacultyID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getSyllabusData = async (courseCode, courseCoordintorId) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/CourseCoordinatorServlet/ForGetUnitsTpoics?coursecode=${courseCode}&coordinatorId=${courseCoordintorId}&options=ForGetUnitsTpoics`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getExamTypeData = async (courseCode) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/CourseCoordinatorServlet/examType?coursecode=${courseCode}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionsData = async (courseCoordintorId, examTypeId) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/CourseCoordinatorServlet/getQuestions?courseCoordinatorId=${courseCoordintorId}&examTypeId=${examTypeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getCopoMappings = async (coursecode, facultyID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/CourseCoordinatorServlet/ForGetPso?coursecode=${coursecode}&FacultyID=${facultyID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
