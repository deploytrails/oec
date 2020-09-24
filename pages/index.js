import React, { useState } from "react";
import css from "@emotion/css";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { COLORS } from "../constants";
import { LoginService } from "../services/loginService";
import PulseLoader from "react-spinners/PulseLoader";
import ChangePassword from "../components/modals/changePassword";
import ForgotPassword from "../components/modals/forgotPassword";

const Home = () => {
  const logoImage = `${process.env.APIBaseUrl}faculty/images/png.png`;
  const router = useRouter();
  const [isLoginData, setIsLoginData] = useState();
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isChangePass, setIsChangePass] = useState(false);
  const [isForgotPass, setIsForgotPass] = useState(false);

  //YUP validation schema
  const loginSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    operation: Yup.string(),
  });

  console.log(process.env.PORT);
  //store login data and to redirect dashboard
  const storeLoginData = (data) => {
    setIsLoginData(data);
    if (data) {
      Cookies.set("loggedUserStatus", data?.departmentId);
      Cookies.set("userName", data?.employeeName);
      Cookies.set("employeeID", data?.employeeID);
      Cookies.set("departId", data.departmentId);
    }
    if (data?.status === "loggedin") {
      router.push("/dashboard");
      setIsLoader(false);
    }
    if (data?.status === "User ID or Password is incorrect") {
      setIsError(true);
      setIsLoader(false);
    }
    console.log("LoginData", data);
  };

  //open changepass modal
  const openChangePassModal = () => {
    setIsChangePass(!isChangePass);
  };

  //open forgot modal
  const openForgotPassModal = () => {
    setIsForgotPass(!isForgotPass);
  };

  return (
    <React.Fragment>
      <section
        className="h-screen block clearfix"
        css={css`
          background: #9053c7;
          background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
          background: -o-linear-gradient(-135deg, #c850c0, #4158d0);
          background: -moz-linear-gradient(-135deg, #c850c0, #4158d0);
          background: linear-gradient(-135deg, #c850c0, #4158d0);
        `}
      >
        <div className="w-6/12 float-left h-screen bg-white relative">
          <div
            className="block m-auto"
            css={css`
              position: absolute;
              top: 50%;
              left: 50%;
              -webkit-transform: translate(-50%, -50%);
              -moz-transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
            `}
          >
            <img
              src={logoImage}
              alt="Annamachary Educational trust"
              title="Annamachary Educational trust"
              className="lazyload block m-auto"
            />
            <h1 className="font-sans text-md font-bold">
              Annamachary Educational Trust
            </h1>
          </div>
        </div>
        <div className="w-6/12 float-right h-screen relative">
          <div
            css={css`
              position: absolute;
              width: 360px;
              top: 50%;
              left: 50%;
              -webkit-transform: translate(-50%, -50%);
              -moz-transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
            `}
          >
            <h3 className="text-3xl font-bold font-sans text-white">
              Faculty Login
            </h3>
            {/*Login Form Statrts */}
            <Formik
              initialValues={{
                username: "",
                password: "",
                operation: "login",
              }}
              validationSchema={loginSchema}
              onSubmit={(values) => {
                setIsLoader(true);
                LoginService(values).then((data) => {
                  storeLoginData(data);
                });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <label htmlFor="username relative">
                    <input
                      type="text"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Username"
                      value={values.username}
                      className="block w-full text-black py-2 px-4 box-border mt-4 rounded shadow focus: outline-none"
                      css={
                        errors.username &&
                        touched.username &&
                        errors.username &&
                        css`
                          border: 1px solid ${COLORS.RED};
                        `
                      }
                    />
                    <div
                      css={css`
                        position: absolute;
                        right: 10px;
                        top: 70px;
                        font-size: 14px;
                        color: ${COLORS.RED_DARKER};
                      `}
                    >
                      {errors.username && touched.username && errors.username}
                    </div>
                  </label>

                  <label htmlFor="password relative block">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className="block w-full text-black py-2 px-4 box-border mt-4 rounded shadow focus: outline-none"
                      css={
                        errors.password &&
                        touched.password &&
                        errors.password &&
                        css`
                          border: 1px solid ${COLORS.RED};
                        `
                      }
                    />
                    <div
                      css={css`
                        position: absolute;
                        right: 10px;
                        top: 130px;
                        font-size: 14px;
                        color: ${COLORS.RED_DARKER};
                      `}
                    >
                      {errors.password && touched.password && errors.password}
                    </div>
                  </label>
                  <button
                    type="submit"
                    className="inline-block w-5/12 font-medium  bg-green-600 focus:outline-none py-3 px-4 uppercase rounded shadow-2xl text-white mt-4 hover:bg-gray-700"
                  >
                    {isLoader ? <PulseLoader size="7" color="#fff" /> : "Login"}
                  </button>
                  <div
                    className="inline-block float-right"
                    css={css`
                      margin-top: 10px;
                      & > button {
                        font-weight: 600;
                        font-size: 14px;
                        padding-top: 4px;
                        color: white;
                        text-align: right;
                        display: block;
                      }
                    `}
                  >
                    <button
                      type="button"
                      className="focus:outline-none"
                      onClick={openChangePassModal}
                    >
                      Change Password ?
                    </button>
                    <button
                      type="button"
                      className="focus:outline-none"
                      onClick={openForgotPassModal}
                    >
                      Forgot Password ?
                    </button>
                  </div>
                </form>
              )}
            </Formik>
            {isError && (
              <div className="bg-white p-2 text-left text-red-800 mt-4 rounded shadow-2xl">
                User ID or Password is incorrect
              </div>
            )}
          </div>
        </div>
      </section>
      {isChangePass && (
        <ChangePassword openChangePassModal={openChangePassModal} />
      )}
      {isForgotPass && (
        <ForgotPassword openForgotPassModal={openForgotPassModal} />
      )}
    </React.Fragment>
  );
};

export default Home;
