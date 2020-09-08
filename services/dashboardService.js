import fetch from "cross-fetch";
const APIBaseUrl = "http://15.206.245.247:8081/";
export const getNonPostedAttendance = async (facultyID) => {
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/DashBoardServlet?FacultyID=${facultyID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
