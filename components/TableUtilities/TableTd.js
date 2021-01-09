import React, { useState, useEffect } from "react";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import css from "@emotion/css";

const TableTd = ({ tdValue }) => {
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <TABLE.TableTdd>{tdValue}</TABLE.TableTdd>
    </React.Fragment>
  );
};

export default TableTd;
