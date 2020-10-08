import React from "react";
import { css } from "@emotion/core";
import { COLORS } from "../../constants";
const Footer = () => {
  return (
    <React.Fragment>
      <div
        className="block py-2 px-4"
        css={css`
          background-color: ${COLORS.BGBGRAY};
          border-top: 1px solid ${COLORS.GRAY_LIGHTMEDIUM};
        `}
      >
        © 2020 OEC design by Astute
      </div>
    </React.Fragment>
  );
};

export default Footer;
