import React, { useState } from "react";
import Layout from "../components/layout";
import { css } from "@emotion/core";
import ImportFileModal from "./importsModal/importsFileModal";

const Imports = () => {
  const [show, setShow] = useState(false);
  const [importName, setImportName] = useState("");
  const importLinks = [
    {
      name: "Attendance Import",
      icon: <img src="/dash-icon-1.png" width="100" />,
    },
    {
      name: "Marks Import",
      icon: <img src="/dash-icon-2.png" width="100" />,
    },
  ];
  const toggleModal = (impName) => {
    setImportName(impName);
    setShow(!show);
  };

  return (
    <React.Fragment>
      <Layout>
        <div className="clearfix  h-screen">
          {importLinks &&
            importLinks.map((item) => (
              <div
                className="w-4/12 float-left text-center relative"
                onClick={() => toggleModal(item.name)}
              >
                <a className=" p-4 bg-white shadow  box-border block m-1 font-bold hover:shadow-2xl hover:text-green-400">
                  <span
                    css={css`
                      display: block;
                    `}
                  >
                    <span
                      css={css`
                        display: block;
                        margin: 0px auto;
                        width: 100px;
                      `}
                    >
                      {item.icon}
                    </span>
                    {item.name}
                  </span>
                </a>
              </div>
            ))}
        </div>
      </Layout>
      {show && (
        <ImportFileModal toggleModal={toggleModal} importName={importName} />
      )}
    </React.Fragment>
  );
};

export default Imports;
