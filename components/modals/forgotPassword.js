import React, { useState } from "react";
import css from "@emotion/css";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS } from "../../constants";
import PulseLoader from "react-spinners/PulseLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ResetPassword } from "../../services/loginService";

const ForgotPassword = ({ openForgotPassModal }) => {
  const [isChangeData, setIsChangeData] = useState();
  const [isLoader, setIsLoader] = useState(false);
  const route = useRouter();
  //YUP validation schema
  const loginSchema = Yup.object().shape({
    email: Yup.string().required("Required"),
    operation: Yup.string(),
  });
  const getForgotPassData = (data) => {
    setIsChangeData(data);
    if (data) {
      setIsLoader(false);
    }
    if (data?.data === true) {
      setTimeout(() => {
        route.reload();
      }, 1000);
    }
    console.log(data);
  };
  return (
    <React.Fragment>
      <section className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 w-screen h-screen">
        <div
          className="w-4/12 p-6 bg-white absolute rounded shadow-2xl"
          css={css`
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          `}
        >
          <h3 className="font-sans font-bold text-center ">Forgot Password</h3>
          <div className="block mt-4 border-t border-gray-400">
            <Formik
              initialValues={{
                email: "",
                operation: "forgotPassword",
              }}
              validationSchema={loginSchema}
              onSubmit={(values) => {
                setIsLoader(true);
                ResetPassword(values).then((data) => {
                  getForgotPassData(data);
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
                  <label htmlFor="email relative mb-4">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="email"
                      value={values.email}
                      className="block w-full text-black py-2 px-4 mt-6 box-border mt-4 rounded border border-gray-400 focus: outline-none"
                      css={
                        errors.email &&
                        touched.email &&
                        errors.email &&
                        css`
                          border: 1px solid ${COLORS.RED};
                        `
                      }
                    />
                    <div
                      css={css`
                        font-size: 14px;
                        color: ${COLORS.RED_DARKER};
                      `}
                    >
                      {errors.email && touched.email && errors.email}
                    </div>
                  </label>

                  {isChangeData && (
                    <div
                      className={
                        isChangeData.data === false
                          ? "text-red-500"
                          : "text-green-500"
                      }
                    >
                      {isChangeData.message}
                    </div>
                  )}
                  <button
                    type="submit"
                    className="block w-20 m-auto font-medium  bg-green-600 focus:outline-none py-2 px-4 uppercase rounded shadow-2xl text-white mt-4 hover:bg-gray-700"
                  >
                    {isLoader ? <PulseLoader size="7" color="#fff" /> : "Save"}
                  </button>
                  <div
                    className="inline-block float-right"
                    css={css`
                      margin-top: 10px;
                      & > button {
                        font-weight: 600;
                        font-size: 14px;
                        padding-top: 4px;
                        color: black;
                        text-align: right;
                        display: block;
                        position: absolute;
                        top: 0px;
                        right: 20px;
                        top: 10px;
                      }
                    `}
                  >
                    <button
                      type="button"
                      className="focus:outline-none hover:text-green-900"
                      onClick={openForgotPassModal}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ForgotPassword;
