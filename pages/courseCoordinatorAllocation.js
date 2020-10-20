import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { getCoursedData } from "../services/courceCoordinatorAllocationService";
import Cookies from "js-cookie";
import * as TABLE from "../components/dashboards/styles/table.styles";
import css from "@emotion/css";
import CourseTabsWrap from "./courseCoordinatorAllocationContent/courseTabsWrap";

const CourseCoordinatorAllocation = () => {
  const ProfileId = Cookies.get("employeeID");
  const [isCourseData, setIsCourseData] = useState([]);
  const [isCocrdinatorId, setIsCocrdinatorId] = useState("");

  const loadCourseData = async () => {
    const cData = await getCoursedData(ProfileId);
    setIsCourseData(cData?.allocatedCoursesDetails.allocateCourse);
  };

  const getExpandedRowData = async id => {
    isCocrdinatorId == id ? setIsCocrdinatorId("") : setIsCocrdinatorId(id);
  };

  useEffect(() => {
    loadCourseData();
  }, []);
  return (
    <React.Fragment>
      <Layout>
        <div className="h-screen">
          <TABLE.TableWrapper>
            <TABLE.TableTR>
              <TABLE.TableTh>Course Code</TABLE.TableTh>
              <TABLE.TableTh>Course Name</TABLE.TableTh>
              <TABLE.TableTh>Semester Year</TABLE.TableTh>
              <TABLE.TableTh>Semester No.</TABLE.TableTh>
            </TABLE.TableTR>
            {isCourseData &&
              isCourseData.length &&
              isCourseData.map(course => (
                <TABLE.TableTbody key={isCourseData[0].coordinatorId}>
                  <TABLE.TableTRR
                    onClick={() =>
                      getExpandedRowData(isCourseData[0].coordinatorId)
                    }
                  >
                    <TABLE.TableTdd>{course[0].coursecode}</TABLE.TableTdd>
                    <TABLE.TableTdd>{course[0].coursename}</TABLE.TableTdd>
                    <TABLE.TableTdd>{course[0].semesteryear}</TABLE.TableTdd>
                    <TABLE.TableTdd>{course[0].semesterno}</TABLE.TableTdd>
                  </TABLE.TableTRR>
                  {isCocrdinatorId == isCourseData[0].coordinatorId && (
                    <TABLE.TableTRR>
                      <td
                        colSpan={4}
                        css={css`
                          padding-left: 15px !important;
                        `}
                      >
                        <CourseTabsWrap
                          getExpandedRowData={getExpandedRowData}
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

export default CourseCoordinatorAllocation;
