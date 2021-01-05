import React, { useState, useEffect } from "react";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import css from "@emotion/css";
import TableTd from "./TableTd";

const TableTr = ({ tdValues, data }) => {
  useEffect(() => {
    console.log(tdValues);
  }, []);

  return (
    <React.Fragment>
      {data &&
        data.length > 0 &&
        data.map((value, i) => (
          <TABLE.TableTRR key={i}>
            {tdValues &&
              tdValues.length > 0 &&
              tdValues.map((property) => (
                <TableTd tdValue={value[property.valueProperty]} />
              ))}
          </TABLE.TableTRR>
        ))}
    </React.Fragment>
  );
};

export default TableTr;
