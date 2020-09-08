import React, { useState, useEffect } from "react";
import css from "@emotion/css";
import * as STYLES from "../../../components/General/modalStyles";

const BookPublicationModal = ({ openModal }) => {
  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>Book Publication Details</STYLES.PopupTitle>
        <form>
          <div className="clearfix mb-3">
            <div className="w-6/12 float-left pr-2">
              <label htmlFor="Name of The College*">
                <input
                  type="text"
                  name="Name of The College*"
                  placeholder="Name of The College*"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>
            <div className="w-6/12 float-left">
              <label htmlFor="Designation">
                <select
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none"
                  css={css`
                    height: 42px;
                  `}
                >
                  <option>Select Designation</option>
                  <option value="Phd"> Phd</option>
                </select>
              </label>
            </div>
          </div>

          <div className="clearfix mb-3">
            <div className="w-full float-left">
              <label htmlFor="Roles & Responsibilities">
                <input
                  type="text"
                  name="Roles & Responsibilities"
                  placeholder="Roles & Responsibilities"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>
          </div>

          <div className="clearfix mb-3">
            <div className="w-6/12 float-left pr-2">
              <label htmlFor="from">
                <input
                  type="date"
                  name="from"
                  placeholder="from"
                  className="border border-2 border-solid p-2 rounded w-full focus:outline-none "
                />
              </label>
            </div>

            <div className="w-6/12 float-left">
              <label htmlFor="to">
                <input
                  type="date"
                  name="to"
                  placeholder="to"
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
              Save Designation
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
export default BookPublicationModal;
