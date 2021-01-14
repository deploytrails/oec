import React, { useState, useEffect } from "react";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import css from "@emotion/css";
import TableTd from "./TableTd";

const TableTr = ({ tdValues, data, pageNumber }) => {
  return (
    <React.Fragment>
      {data &&
        data.length > 0 &&
        data.map((value, i) => (
          <TABLE.TableTRR key={i}>
            <TableTd
              tdValue={(pageNumber - 1) * 10 + (i + 1)}
              property={null}
              tdIndex={i}
            />
            {tdValues &&
              tdValues.length > 0 &&
              tdValues.map((property) => (
                <TableTd tdValue={value} property={property} tdIndex={i} />
              ))}
          </TABLE.TableTRR>
        ))}
    </React.Fragment>
  );
};

export default TableTr;
