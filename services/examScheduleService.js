import fetch from "cross-fetch";

export const getExamDetails = async (FacultyID, state) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/ExamInvigilationServlet?FacultyID=${FacultyID}&state=${state}`,
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
