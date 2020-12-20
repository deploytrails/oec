import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Cookies from "js-cookie";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import {
  getTeachingStaffData,
  getNonTeachingStaffData,
} from "../../services/hodServices/staffServices";
import Pagination from "../../components/TableUtilities/pagination";
import css from "@emotion/css";

const Staff = () => {
  const ProfileId = Cookies.get("employeeID");
  const [isStaffData, setIsStaffData] = useState([]);
  const [isButtonText, setIsButtonText] = useState();
  const [countPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * countPerPage;
  const indexOfFirstPost = indexOfLastPost - countPerPage;
  const currentPosts = isStaffData.slice(indexOfFirstPost, indexOfLastPost);

  const loadTeachingStaffData = async () => {
    const cData = await getTeachingStaffData(ProfileId);
    setIsStaffData(cData?.teachingStaffDetails);
    console.log(cData);
    setIsButtonText(!isButtonText);
  };
  const loadNonTeachingStaffData = async () => {
    const cData = await getNonTeachingStaffData(ProfileId);
    setIsStaffData(cData?.nonTeachingStaffDetails);
    console.log(cData);
    setIsButtonText(!isButtonText);
  };

  useEffect(() => {
    loadTeachingStaffData();
    setIsButtonText(true);
  }, []);
  return (
    <React.Fragment>
      <Layout>
        <div>
          <div>
            <button
              type="button"
              className=" float-right bg-blue-400 block  mx-auto px-2 py-1 rounded"
              onClick={
                isButtonText ? loadNonTeachingStaffData : loadTeachingStaffData
              }
            >
              {isButtonText ? "Non-Teaching Staff" : "Teaching Staff"}
            </button>
            <TABLE.TableWrapper>
              <TABLE.TableTR>
                <TABLE.TableTh>Faculty Number</TABLE.TableTh>
                <TABLE.TableTh>Faculty Name</TABLE.TableTh>
                <TABLE.TableTh>Designation</TABLE.TableTh>
                <TABLE.TableTh> Highest Qualification</TABLE.TableTh>
                <TABLE.TableTh> Total Years of Experience</TABLE.TableTh>
              </TABLE.TableTR>
              <TABLE.TableTbody>
                {currentPosts &&
                  currentPosts.length &&
                  currentPosts.map((staff) => (
                    <TABLE.TableTRR key={staff.teachingStaffID}>
                      <TABLE.TableTdd>
                        {staff.teachingStaffID || staff.nonTeachingStaffID}
                      </TABLE.TableTdd>
                      <TABLE.TableTdd>
                        {staff.teachingStaffName || staff.nonTeachingStaffName}
                      </TABLE.TableTdd>
                      <TABLE.TableTdd>
                        {staff.teachingStaffDisg || staff.nonTeachingStaffDisg}
                      </TABLE.TableTdd>
                      <TABLE.TableTdd>
                        {staff.teachingStaffhigestQual ||
                          staff.nonTeachingStaffhigestQual}
                      </TABLE.TableTdd>
                      <TABLE.TableTdd>
                        {staff.teachingStaffExp || staff.nonTeachingStaffExp}
                      </TABLE.TableTdd>
                    </TABLE.TableTRR>
                  ))}
              </TABLE.TableTbody>
            </TABLE.TableWrapper>
          </div>
          <Pagination
            countPerPage={countPerPage}
            totalRecs={isStaffData.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Staff;
