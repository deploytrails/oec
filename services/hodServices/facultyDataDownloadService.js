import fetch from "cross-fetch";

export const getPublicationData = async (departmentID, operation) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/${operation}?departmentID=${departmentID}`,

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
