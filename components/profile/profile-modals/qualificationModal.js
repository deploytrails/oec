import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import * as STYLES from "../../../components/General/modalStyles";

const QualificationModal = ({ openModal }) => {
  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>Add Qualification</STYLES.PopupTitle>
        <form>
          <div className="clearfix mb-3">
            <div className="w-6/12 float-left pr-2">
              <label htmlFor="Mobile No">
                <select
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none"
                  css={css`
                    height: 42px;
                  `}
                >
                  <option>Select Qualification</option>
                  <option value="Phd"> Phd</option>
                </select>
              </label>
            </div>

            <div className="w-6/12 float-left">
              <label htmlFor="Name of The College*">
                <input
                  type="text"
                  name="Name of The College*"
                  placeholder="Name of The College"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>
          </div>

          <div className="clearfix mb-3">
            <div className="w-6/12 float-left pr-2">
              <label htmlFor="Branch Name">
                <input
                  type="text"
                  name="Branch Name"
                  placeholder="Branch Name"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>

            <div className="w-6/12 float-left">
              <label htmlFor="Year of Completion*">
                <input
                  type="text"
                  name="Year of Completion*"
                  placeholder="Year of Completion*"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>
          </div>

          <div className="clearfix mb-3">
            <div className="w-full">
              <label htmlFor="Address">
                <input type="file" name="Qualification Certificate Upload" />
              </label>
            </div>
          </div>

          <div className="float-right">
            <button
              type="submit"
              className="bg-green-400 px-3 py-2 rounded text-white"
            >
              Save Qualification
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
export default QualificationModal;
