import React, { useState } from "react";
import css from "@emotion/css";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS } from "../../constants";
import PulseLoader from "react-spinners/PulseLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTimes } from "@fortawesome/free-solid-svg-icons";
import { changePasswordService } from "../../services/loginService";

const ChangePassword = ({ openChangePassModal }) => {
  const [isChangeData, setIsChangeData] = useState();
  const [isLoader, setIsLoader] = useState(false);
  const route = useRouter();
  //YUP validation schema
  const loginSchema = Yup.object().shape({
    changeUserID: Yup.string().required("Required"),
    changePasswordOld: Yup.string().required("Required"),
    changePasswordNew: Yup.string().required("Required"),
    confirmPasswordNew: Yup.string().required("Required"),
    operation: Yup.string(),
  });

  const getChangeData = (data) => {
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
          <h3 className="font-sans font-bold text-center ">Change Password</h3>
          <div className="block mt-4 border-t border-gray-400">
            <Formik
              initialValues={{
                changeUserID: "",
                changePasswordOld: "",
                changePasswordNew: "",
                confirmPasswordNew: "",
                operation: "changePassword",
              }}
              validationSchema={loginSchema}
              onSubmit={(values) => {
                setIsLoader(true);
                changePasswordService(values).then((data) => {
                  getChangeData(data);
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
                  <label htmlFor="changeUserID relative mb-4">
                    <input
                      type="text"
                      name="changeUserID"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your user name"
                      value={values.changeUserID}
                      className="block w-full text-black py-2 px-4 mt-6 box-border mt-4 rounded border border-gray-400 focus: outline-none"
                      css={
                        errors.changeUserID &&
                        touched.changeUserID &&
                        errors.changeUserID &&
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
                      {errors.changeUserID &&
                        touched.changeUserID &&
                        errors.changeUserID}
                    </div>
                  </label>

                  <label htmlFor="changePasswordOld relative block">
                    <input
                      type="password"
                      name="changePasswordOld"
                      placeholder="Enter your old password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.changePasswordOld}
                      className="block w-full text-black py-2 px-4 box-border mt-4 rounded border border-gray-400 focus: outline-none"
                      css={
                        errors.changePasswordOld &&
                        touched.changePasswordOld &&
                        errors.changePasswordOld &&
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
                      {errors.changePasswordOld &&
                        touched.changePasswordOld &&
                        errors.changePasswordOld}
                    </div>
                  </label>
                  <label htmlFor="changePasswordNew relative block">
                    <input
                      type="password"
                      name="changePasswordNew"
                      placeholder="Enter your new password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.changePasswordNew}
                      className="block w-full text-black py-2 px-4 box-border mt-4 rounded border border-gray-400 focus: outline-none"
                      css={
                        errors.changePasswordNew &&
                        touched.changePasswordNew &&
                        errors.changePasswordNew &&
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
                      {errors.changePasswordNew &&
                        touched.changePasswordNew &&
                        errors.changePasswordNew}
                    </div>
                  </label>

                  <label htmlFor="confirmPasswordNew relative block">
                    <input
                      type="password"
                      name="confirmPasswordNew"
                      placeholder="Confirm your new password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPasswordNew}
                      className="block w-full text-black py-2 px-4 box-border mt-4 rounded border border-gray-400 focus: outline-none"
                      css={
                        errors.confirmPasswordNew &&
                        touched.confirmPasswordNew &&
                        errors.confirmPasswordNew &&
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
                      {errors.confirmPasswordNew &&
                        touched.confirmPasswordNew &&
                        errors.confirmPasswordNew}
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
                      onClick={openChangePassModal}
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

export default ChangePassword;
