import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Cookies from "js-cookie";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import {
  getTeachingStaffData,
  getNonTeachingStaffData,
} from "../../services/hodServices/staffServices";

const Staff = () => {
  const ProfileId = Cookies.get("employeeID");
  const [isStaffData, setIsStaffData] = useState([]);

  const loadTeachingStaffData = async () => {
    const cData = await getTeachingStaffData(ProfileId);
    // setIsStaffData(cData?.allocatedCoursesDetails.allocateCourse);
    console.log(cData);
  };
  const loadNonTeachingStaffData = async () => {
    const cData = await getNonTeachingStaffData(ProfileId);
    //  setIsStaffData(cData?.allocatedCoursesDetails.allocateCourse);
  };

  useEffect(() => {
    loadTeachingStaffData();
  }, []);
  return (
    <React.Fragment>
      <Layout className="h-screen">
        <div>
          <TABLE.TableWrapper>
            <TABLE.TableTR>
              <TABLE.TableTh>Course Code</TABLE.TableTh>
              <TABLE.TableTh>Course Name</TABLE.TableTh>
              <TABLE.TableTh>Semester Year</TABLE.TableTh>
              <TABLE.TableTh>Semester No.</TABLE.TableTh>
            </TABLE.TableTR>
            {isStaffData &&
              isStaffData.length &&
              isStaffData.map((course, i) => (
                <TABLE.TableTbody key={isStaffData[i].coordinatorId}>
                  <TABLE.TableTRR
                    onClick={() =>
                      getExpandedRowData(isStaffData[i].coordinatorId)
                    }
                  >
                    <TABLE.TableTdd>{course[i].coursecode}</TABLE.TableTdd>
                    <TABLE.TableTdd>{course[i].coursename}</TABLE.TableTdd>
                    <TABLE.TableTdd>{course[i].semesteryear}</TABLE.TableTdd>
                    <TABLE.TableTdd>{course[i].semesterno}</TABLE.TableTdd>
                  </TABLE.TableTRR>
                  {isCocrdinatorId === isStaffData[i].coordinatorId && (
                    <TABLE.TableTRR>
                      <td
                        colSpan={4}
                        css={css`
                          padding-left: 15px !important;
                        `}
                      >
                        {console.log("Test My logic")}
                        <CourseTabsWrap
                          getExpandedRowData={getExpandedRowData}
                          courseData={course[i]}
                        />
                      </td>
                    </TABLE.TableTRR>
                  )}
                </TABLE.TableTbody>
              ))}
          </TABLE.TableWrapper>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Staff;
