import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import * as STYLES from "../../../components/General/modalStyles";

const Modal = ({ openModal }) => {
  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>Update Profile</STYLES.PopupTitle>
        <form>
          <div className="clearfix mb-3">
            <div className="w-4/12 float-left">
              <label htmlFor="name">
                <select
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none"
                  css={css`
                    height: 42px;
                  `}
                >
                  <option className="" disabled="" selected="">
                    Choose your option
                  </option>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Miss.">Miss.</option>
                </select>
              </label>
            </div>
            <div className="w-4/12 float-left px-1">
              <label htmlFor="name">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>

            <div className="w-4/12 float-left">
              <label htmlFor="firstname">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>
          </div>

          <div className="clearfix  mb-3">
            <div className="w-4/12 float-left">
              <label htmlFor="Surname">
                <input
                  type="text"
                  name="Surname"
                  placeholder="Surname"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>
            <div className="w-4/12 float-left px-1">
              <label htmlFor="Gender">
                <select
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none"
                  css={css`
                    height: 42px;
                  `}
                >
                  <option className="" disabled="" selected="">
                    select gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </label>
            </div>

            <div className="w-4/12 float-left">
              <label htmlFor="Date of Birth">
                <input
                  type="date"
                  name="Date of Birth"
                  placeholder="Date of Birth"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>
          </div>

          <div className="clearfix  mb-3">
            <div className="w-4/12 float-left">
              <label htmlFor="Father's Name">
                <input
                  type="text"
                  name="Father's Name"
                  placeholder="Father's Name"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>
            <div className="w-4/12 float-left px-1">
              <label htmlFor="Employee Type">
                <input
                  type="text"
                  name="Employee Type"
                  placeholder="Employee Type"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>

            <div className="w-4/12 float-left">
              <label htmlFor="Association Type">
                <select
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none"
                  css={css`
                    height: 42px;
                  `}
                >
                  <option className="" disabled="" selected="">
                    select your option
                  </option>
                  <option value="Regular">Regular</option>
                  <option value="Contractual">Contractual</option>
                  <option value="Visiting">Visiting</option>
                </select>
              </label>
            </div>
          </div>

          <div className="clearfix  mb-3">
            <div className="w-4/12 float-left">
              <label htmlFor="Designation">
                <input
                  type="text"
                  name="Designation"
                  placeholder="Designation"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>
            <div className="w-4/12 float-left px-1">
              <label htmlFor="naDate of Joiningme">
                <input
                  type="date"
                  name="Date of Joining"
                  placeholder="Date of Joining"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>

            <div className="w-4/12 float-left">
              <label htmlFor="Date of Leaving">
                <input
                  type="date"
                  name="Date of Leaving"
                  placeholder="Firstname"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>
          </div>
          <div className="clearfix  mb-3">
            <div className="w-4/12 float-left">
              <label htmlFor="Aadhar Card No.">
                <input
                  type="text"
                  name="Aadhar Card No."
                  placeholder="Aadhar Card No."
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>
            <div className="w-4/12 float-left px-1">
              <label htmlFor="PAN Card No.">
                <input
                  type="text"
                  name="PAN Card No."
                  placeholder="PAN Card No."
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>

            <div className="w-4/12 float-left">
              <label htmlFor="JNTUA No.">
                <input
                  type="text"
                  name="JNTUA No."
                  placeholder="JNTUA No."
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>
          </div>

          <div className="clearfix  mb-3">
            <div className="w-4/12 float-left">
              <label htmlFor="AICTE No.">
                <input
                  type="text"
                  name="AICTE No."
                  placeholder="AICTE No."
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>
            <div className="w-4/12 float-left px-1">
              <label htmlFor="Achievements">
                <input
                  type="text"
                  name="Achievements"
                  placeholder="Achievements"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>

            <div className="w-4/12 float-left">
              <label htmlFor="Research Activities">
                <input
                  type="text"
                  name="Research Activities"
                  placeholder="Research Activities"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>
          </div>

          <div className="float-right">
            <button
              type="submit"
              className="bg-green-400 px-3 py-2 rounded text-white"
            >
              Update
            </button>
            <button
              type="button"
              onClick={openModal}
              className="bg-black px-3 py-2 ml-2 rounded text-white"
            >
              Close
            </button>
          </div>
        </form>
      </STYLES.PopupWrapper>
    </STYLES.PopupMask>
  );
};
export default Modal;
