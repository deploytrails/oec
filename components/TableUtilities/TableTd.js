import React, { useState, useEffect } from "react";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import css from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TableTd = ({ tdValue, property, tdIndex }) => {
  const renderTd = () => {
    switch (property?.type) {
      case "checkbox":
        return (
          <TABLE.TableTdd key={property.valueProperty}>
            <input
              className="checkbox"
              name={tdIndex}
              id={tdIndex}
              type="checkbox"
              checked={tdValue[property.valueProperty]}
              onChange={(e) => property.onChangefunction(tdIndex, e)}
            />
          </TABLE.TableTdd>
        );
      case "modify":
        return (
          <TABLE.TableTdd key={"modify" + tdIndex}>
            {property.edit && (
              <button
                class="buttonYellow"
                onClick={(e) => property.editFun(tdIndex, e)}
              >
                <FontAwesomeIcon icon={faEdit} />
                &nbsp; Edit
              </button>
            )}
            &nbsp;
            {property.delete && (
              <button
                class="buttonRed"
                onClick={(e) => property.deleteFun(tdIndex, e)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
                &nbsp; Delete
              </button>
            )}
          </TABLE.TableTdd>
        );
      case null:
        return <TABLE.TableTdd key={tdValue}>{tdValue}</TABLE.TableTdd>;
      default:
        return (
          <TABLE.TableTdd key={tdValue[property.valueProperty]}>
            {tdValue[property.valueProperty]}
          </TABLE.TableTdd>
        );
    }
  };

  useEffect(() => {
    console.log(property);
  }, []);

  return (
    <React.Fragment>
      {renderTd()}
      {/* {property?.type === "button" && (
        <TABLE.TableTdd key={property.valueProperty}>
          <button
            type="button"
            className="bg-yellow-400 block  mx-auto px-2 py-1 rounded"
            onClick={() => property.onClickfunction(tdIndex)}
          >
            {property.valueProperty}
          </button>
        </TABLE.TableTdd>
      )} */}
    </React.Fragment>
  );
};

export default TableTd;
