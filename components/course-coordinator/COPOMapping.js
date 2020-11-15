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
    let header = Object.keys(copoData[0])
    return header.map((key, index) => {
      return <TABLE.TableTh key={index}>{key.toUpperCase()}</TABLE.TableTh>
    })
  }

  const createRow = (copo, index) => {
    return (
      <React.Fragment>
        <tr key={index}>
          <TABLE.TableTdd><input type="text" value={''} className="box-border mt-4 rounded border border-gray-400"></input></TABLE.TableTdd>
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
    return (
      <React.Fragment>
                <tr>
                  <TABLE.TableTdd>  </TABLE.TableTdd>
                  <TABLE.TableTdd>Engineering knowledge</TABLE.TableTdd>
                  <TABLE.TableTdd>Problem	analysis</TABLE.TableTdd>
                  <TABLE.TableTdd>Design/development of solutions</TABLE.TableTdd>
                  <TABLE.TableTdd>Conduct investigations of complex problems</TABLE.TableTdd>
                  <TABLE.TableTdd>Modern tool usage</TABLE.TableTdd>
                  <TABLE.TableTdd>The engineer and society</TABLE.TableTdd>
                  <TABLE.TableTdd>Environment and sustainability</TABLE.TableTdd>
                  <TABLE.TableTdd>Ethics</TABLE.TableTdd>
                  <TABLE.TableTdd>Individual and team work</TABLE.TableTdd>
                  <TABLE.TableTdd>Communication</TABLE.TableTdd>
                  <TABLE.TableTdd>Project management and finance</TABLE.TableTdd>
                  <TABLE.TableTdd>Life-long learning</TABLE.TableTdd>
                  <TABLE.TableTdd>Understand the working of new hardware/software</TABLE.TableTdd>
                  <TABLE.TableTdd>Model the computer based systems and design algorithms</TABLE.TableTdd>
                  <TABLE.TableTdd>Design, develop and test system software and application software </TABLE.TableTdd>
                </tr>                
              </React.Fragment>
    )
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
          {/* <tr>{renderTableHeader()}</tr> */}
          {renderTableData()}
        </tbody>
      </TABLE.TableWrapper>
      <button type="button" className=" allign-right bg-yellow-400 block  mx-auto px-2 py-1 rounded">SaveAll</button>

    </React.Fragment>
  )

}

export default COPOMapping;