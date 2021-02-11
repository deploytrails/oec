import React from "react";
import TableTd from "./TableTd";

const TableTr = ({ tdValues, data, pageNumber }) => {
  return (
    <React.Fragment>
      {data &&
        data.length > 0 &&
        data.map((value, i) => (
          <tr key={i}>
            <TableTd
              tdValue={(pageNumber - 1) * 10 + (i + 1)}
              property={{ type: null }}
              tdIndex={i}
            />
            {tdValues &&
              tdValues.length > 0 &&
              tdValues.map((property) => (
                <TableTd tdValue={value} property={property} tdIndex={i} />
              ))}
          </tr>
        ))}
    </React.Fragment>
  );
};

export default TableTr;
