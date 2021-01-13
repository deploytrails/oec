import React from "react";
import * as TABLE from "../../components/dashboards/styles/table.styles";

const TableTh = ({ thValues }) => {
  return (
    <React.Fragment>
      <TABLE.TableTR>
        <TABLE.TableTh key="S.No.">S.No.</TABLE.TableTh>
        {thValues &&
          thValues.length > 0 &&
          thValues.map((thead) => (
            <TABLE.TableTh key={thead}>{thead}</TABLE.TableTh>
          ))}
      </TABLE.TableTR>
    </React.Fragment>
  );
};

export default TableTh;
