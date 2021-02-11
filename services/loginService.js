import fetch from "cross-fetch";

export const LoginService = async ({ username, password, operation }) => {
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

//change password
export const changePasswordService = async ({
  changeUserID,
  changePasswordOld,
  changePasswordNew,
  confirmPasswordNew,
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
          changeUserID,
          changePasswordOld,
          changePasswordNew,
          confirmPasswordNew,
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

//forgot password
export const ResetPassword = async ({ email, operation }) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/LoginServlet`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
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
