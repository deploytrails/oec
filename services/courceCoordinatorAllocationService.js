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
