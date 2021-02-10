import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TableTd = ({ tdValue, property, tdIndex }) => {
  const renderTd = () => {
    switch (property?.type) {
      case "checkbox":
        return (
          <td key={property.valueProperty}>
            <input
              className="checkbox"
              name={tdIndex}
              id={tdIndex}
              type="checkbox"
              checked={tdValue[property.valueProperty]}
              onChange={(e) => property.onChangefunction(tdIndex, e)}
            />
          </td>
        );
      case "modify":
        return (
          <td key={"modify" + tdIndex}>
            {property.edit && (
              <span className="cursor-pointer mr-4 text-blue-700">
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={(e) => property.editFun(tdIndex, e)}
                >
                  &nbsp; Edit
                </FontAwesomeIcon>
              </span>
            )}
            &nbsp;
            {property.delete && (
              <span className="cursor-pointer mr-4 text-red-700">
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={(e) => property.deleteFun(tdIndex, e)}
                >
                  &nbsp; Delete
                </FontAwesomeIcon>
              </span>
            )}
          </td>
        );
      case null:
        return <td key={tdValue}>{tdValue}</td>;
      default:
        return (
          <td key={tdValue[property.valueProperty]}>
            {tdValue[property.valueProperty]}
          </td>
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
        <td key={property.valueProperty}>
          <button
            type="button"
            className="bg-yellow-400 block  mx-auto px-2 py-1 rounded"
            onClick={() => property.onClickfunction(tdIndex)}
          >
            {property.valueProperty}
          </button>
        </td>
      )} */}
    </React.Fragment>
  );
};

export default TableTd;
