import fetch from "cross-fetch";

export const changePasswordMethod = async ({
  username,
  password,
  operation,
}) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/LoginServlet`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          operation,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
