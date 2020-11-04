import fetch from "cross-fetch";

export const getNotificationData = async (facultyID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/NotificationServlet?FacultyID=${facultyID}`,
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

