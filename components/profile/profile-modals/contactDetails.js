import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import * as STYLES from "../../../components/General/modalStyles";

const ContactModal = ({ openModal }) => {
  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>Update Contact Details</STYLES.PopupTitle>
        <form>
          <div className="clearfix mb-3">
            <div className="w-6/12 float-left pr-2">
              <label htmlFor="Mobile No">
                <input
                  type="text"
                  name="Mobile No"
                  placeholder="Mobile Number"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>

            <div className="w-6/12 float-left">
              <label htmlFor="Alternate Mobile No">
                <input
                  type="text"
                  name="Alternate Mobile No"
                  placeholder="Alternate Mobile No"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>
          </div>

          <div className="clearfix mb-3">
            <div className="w-6/12 float-left pr-2">
              <label htmlFor="email">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>

            <div className="w-6/12 float-left">
              <label htmlFor="Alternate Email">
                <input
                  type="text"
                  name="Alternate Email"
                  placeholder="Alternate Email"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>
          </div>

          <div className="clearfix mb-3">
            <div className="w-full">
              <label htmlFor="Address">
                <textarea
                  rows="3"
                  cols="5"
                  name="Address"
                  placeholder="Address"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none"
                ></textarea>
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
export default ContactModal;
