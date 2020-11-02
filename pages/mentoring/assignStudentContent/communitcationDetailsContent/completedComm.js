import React, { useState, useEffect } from "react";
import { getCommunicationDetail } from "../../../../services/mentoringServices";
import * as TABLE from "../../../../components/dashboards/styles/table.styles";
import Cookies from "js-cookie";
import moment from "moment";

const CompletedComData = ({ studentEnrollId }) => {
  const [isComData, setIsComData] = useState([]);
  const ProfileId = Cookies.get("employeeID");
  const loadComData = async () => {
    const comData = await getCommunicationDetail(studentEnrollId, ProfileId);
    setIsComData(comData.completedCommunication);
    console.log(comData.completedCommunication);
  };

  useEffect(() => {
    loadComData();
  }, []);
  return (
    <React.Fragment>
      <TABLE.TableWrapper>
        <TABLE.TableTR>
          <TABLE.TableTh>Communication No</TABLE.TableTh>
          <TABLE.TableTh>Date</TABLE.TableTh>
          <TABLE.TableTh>Communication Mode</TABLE.TableTh>
          <TABLE.TableTh>Communication Type</TABLE.TableTh>
          <TABLE.TableTh>Action Item</TABLE.TableTh>
          <TABLE.TableTh>Action Item Status</TABLE.TableTh>
          <TABLE.TableTh>Communication Details</TABLE.TableTh>
          <TABLE.TableTh>Remarks</TABLE.TableTh>
        </TABLE.TableTR>

        {isComData &&
          isComData.length &&
          isComData.map(comm => (
            <TABLE.TableTRR>
              <TABLE.TableTdd>{comm.communicationNo}</TABLE.TableTdd>
              <TABLE.TableTdd>
                {moment(comm.commuDate).format("DD/MMM/YYYY")}
              </TABLE.TableTdd>
              <TABLE.TableTdd>{comm.commuMode}</TABLE.TableTdd>

              <TABLE.TableTdd>{comm.commuType}</TABLE.TableTdd>
              <TABLE.TableTdd>{comm.commuActionItem}</TABLE.TableTdd>
              <TABLE.TableTdd>{comm.commuActionStatus}</TABLE.TableTdd>

              <TABLE.TableTdd>{comm.commuDetails}</TABLE.TableTdd>
              <TABLE.TableTdd>{comm.commuRemarks}</TABLE.TableTdd>
            </TABLE.TableTRR>
          ))}
      </TABLE.TableWrapper>
      <br></br>
    </React.Fragment>
  );
};

export default CompletedComData;
