import css from "@emotion/css";
import React, { useState, useEffect } from 'react';
import * as TABLE from "../../components/dashboards/styles/table.styles";
import { COLORS } from '../../constants';
import { getCopoMappings } from "../../services/courceCoordinatorAllocationService";



const COPOMapping = ({ courseData }) => {

  const listTypes = [
    "Select",
    "Nil",
    "1",
    "2",
    "3"
  ];
  const [posData, setPosData] = useState([]);
  const [copoData, setCopoData] = useState([]);
  const [posLables, setPosLables] = useState(["", "Engineering knowledge", "Problem	analysis", "Design/development of solutions", "Conduct investigations of complex problems", "Modern tool usage", "The engineer and society", "Environment and sustainability", "Ethics", "Individual and team work", "Communication", "Project management and finance", "Life-Long Learning", "Understand the working of new hardware/software", "Model the computer based systems and design algorithms", "Design, develop and test system software and application software"]);
  const [copoHeader, setCopoHeader] = useState(["","PO1","PO2","PO3","PO4","PO5","PO6","PO7","PO8","PO9","PO10","PO11","PO12","PSO1","PSO2",'PSO3']);
 
  const loadCopoData = async (coursecode, facultyID) => {
    const copo = await getCopoMappings(coursecode, facultyID)
    setCopoData(copo?.COPO);
    setPosData(copo?.POS);
  };

  useEffect(() => {
    loadCopoData('R17-7G134', '64DF070D8B6B11E98B0925647F276BC6');
  }, []);

  const renderTableData = () => {
    return copoData.map((copo, index) => {
      return (
        <React.Fragment>
          {(index === 0 ?
            (
              <React.Fragment>
                {createLabelsRow(posData)}
                {createRow(copo, index)}
              </React.Fragment>
            )
            : (
              <React.Fragment>
                {createRow(copo, index)}
              </React.Fragment>
            )
          )}

        </React.Fragment>
      )
    })
  }

  const renderTableHeader = () => {    
    return copoHeader.map((cHeader, index) => {
      return <TABLE.TableTh key={index}>{cHeader}</TABLE.TableTh>
    })
  }

  const createRow = (copo, index) => {
    return (
      <React.Fragment>
        <tr key={index}>
        {posData &&
                  posData.map((item, i) => (
          <TABLE.TableTdd><input type="text" value={renderTextTitle(item, index+1)} className="box-border mt-4 rounded border border-gray-400"></input></TABLE.TableTdd>
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
          <TABLE.TableTdd><button type="button" className="bg-yellow-400 block  mx-auto px-2 py-1 rounded">Save</button></TABLE.TableTdd>
        </tr>
      </React.Fragment>
    )
  }

  const createLabelsRow = (posData) => {

    return posLables.map((posLabel, index) => {

      return <TABLE.TableTdd key={index}>{posLabel}</TABLE.TableTdd>

    })
  }

  const renderTextTitle = (item, i) => {
    switch(i) {
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
  }

  const renderSelectItem = (copo) => {

    return (
      <select
        name={copo}
        value={copo}
        css={css`
                        display: block;
                        width: 100%;
                        height: 42px;
                        padding: 0px 10px;
                        margin-bottom: 0px;
                        box-sizing: border-box;
                        font-family: "Open Sans", sans-serif;
                        border: 1px solid ${COLORS.GRAY_DARK};
                        -webkit-border-radius: 4px;
                        -moz-border-radius: 4px;
                        -ms-border-radius: 4px;
                        border-radius: 4px;
                        font-size: 14px;
                        &:focus {
                          outline: none;
                        }
                      `}
      >
        {listTypes &&
          listTypes.map(opt => (
            <option
              key={opt}
              value={
                copo === opt
                  ? copo
                  : opt
              }
              selected={
                copo === opt
                  ? copo
                  : opt
              }
            >
              {opt}
            </option>
          ))}
      </select>
    )
  }

  return (
    <React.Fragment>

      <TABLE.TableWrapper id='students'>
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </TABLE.TableWrapper>
      <button type="button" className=" allign-right bg-yellow-400 block  mx-auto px-2 py-1 rounded">SaveAll</button>

    </React.Fragment>
  )

}

export default COPOMapping;