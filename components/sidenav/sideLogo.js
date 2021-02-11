import React from "react";
import { css } from "@emotion/core";
import { COLORS } from "../../constants";
const SideLogo = () => {
  return (
    <React.Fragment>
      <section
        className="block py-4 px-6 text-white font-bold"
        css={css`
          border-bottom: 1px solid ${COLORS.DARKBORDER};
        `}
      >
        <h1>OpeneCampus</h1>
      </section>
    </React.Fragment>
  );
};

export default SideLogo;
