import React, { useState } from "react";
import Layout from "../components/layout";
import { css } from "@emotion/core";
import ImportFileModal from "./importsModal/importsFileModal";
import { 
  uploadCourseObjectiveFile,
  uploadCourseOutcomeFile,
  uploadSubjectExpFile 
  } from "../services/importService";

const Imports = () => {
  const [show, setShow] = useState(false);
  const [importName, setImportName] = useState("");
  const [uploadFucntionName, setUploadFucntionName] = useState("");
  const [result, setResult] = useState();

  const importLinks = [
    {
      name: "Course Objectives",
      icon: <img src="/dash-icon-1.png" width="100" />,
      functionName: "COBJ"
    },
    {
      name: "Course Outcomes",
      icon: <img src="/dash-icon-2.png" width="100" />,
      functionName: "COUT"
    },
    {
      name: "Subject Experience",
      icon: <img src="/dash-icon-6.png" width="100" />,
      functionName: "SUBJEXP"
    }
  ];
  const showModal = (item) => {
    setImportName(item?.name);
    setUploadFucntionName(item?.functionName);
    setShow(true);
  };
  const toggleModal = () => {
    setShow(false);
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
      console.log(result);
      //successfun();
    } 
    else if (uploadFucntionName === "COUT") {
      setResult(await uploadCourseOutcomeFile(file));
    }
    else if (uploadFucntionName === "SUBJEXP") {
      setResult(await uploadSubjectExpFile(file));
    }
    

    // setcourseObj(result);
    // uploadRef.current.innerHTML = courseObj;
  };

  return (
    <React.Fragment>
      <Layout>
        <div>
          {importLinks &&
            importLinks.map((item) => (
              <div
                className="w-4/12 float-left text-center relative"
                onClick={() => showModal(item)}
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
        {result?.status && (
          <div className="clearfix my-4">
            <div className="w-6/12 float-left">
              <h3 className="font-sans font-bold text-red-600">
                {importName} Import Result
              </h3>
              <label>
                Total Records Present : {result?.status?.length}
                <br></br>
                Total Records Inserted :{" "}
                {
                  (result?.status.filter(
                    (stat) => stat === " Saved successfully"
                  )).length
                }
              </label>
            </div>
          </div>
        )}
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
