import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { getExamDetails } from "../../services/examScheduleService";
import Cookies from "js-cookie";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import moment from "moment";

const ExamInvigilation = () => {
  const ProfileId = Cookies.get("employeeID");
  const [scheduleList, setScheduleList] = useState([]);
  const getExamDetailsList = async () => {
    const data = await getExamDetails(ProfileId, "ForInvigilation");
    setScheduleList(data?.examinvigilation);
    console.log(data);
  };

  useEffect(() => {
    getExamDetailsList();
  }, []);
  return (
    <React.Fragment>
      <Layout>
        {scheduleList && scheduleList.length ? (
          <TABLE.TableWrapper>
            <TABLE.TableTR>
              <TABLE.TableTh>Academic Year</TABLE.TableTh>
              <TABLE.TableTh>Degree </TABLE.TableTh>
              <TABLE.TableTh>Room No. </TABLE.TableTh>
              <TABLE.TableTh>Exam Type</TABLE.TableTh>
              <TABLE.TableTh>Exam Date</TABLE.TableTh>
              <TABLE.TableTh>Exam Slot</TABLE.TableTh>
            </TABLE.TableTR>

            {scheduleList &&
              scheduleList.length &&
              scheduleList.map(student => (
                <TABLE.TableTRR>
                  <TABLE.TableTdd>{student[11]}</TABLE.TableTdd>
                  <TABLE.TableTdd>{student[13]}</TABLE.TableTdd>
                  <TABLE.TableTdd>{student[14]}</TABLE.TableTdd>
                  <TABLE.TableTdd>{student[16]}</TABLE.TableTdd>
                  <TABLE.TableTdd>
                    {moment(student[4]).format("DD/MM/YYYY")}
                  </TABLE.TableTdd>
                  <TABLE.TableTdd>{student[5]}</TABLE.TableTdd>
                </TABLE.TableTRR>
              ))}
          </TABLE.TableWrapper>
        ) : (
          <div>Exam Not Scheduled!</div>
        )}
      </Layout>
    </React.Fragment>
  );
};

export default ExamInvigilation;
