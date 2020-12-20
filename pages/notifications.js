import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Cookies from "js-cookie";
import { Formik } from "formik";
import css from "@emotion/css";
import { COLORS } from "../constants";
import * as TABLE from "../components/dashboards/styles/table.styles";
import { getNotificationData } from "../services/notificationService";
import ToggleBox from "../components/General/toggleBox";

const Notifications = () => {
  const [notificationData, setNotificationData] = useState([]);
  const facultyId = Cookies.get("employeeID");

  const getNotification = async () => {
    const data = await getNotificationData(facultyId);
    setNotificationData(data);
  };

  useEffect(() => {
    getNotification();
  }, []);

  //console.log(notificationData);

  return (
    <React.Fragment>
      <Layout>
        <div className="clearfix px-2 pb-2">
          <ToggleBox />
        </div>
        <div className="clearfix px-6 pb-6" id="senderArray">
          <TABLE.TableWrapper>
            <TABLE.TableTR>
              <TABLE.TableTh>Sender & Receiver Date</TABLE.TableTh>
              <TABLE.TableTh>Sender & Receiver Start Time </TABLE.TableTh>
              <TABLE.TableTh>Sender & Receiver End Time </TABLE.TableTh>
              <TABLE.TableTh>Sender Name </TABLE.TableTh>
              <TABLE.TableTh>Sender Course </TABLE.TableTh>
              <TABLE.TableTh>Sender Semester </TABLE.TableTh>
              <TABLE.TableTh>Receiver Name </TABLE.TableTh>
              <TABLE.TableTh>Receiver Course </TABLE.TableTh>
              <TABLE.TableTh>Receiver Semester </TABLE.TableTh>
            </TABLE.TableTR>

            {notificationData?.senderArray?.map((notifi, index) => (
              <TABLE.TableTRR key={index}>
                <TABLE.TableTdd>{notifi[0]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[1]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[2]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[3]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[5]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[7]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[4]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[6]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[8]}</TABLE.TableTdd>
              </TABLE.TableTRR>
            ))}
            {notificationData?.receiverArray?.map((notifi, index) => (
              <TABLE.TableTRR key={index}>
                <TABLE.TableTdd>{notifi[0]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[1]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[2]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[3]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[5]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[7]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[4]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[6]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[8]}</TABLE.TableTdd>
              </TABLE.TableTRR>
            ))}
          </TABLE.TableWrapper>
        </div>

        {/* <div className="clearfix px-6 pb-6" id="receiverArray">
          <TABLE.TableWrapper>
            <TABLE.TableTR>
              <TABLE.TableTh>Sender & Receiver Date</TABLE.TableTh>
              <TABLE.TableTh>Sender & Receiver Start Time </TABLE.TableTh>
              <TABLE.TableTh>Sender & Receiver End Time </TABLE.TableTh>
              <TABLE.TableTh>Sender Name </TABLE.TableTh>
              <TABLE.TableTh>Sender Course </TABLE.TableTh>
              <TABLE.TableTh>Sender Semester </TABLE.TableTh>
              <TABLE.TableTh>Receiver Name </TABLE.TableTh>
              <TABLE.TableTh>Receiver Course </TABLE.TableTh>
              <TABLE.TableTh>Receiver Semester </TABLE.TableTh>
            </TABLE.TableTR>

            {notificationData?.receiverArray?.map((notifi, index) => (
              <TABLE.TableTRR key={index}>
                <TABLE.TableTdd>{notifi[0]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[1]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[2]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[3]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[5]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[7]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[4]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[6]}</TABLE.TableTdd>
                <TABLE.TableTdd>{notifi[8]}</TABLE.TableTdd>
              </TABLE.TableTRR>
            ))}
          </TABLE.TableWrapper>
        </div> */}
      </Layout>
    </React.Fragment>
  );
};

export default Notifications;
