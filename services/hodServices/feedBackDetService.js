import fetch from "cross-fetch";

export const getHodFeedBackDetails = async (semesterID, sectionID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getHodFeedBackDetails?semesterID=${semesterID}&sectionID=${sectionID}`,
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

export const getFeedRecDetails = async (
  hodEmployeeID,
  employeeID,
  courseID,
  semesterID,
  sectionID
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getHodRecDetails`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hodEmployeeID,
          employeeID,
          courseID,
          semesterID,
          sectionID,
        }),
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
