import React, { useState, useEffect, useRef } from "react";
import * as STYLES from "../../components/General/modalStyles";
import * as IMPRTCSS from "./importsModalStyle.js";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ImportFileModal = ({ toggleModal, importName, uploadFucntionProp }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [validFiles, setValidFiles] = useState([]);
  const [unsupportedFiles, setUnsupportedFiles] = useState([]);
  const fileInputRef = useRef();
  const uploadModalRef = useRef();
  const uploadRef = useRef();
  const progressRef = useRef();
  const validTypes = ["csv"];

  const fileInputClicked = () => {
    fileInputRef.current.click();
  };

  const filesSelected = () => {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files);
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  };
  const closeUploadModal = () => {
    uploadModalRef.current.style.display = "none";
  };

  const uploadFiles = async () => {
    uploadFucntionProp(validFiles[0]);
    uploadModalRef.current.style.display = "block";
    uploadRef.current.innerHTML = "File(s) Uploading...";

    progressRef.current.innerHTML = `100%`;
    progressRef.current.style.width = `100%`;
    setTimeout(function () {
      uploadRef.current.innerHTML = "File(s) Uploaded";
      validFiles.length = 0;
      setValidFiles([...validFiles]);
      setSelectedFiles([...validFiles]);
      setUnsupportedFiles([...validFiles]);
      toggleModal();
    }, 1000);

    /*const timer = setTimeout(() => {
      uploadRef.current.innerHTML = `<span class="error">Error Uploading File(s)</span>`;
      progressRef.current.style.backgroundColor = "red";
    }, 5000);
    return () => clearTimeout(timer);*/
  };

  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
      } else {
        files[i]["invalid"] = true;
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
        setErrorMessage("File type not permitted");
        setUnsupportedFiles((prevArray) => [...prevArray, files[i]]);
      }
    }
  };

  const validateFile = (file) => {
    if (
      validTypes.indexOf(file.name.substr(file.name.lastIndexOf(".") + 1)) ===
      -1
    ) {
      return false;
    }
    return true;
  };
  const fileSize = (size) => {
    if (size === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const fileType = (fileName) => {
    return (
      fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length) ||
      fileName
    );
  };

  const removeFile = (name) => {
    const validFileIndex = validFiles.findIndex((e) => e.name === name);
    validFiles.splice(validFileIndex, 1);
    setValidFiles([...validFiles]);
    const selectedFileIndex = selectedFiles.findIndex((e) => e.name === name);
    selectedFiles.splice(selectedFileIndex, 1);
    setSelectedFiles([...selectedFiles]);
    const unsupportedFileIndex = unsupportedFiles.findIndex(
      (e) => e.name === name
    );
    if (unsupportedFileIndex !== -1) {
      unsupportedFiles.splice(unsupportedFileIndex, 1);
      setUnsupportedFiles([...unsupportedFiles]);
    }
  };

  useEffect(() => {
    let filteredArray = selectedFiles.reduce((file, current) => {
      const x = file.find((item) => item.name === current.name);
      if (!x) {
        return file.concat([current]);
      } else {
        return file;
      }
    }, []);
    setValidFiles([...filteredArray]);
  }, [selectedFiles]);
  return (
    <>
      <STYLES.PopupMask>
        <STYLES.PopupWrapper>
          <STYLES.PopupTitle>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => toggleModal()}
              style={{ float: "right" }}
            />
            <IMPRTCSS.title>{importName}</IMPRTCSS.title>
          </STYLES.PopupTitle>

          <IMPRTCSS.content>
            <div>
              {unsupportedFiles.length === 0 && validFiles.length ? (
                <button
                  onClick={() => uploadFiles()}
                  className="py-1 px-2 rounded  bg-blue-400 mr-2 text-center text-white mb-4 hover:bg-blue-500 focus:outline-none"
                >
                  Upload File(s)
                </button>
              ) : (
                ""
              )}
              {unsupportedFiles.length ? (
                <p>Please remove all unsupported files.</p>
              ) : (
                ""
              )}
              <IMPRTCSS.dropContainer
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
                onClick={fileInputClicked}
              >
                <IMPRTCSS.dropMessage>
                  <input
                    ref={fileInputRef}
                    className="file-input"
                    type="file"
                    onChange={filesSelected}
                    css={css`
                      display: none;
                    `}
                  />
                  <IMPRTCSS.uploadIcon></IMPRTCSS.uploadIcon>
                  Drag & Drop files here or click to upload
                </IMPRTCSS.dropMessage>
              </IMPRTCSS.dropContainer>
              <IMPRTCSS.fileDisplayContainer>
                {validFiles.map((data, i) => (
                  <IMPRTCSS.fileStatusBar key={i}>
                    <div
                      css={css`
                        overflow: hidden;
                      `}
                    >
                      <IMPRTCSS.fileTypeLogo></IMPRTCSS.fileTypeLogo>
                      <IMPRTCSS.fileType>
                        {fileType(data.name)}
                      </IMPRTCSS.fileType>
                      <IMPRTCSS.fileName>
                        {data.invalid ? (
                          <IMPRTCSS.fileError> {data.name}</IMPRTCSS.fileError>
                        ) : (
                          <>{data.name}</>
                        )}
                      </IMPRTCSS.fileName>
                      <IMPRTCSS.fileSize>
                        ({fileSize(data.size)})
                      </IMPRTCSS.fileSize>{" "}
                      {data.invalid && (
                        <IMPRTCSS.fileErrorMessage>
                          ({errorMessage})
                        </IMPRTCSS.fileErrorMessage>
                      )}
                    </div>
                    <IMPRTCSS.fileRemove onClick={() => removeFile(data.name)}>
                      X
                    </IMPRTCSS.fileRemove>
                  </IMPRTCSS.fileStatusBar>
                ))}
              </IMPRTCSS.fileDisplayContainer>
            </div>
          </IMPRTCSS.content>
        </STYLES.PopupWrapper>
      </STYLES.PopupMask>
      <IMPRTCSS.uploadModal ref={uploadModalRef}>
        <div
          css={css`
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.66);
            position: absolute;
            top: 0;
            left: 0;
          `}
        >
          <IMPRTCSS.close onClick={() => closeUploadModal()}>X</IMPRTCSS.close>
          <IMPRTCSS.progressContainer>
            <span
              ref={uploadRef}
              css={css`
                display: flex;
                justify-content: center;
                padding-top: 20px;
                font-size: 20px;
              `}
            ></span>
            <IMPRTCSS.progress>
              <IMPRTCSS.progressBar ref={progressRef}></IMPRTCSS.progressBar>
            </IMPRTCSS.progress>
          </IMPRTCSS.progressContainer>
        </div>
      </IMPRTCSS.uploadModal>
    </>
  );
};
export default ImportFileModal;
