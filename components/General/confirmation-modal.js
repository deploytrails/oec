import React from "react";
import css from "@emotion/css";

const ConfirmationModal = ({ openAlertModal, deleteRecord, deleteMessage }) => {
  return (
    <section
      className="w-full h-full fixed top-o bottom-0 left-0 right-0"
      css={css`
        background-color: rgba(0, 0, 0, 0.2);
      `}
    >
      <div
        className="absolute bg-white w-64 rounded shadow-2xl p-4"
        css={css`
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
        `}
      >
        <h3 className="font-bold">Confirmation</h3>
        <p>Do you realy want to delete the {deleteMessage} ?</p>
        <div>
          <button
            type="button"
            onClick={deleteRecord}
            className="bg-red-600 mr-1 mt-2 rounded py-1 px-2 text-sm text-white text-center font-sans"
          >
            Yes
          </button>
          <button
            type="button"
            onClick={openAlertModal}
            className="bg-blue-600 py-1 mt-2 px-2 rounded text-sm text-white text-center font-sans"
          >
            No
          </button>
        </div>
      </div>
    </section>
  );
};
export default ConfirmationModal;
