import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { getCoursedData, getSyllabusData } from "../services/courceCoordinatorAllocationService";
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
      <Layout className="h-screen">
        <div>
          <TABLE.TableWrapper>
            <TABLE.TableTR>
              <TABLE.TableTh>Course Code</TABLE.TableTh>
              <TABLE.TableTh>Course Name</TABLE.TableTh>
              <TABLE.TableTh>Semester Year</TABLE.TableTh>
              <TABLE.TableTh>Semester No.</TABLE.TableTh>
            </TABLE.TableTR>
            {isCourseData &&
              isCourseData.length &&
              isCourseData.map((course, i) => (
                <TABLE.TableTbody key={isCourseData[i].coordinatorId}>
                  <TABLE.TableTRR
                    onClick={() =>
                      getExpandedRowData(isCourseData[i].coordinatorId)
                    }
                  >
                    <TABLE.TableTdd>{course[i].coursecode}</TABLE.TableTdd>
                    <TABLE.TableTdd>{course[i].coursename}</TABLE.TableTdd>
                    <TABLE.TableTdd>{course[i].semesteryear}</TABLE.TableTdd>
                    <TABLE.TableTdd>{course[i].semesterno}</TABLE.TableTdd>
                  </TABLE.TableTRR>
                  {isCocrdinatorId === isCourseData[i].coordinatorId && (
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

export default CourseCoordinatorAllocation;
