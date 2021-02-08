import React, { useState } from "react";
import * as STYLES from "../General/modalStyles";
import css from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const StyleModal = ({ headder, handleClose, children, buttons }) => {
  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>
          {headder}
          <div
            css={css`
              cursor: pointer;
              float: right;
            `}
          >
            <FontAwesomeIcon icon={faTimes} onClick={() => handleClose()} />
          </div>
        </STYLES.PopupTitle>
        <STYLES.PopupBody>{children}</STYLES.PopupBody>

        {buttons && (
          <STYLES.PopupFooter>
            <div
              css={css`
                float: right;
              `}
            >
              {buttons}
            </div>
          </STYLES.PopupFooter>
        )}
      </STYLES.PopupWrapper>
    </STYLES.PopupMask>
  );
};
export default StyleModal;
