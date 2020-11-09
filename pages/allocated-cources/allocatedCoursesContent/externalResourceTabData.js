import React, { useState, useEffect } from "react";
import * as TABLE from "../../../components/dashboards/styles/table.styles";


const ExternalResourceTabData = ({ forLinkTable }) => {
 
  return (
    <React.Fragment>
      <br></br>
      {forLinkTable && forLinkTable.length?(
      <TABLE.TableWrapper>
            <TABLE.TableTR>
              <TABLE.TableTh>Priority No.</TABLE.TableTh>
              <TABLE.TableTh>Unit</TABLE.TableTh>
              <TABLE.TableTh>	Link Type</TABLE.TableTh>
              <TABLE.TableTh>	Link </TABLE.TableTh>
           <TABLE.TableTh>	Link Description</TABLE.TableTh>

            </TABLE.TableTR>
            {forLinkTable &&
              forLinkTable.length &&
              forLinkTable.map((link, i) => (
                <TABLE.TableTbody key={link[i]}>
                  <TABLE.TableTRR
                  >
                    <TABLE.TableTdd>{link[i]}</TABLE.TableTdd>
                    <TABLE.TableTdd>{link[i]}</TABLE.TableTdd>
                    <TABLE.TableTdd>{link[i]}</TABLE.TableTdd>
                    <TABLE.TableTdd>{link[i]}</TABLE.TableTdd>
                    <TABLE.TableTdd>{link[i]}</TABLE.TableTdd>

                  </TABLE.TableTRR>
                </TABLE.TableTbody>
              ))}
          </TABLE.TableWrapper>
      ):( <div>Exteranl Reference Links/Notes Not Defined!</div>)}
        
    </React.Fragment>
  );
};

export default ExternalResourceTabData;
