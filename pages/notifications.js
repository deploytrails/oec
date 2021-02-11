import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Cookies from "js-cookie";
import { getNotificationData } from "../services/notificationService";
import TableWrap from "../components/TableUtilities/TableWrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";

const Notifications = () => {
  const [notificationData, setNotificationData] = useState([]);
  const facultyId = Cookies.get("employeeID");
  const [reqButton, setReqButton] = useState(true);

  const getNotification = async () => {
    const data = await getNotificationData(facultyId);
    setNotificationData(data);
  };

  useEffect(() => {
    getNotification();
  }, []);

  const toolBarFunction = () => {
    if (reqButton) {
      return (
        <button class="buttonWhite" onClick={() => setReqButton(!reqButton)}>
          View Incoming Requests&nbsp;
          <FontAwesomeIcon icon={faArrowCircleDown} />
        </button>
      );
    } else {
      return (
        <button class="buttonWhite" onClick={() => setReqButton(!reqButton)}>
          View Outgoing Requests&nbsp;
          <FontAwesomeIcon icon={faArrowCircleUp} />
        </button>
      );
    }
  };

  const thValues = [
    "Sender & Receiver Date",
    "Sender & Receiver Start Time",
    "Sender & Receiver End Time",
    "Sender Name",
    "Sender Course",
    "Sender Semester",
    "Receiver Name",
    "Receiver Course",
    "Receiver Semester",
  ];

  const tdValues = [
    { valueProperty: "0" },
    { valueProperty: "1" },
    { valueProperty: "2" },
    { valueProperty: "3" },
    { valueProperty: "5" },
    { valueProperty: "7" },
    { valueProperty: "4" },
    { valueProperty: "6" },
    { valueProperty: "8" },
  ];
  //console.log(notificationData);

  return (
    <React.Fragment>
      <Layout>
        {notificationData?.senderArray &&
          !reqButton &&
          notificationData?.senderArray?.length > 0 && (
            <TableWrap
              thValues={thValues}
              tdValues={tdValues}
              data={notificationData?.senderArray}
              toolBar={toolBarFunction}
            />
          )}
        {notificationData?.receiverArray &&
          reqButton &&
          notificationData?.receiverArray?.length > 0 && (
            <TableWrap
              thValues={thValues}
              tdValues={tdValues}
              data={notificationData?.receiverArray}
              toolBar={toolBarFunction}
            />
          )}
      </Layout>
    </React.Fragment>
  );
};

export default Notifications;
