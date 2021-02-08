import css from "@emotion/css";
import React, { useState, useEffect } from "react";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import { COLORS } from "../../constants";
import { getCopoMappings } from "../../services/courceCoordinatorAllocationService";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
const COPOMapping = ({ courseData }) => {
  const listTypes = ["Select", "Nil", "1", "2", "3"];
  const [posData, setPosData] = useState([]);
  const [copoData, setCopoData] = useState([]);
  const posLables = [
    "Engineering knowledge",
    "Problem	analysis",
    "Design/development of solutions",
    "Conduct investigations of complex problems",
    "Modern tool usage",
    "The engineer and society",
    "Environment and sustainability",
    "Ethics",
    "Individual and team work",
    "Communication",
    "Project management and finance",
    "Life-Long Learning",
    "Understand the working of new hardware/software",
    "Model the computer based systems and design algorithms",
    "Design, develop and test system software and application software",
  ];
  const copoHeader = [
    "PO1",
    "PO2",
    "PO3",
    "PO4",
    "PO5",
    "PO6",
    "PO7",
    "PO8",
    "PO9",
    "PO10",
    "PO11",
    "PO12",
    "PSO1",
    "PSO2",
    "PSO3",
  ];
  const TH = css`
    background-color: ${COLORS.TABLEBG};
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    border-right: 1px solid ${COLORS.WHITE};
    padding: 10px;
    rowspan: 2;
    &:nth-of-type(last) {
      border: none;
    }
  `;

  const loadCopoData = async (coursecode, facultyID) => {
    const copo = await getCopoMappings(coursecode, facultyID);
    setCopoData(copo?.COPO);
    setPosData(copo?.POS);
  };

  useEffect(() => {
    loadCopoData("R17-7G134", "64DF070D8B6B11E98B0925647F276BC6");
  }, []);

  const renderTableData = () => {
    return copoData.map((copo, index) => {
      return (
        <React.Fragment>
          <React.Fragment>{createRow(copo, index)}</React.Fragment>
        </React.Fragment>
      );
    });
  };

  const renderTableHeader = () => {
    return copoHeader.map((cHeader, index) => {
      return (
        <TABLE.TableTh key={index} className="cursor-pointer">
          <p data-tip data-for={cHeader}>
            {cHeader}
          </p>
          <ReactTooltip id={cHeader} type="error" effect="solid">
            <div
              css={css`
                max-width: 150px;
              `}
            >
              {posLables[index]}
            </div>
          </ReactTooltip>
        </TABLE.TableTh>
      );
    });
  };

  const createRow = (copo, index) => {
    return (
      <React.Fragment>
        <tr
          key={index}
          css={css`
            &:nth-child(even) {
              background-color: #f2f2f2;
            }
          `}
        >
          {posData &&
            posData.map((item, i) => (
              <TABLE.TableTh key={index} className="cursor-pointer">
                <p data-tip data-for={"CO" + index}>
                  {"CO" + (index + 1)}
                </p>
                <ReactTooltip id={"CO" + index} type="warning" effect="solid">
                  <div
                    css={css`
                      max-width: 150px;
                    `}
                  >
                    {renderTextTitle(item, index + 1)}
                  </div>
                </ReactTooltip>
              </TABLE.TableTh>
            ))}
          <TABLE.TableTdd>{renderSelectItem(copo.poa)}</TABLE.TableTdd>
          <TABLE.TableTdd>{renderSelectItem(copo.pob)}</TABLE.TableTdd>
          <TABLE.TableTdd>{renderSelectItem(copo.poc)}</TABLE.TableTdd>
          <TABLE.TableTdd>{renderSelectItem(copo.pod)}</TABLE.TableTdd>
          <TABLE.TableTdd>{renderSelectItem(copo.poe)}</TABLE.TableTdd>
          <TABLE.TableTdd>{renderSelectItem(copo.pof)}</TABLE.TableTdd>
          <TABLE.TableTdd>{renderSelectItem(copo.pog)}</TABLE.TableTdd>
          <TABLE.TableTdd>{renderSelectItem(copo.poh)}</TABLE.TableTdd>
          <TABLE.TableTdd>{renderSelectItem(copo.poi)}</TABLE.TableTdd>
          <TABLE.TableTdd>{renderSelectItem(copo.poj)}</TABLE.TableTdd>
          <TABLE.TableTdd>{renderSelectItem(copo.pok)}</TABLE.TableTdd>
          <TABLE.TableTdd>{renderSelectItem(copo.pol)}</TABLE.TableTdd>
          <TABLE.TableTdd>{renderSelectItem(copo.pso1)}</TABLE.TableTdd>
          <TABLE.TableTdd>{renderSelectItem(copo.pso2)}</TABLE.TableTdd>
          <TABLE.TableTdd>{renderSelectItem(copo.pso3)}</TABLE.TableTdd>
          <TABLE.TableTdd>
            <FontAwesomeIcon
              icon={faEdit}
              // onClick={() => openModal(bookInfo)}
            />
          </TABLE.TableTdd>
        </tr>
      </React.Fragment>
    );
  };

  const createLabelsRow = (posData) => {
    return posLables.map((posLabel, index) => {
      return <TABLE.TableTdd key={index}>{posLabel}</TABLE.TableTdd>;
    });
  };

  const renderTextTitle = (item, i) => {
    switch (i) {
      case 1:
        return item.po1;
      case 2:
        return item.po2;
      case 3:
        return item.po3;
      case 4:
        return item.po4;
      case 5:
        return item.po5;
      case 6:
        return item.po6;
      case 7:
        return item.po7;
      case 8:
        return item.po8;
      case 9:
        return item.po9;
      case 9:
        return item.po10;
      case 10:
        return item.po10;
      case 11:
        return item.po11;
      case 12:
        return item.po12;
      case 13:
        return item.pso1;
      case 14:
        return item.pso2;
      case 15:
        return item.pso3;
      default:
        return item.po1;
    }
  };

  const renderSelectItem = (copo) => {
    return (
      <p> {!copo || copo === "NIL" ? "0" : copo}</p>
      // <select
      //   name={copo}
      //   value={copo}
      //   css={css`
      //     display: block;
      //     width: 100%;
      //     height: 42px;
      //     padding: 0px 10px;
      //     margin-bottom: 0px;
      //     box-sizing: border-box;
      //     font-family: "Open Sans", sans-serif;
      //     border: 1px solid ${COLORS.GRAY_DARK};
      //     -webkit-border-radius: 4px;
      //     -moz-border-radius: 4px;
      //     -ms-border-radius: 4px;
      //     border-radius: 4px;
      //     font-size: 14px;
      //     &:focus {
      //       outline: none;
      //     }
      //   `}
      // >
      //   {listTypes &&
      //     listTypes.map((opt) => (
      //       <option
      //         key={opt}
      //         value={copo === opt ? copo : opt}
      //         selected={copo === opt ? copo : opt}
      //       >
      //         {opt}
      //       </option>
      //     ))}
      // </select>
    );
  };

  return (
    <React.Fragment>
      <TABLE.TableWrapper id="students">
        <tbody>
          <tr>
            <th
              css={css`
                ${TH}
              `}
              rowspan="2"
            >
              COs
            </th>
            <th
              css={css`
                ${TH}
              `}
              colspan="12"
            >
              POs
            </th>
            <th
              css={css`
                ${TH}
              `}
              colspan="3"
            >
              PSOs
            </th>
            <th
              css={css`
                ${TH}
              `}
              rowspan="2"
            >
              Operation
            </th>
          </tr>
          <tr>{renderTableHeader()}</tr>
          {/* <TABLE.TableTh>COs</TABLE.TableTh> */}
          {/* <tr>
            <th>
              <tr>
                <td rowspan="11">POs</td>
                <td rowspan="2">PSOs</td>
              </tr>
              <tr>{renderTableHeader()}</tr>
            </th> */}
          {/* <TABLE.TableTh rowspan="2">Operation</TABLE.TableTh> */}
          {/* <th rowspan="1">Operation</th>
          </tr> */}
          {renderTableData()}
        </tbody>
      </TABLE.TableWrapper>
      <br />
      <br />
      <button
        type="button"
        className=" float-right bg-yellow-400 block  mx-auto px-2 py-1 rounded"
      >
        SaveAll
      </button>
    </React.Fragment>
  );
};

export default COPOMapping;
