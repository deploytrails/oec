import React from "react";
import css from "@emotion/css";
import { COLORS } from "../../constants";

const TableTh = ({ thValues }) => {
  return (
    <React.Fragment>
      <thead>
        <tr>
          <th key="S.No.">S.No.</th>
          {thValues &&
            thValues.length > 0 &&
            thValues.map((thead) =>
              thead?.property ? (
                <th>
                  <input
                    css={css`
                      color: ${COLORS.WHITE};
                    `}
                    className="checkbox"
                    type="checkbox"
                    defaultChecked={false}
                    onChange={(e) => thead.onChangeSelectAllfunction(e)}
                  />
                  {thead?.property}
                </th>
              ) : (
                <th key={thead}>{thead}</th>
              )
            )}
        </tr>
      </thead>
    </React.Fragment>
  );
};

export default TableTh;
