import React, { useState, useEffect } from "react";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import css from "@emotion/css";

const TableTd = ({ tdValue, property, tdIndex }) => {
  return (
    <React.Fragment>
      {property === null && (
        <TABLE.TableTdd key={tdValue}>{tdValue}</TABLE.TableTdd>
      )}
      {property && property?.type === undefined && (
        <TABLE.TableTdd key={tdValue[property.valueProperty]}>
          {tdValue[property.valueProperty]}
        </TABLE.TableTdd>
      )}
      {property?.type === "button" && (
        <TABLE.TableTdd key={property.valueProperty}>
          <button
            type="button"
            className="bg-yellow-400 block  mx-auto px-2 py-1 rounded"
            onClick={() => property.onClickfunction(tdIndex)}
          >
            {property.valueProperty}
          </button>
        </TABLE.TableTdd>
      )}
      {property?.type === "checkbox" && (
        <TABLE.TableTdd key={property.valueProperty}>
          <input
            className="checkbox"
            name={tdIndex}
            id={tdIndex}
            type="checkbox"
            defaultChecked={tdValue[property.valueProperty]}
            onChange={(e) => property.onChangefunction(tdIndex, e)}
          />
        </TABLE.TableTdd>
      )}
    </React.Fragment>
  );
};

export default TableTd;
