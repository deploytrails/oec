import React, { useState, useEffect } from "react";
import { getStudentFinanceDetail } from "../../../../services/mentoringServices";
import * as TABLE from "../../../../components/dashboards/styles/table.styles";

const FinanceDetails = ({ studentEnrollId }) => {
  const [isFinanceData, setIsFinanceData] = useState([]);
  const loadStudentFinanceData = async () => {
    const financeData = await getStudentFinanceDetail(studentEnrollId);
    setIsFinanceData(financeData.studentFinanceDetails[0]);
    // console.log(isFinanceData);
  };

  useEffect(() => {
    loadStudentFinanceData();
  }, []);
  return (
    <React.Fragment>
      {isFinanceData ? (
        <TABLE.TableWrapper>
          <TABLE.TableTR>
            <TABLE.TableTh>Fee Type</TABLE.TableTh>
            <TABLE.TableTh>Fee Charged</TABLE.TableTh>
            <TABLE.TableTh>Fee Paid</TABLE.TableTh>
            <TABLE.TableTh>Fee Balance</TABLE.TableTh>
          </TABLE.TableTR>
          <TABLE.TableTRR>
            <TABLE.TableTdd>{isFinanceData.feetype1}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.tuitioncharged}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.tuitionpaid}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.tuitionbal}</TABLE.TableTdd>
          </TABLE.TableTRR>
          <TABLE.TableTRR>
            <TABLE.TableTdd>{isFinanceData.feetype2}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.academiccharged}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.academicpaid}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.academicbal}</TABLE.TableTdd>
          </TABLE.TableTRR>

          <TABLE.TableTRR>
            <TABLE.TableTdd>{isFinanceData.feetype3}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.transportcharged}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.transportpaid}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.tuitionbal}</TABLE.TableTdd>
          </TABLE.TableTRR>

          <TABLE.TableTRR>
            <TABLE.TableTdd>{isFinanceData.feetype4}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.hostelcharged}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.hostelpaid}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.hostelbal}</TABLE.TableTdd>
          </TABLE.TableTRR>
          <TABLE.TableTRR>
            <TABLE.TableTdd>{isFinanceData.feetype5}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.crtcharged}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.crtpaid}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.crtbal}</TABLE.TableTdd>
          </TABLE.TableTRR>

          <TABLE.TableTRR>
            <TABLE.TableTdd>{isFinanceData.feetype6}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.alumincharged}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.aluminpaid}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.aluminbal}</TABLE.TableTdd>
          </TABLE.TableTRR>

          <TABLE.TableTRR>
            <TABLE.TableTdd>{isFinanceData.feetype7}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.othercharged}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.hostelpaid}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.otherpaid}</TABLE.TableTdd>
          </TABLE.TableTRR>

          <TABLE.TableTRR>
            <TABLE.TableTdd>Total</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.totalcharged}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.totalpaid}</TABLE.TableTdd>
            <TABLE.TableTdd>{isFinanceData.totalbal}</TABLE.TableTdd>
          </TABLE.TableTRR>
        </TABLE.TableWrapper>
      ) : (
        <div>Data Not Available!</div>
      )}
      <br></br>
    </React.Fragment>
  );
};

export default FinanceDetails;
