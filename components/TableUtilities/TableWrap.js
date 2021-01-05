import React, { useState, useEffect } from "react";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import css from "@emotion/css";
import TableTr from "./TableTr";
import TableTh from "./TableTh";

const TableWrap = ({ thValues, tdValues, data }) => {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <React.Fragment>
      <TABLE.TableWrapper>
        <TableTh thValues={thValues} />
        <TABLE.TableTbody>
          <TableTr tdValues={tdValues} data={data} />
        </TABLE.TableTbody>
      </TABLE.TableWrapper>
    </React.Fragment>
  );
};

export default TableWrap;
