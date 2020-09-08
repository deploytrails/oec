import fetch from "cross-fetch";
const APIBaseUrl = "http://15.206.245.247:8081/";

export const changePasswordMethod = async ({
  username,
  password,
  operation,
}) => {
  try {
    const response = await fetch(`${APIBaseUrl}faculty/LoginServlet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        operation,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
