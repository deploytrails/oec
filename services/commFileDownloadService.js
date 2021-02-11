import fetch from "cross-fetch";

export const downloadData = async (urlPath) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/` + urlPath,

      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await response.blob();
  } catch (error) {
    console.log(error);
  }
};
