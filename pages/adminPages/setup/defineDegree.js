import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import { getDegreeData } from "../../../services/adminServices/defineDegreeService";
import * as TABLE from "../../../components/dashboards/styles/table.styles";
import css from "@emotion/css";
import TableWrap from "../../../components/TableUtilities/TableWrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEdit,
  faTrashAlt,
  faPlus,
  faFileImport,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
const DefineDegree = () => {
  const [isDegreeData, setIsDegreeData] = useState([]);
  useEffect(() => {
    loadDegreeData();
  }, []);
  const loadDegreeData = async () => {
    const cData = await getDegreeData();
    console.log(cData?.degrees);
    setIsDegreeData(cData?.degrees);
  };
  const toolBarFunction = () => {
    return (
      <button class="buttonWhite" onClick={() => alert("Add Button Working")}>
        <FontAwesomeIcon icon={faPlusCircle} />
        &nbsp;Test Button
      </button>
    );
  };
  const parentDeleteFun = () => {
    alert("In Prent Delete Function");
  };
  const parentEditFun = () => {
    alert("In Parent Edit Function");
  };

  const thValues = ["Degree Code", "Degree Name", "Degree Type", "Operation"];

  const tdValues = [
    { valueProperty: "degreeCode" },
    { valueProperty: "degreeName" },
    { valueProperty: "degreeType" },
    {
      type: "modify",
      delete: "Degree Details",
      deleteFun: (e, e1) => {
        parentDeleteFun(e, e1);
      },
      edit: "Degree Details",
      editFun: (e, e1) => {
        parentEditFun(e, e1);
      },
    },
  ];
  return (
    <React.Fragment>
      <Layout>
        <div className="clearfix px-6 pb-6">
          {/* <button
            type="button"
            className="py-2 px-4 rounded float-right bg-blue-400 text-center text-white mb-4 hover:bg-blue-500 focus:outline-none"
          >
            ADD DEGREE{" "}
          </button> */}
          {isDegreeData && isDegreeData.length > 0 && (
            <TableWrap
              thValues={thValues}
              tdValues={tdValues}
              data={isDegreeData}
              toolBar={toolBarFunction}
            />
          )}

          {/* <TABLE.TableWrapper
            css={css`
              margin-top: 10px;
            `}
          >
            <TABLE.TableTR>
              <TABLE.TableTh>Degree Code</TABLE.TableTh>
              <TABLE.TableTh>Degree Name</TABLE.TableTh>
              <TABLE.TableTh>Degree Type</TABLE.TableTh>
            </TABLE.TableTR>

            {isDegreeData &&
              isDegreeData.length > 0 &&
              isDegreeData.map((degreeInfo) => (
                <TABLE.TableTRR>
                  <TABLE.TableTdd>
                    {degreeInfo.degreeCode}
                  </TABLE.TableTdd>
                  <TABLE.TableTdd>
                    {degreeInfo.degreeName}
                  </TABLE.TableTdd>
                  <TABLE.TableTdd>
                    {degreeInfo.degreeType}
                  </TABLE.TableTdd>
                </TABLE.TableTRR>
              ))}
          </TABLE.TableWrapper>
 */}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default DefineDegree;
