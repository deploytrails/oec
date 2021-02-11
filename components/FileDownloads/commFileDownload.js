import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { downloadData } from "../../services/commFileDownloadService";
const CommFileDownload = ({ buttonName, urlPath, fileName, type }) => {
  const handleDownload = async () => {
    // window.open("http://15.206.189.30:8081/faculty/" + urlPath);
    const cConfData = await downloadData(urlPath);
    const data = new Blob([cConfData], { type: type });
    const csvURL = window.URL.createObjectURL(data);
    let tempLink = document.createElement("a");
    tempLink.href = csvURL;
    tempLink.setAttribute("download", fileName);
    tempLink.click();
  };
  return (
    <React.Fragment>
      <button
        type="button"
        className="float-right bg-green-400 block  mx-auto px-2 py-1 rounded"
        onClick={() => handleDownload()}
      >
        Download {buttonName}
      </button>
    </React.Fragment>
  );
};

export default CommFileDownload;
