import React, { useState } from "react";
import Layout from "../components/layout";
import { css } from "@emotion/core";
import ImportFileModal from "./importsModal/importsFileModal";
import { uploadCourseObjectiveFile } from "../services/importService";

const Imports = () => {
  const [show, setShow] = useState(false);
  const [importName, setImportName] = useState("");
  const [uploadFucntionName, setUploadFucntionName] = useState("");
  const [result, setResult] = useState();

  const importLinks = [
    {
      name: "Course Objectives",
      icon: <img src="/dash-icon-1.png" width="100" />,
      functionName: "COBJ",
    },
    {
      name: "Course Outcomes",
      icon: <img src="/dash-icon-2.png" width="100" />,
      functionName: "COUT",
    },
  ];
  const toggleModal = (item) => {
    setImportName(item?.name ? item?.name : "");
    setUploadFucntionName(item?.functionName ? item?.functionName : "");
    setShow(!show);
  };

  const successfun = async () => {
    if (result?.status && result?.status?.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const uploadFucntionProp = async (file) => {
    if (uploadFucntionName === "COBJ") {
      setResult(await uploadCourseObjectiveFile(file));
      successfun();
    } else if (uploadFucntionName === "COUT") {
    }

    // setcourseObj(result);
    // uploadRef.current.innerHTML = courseObj;
  };

  return (
    <React.Fragment>
      <Layout>
        <div className="clearfix  h-screen">
          {importLinks &&
            importLinks.map((item) => (
              <div
                className="w-4/12 float-left text-center relative"
                onClick={() => toggleModal(item)}
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
        <ImportFileModal
          toggleModal={toggleModal}
          importName={importName}
          uploadFucntionProp={uploadFucntionProp}
        />
      )}
    </React.Fragment>
  );
};

export default Imports;
