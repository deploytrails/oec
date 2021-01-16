import React from "react";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import css from "@emotion/css";
import { COLORS } from "../../constants";

const TableTh = ({ thValues }) => {
  return (
    <React.Fragment>
      <TABLE.TableTR>
        <TABLE.TableTh key="S.No.">S.No.</TABLE.TableTh>
        {thValues &&
          thValues.length > 0 &&
          thValues.map((thead) =>
            thead?.property ? (
              <TABLE.TableTh>
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
              </TABLE.TableTh>
            ) : (
              <TABLE.TableTh key={thead}>{thead}</TABLE.TableTh>
            )
          )}
      </TABLE.TableTR>
    </React.Fragment>
  );
};

export default TableTh;
