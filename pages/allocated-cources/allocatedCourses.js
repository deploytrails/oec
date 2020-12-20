import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { getallocatedcoursesData } from "../../services/allocateServices";
import Cookies from "js-cookie";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import OperationsModal from "./allocatedCoursesContent/operationsModel";

const AllocatedCouses = () => {
  const [isAllocatedCourseData, setIsAllocatedCourseData] = useState([]);
  const [show, setShow] = useState(false);
  const FacultyId = Cookies.get("employeeID");
  const [activeButton, setActiveButton] = useState(0);
  const [activeTabData, setActiveTabData] = useState(0);
  const toggleModal = async (id, courseData) => {
    setActiveButton(id);
    setActiveTabData(courseData);
    setShow(!show);
  };

  const loadAllocatedCourseData = async () => {
    const courseInfo = await getallocatedcoursesData(FacultyId);
    setIsAllocatedCourseData(courseInfo?.allocatedCoursesDetails.CourseDetails);
    // console.log(courseInfo.allocatedCoursesDetails.CourseDetails);
  };

  useEffect(() => {
    loadAllocatedCourseData();
  }, []);
  return (
    <React.Fragment>
      <Layout>
        <div className="h-screen">
          {isAllocatedCourseData && isAllocatedCourseData.length ? (
            <TABLE.TableWrapper>
              <TABLE.TableTR>
                <TABLE.TableTh>Course Code</TABLE.TableTh>
                <TABLE.TableTh>Course Name</TABLE.TableTh>
                <TABLE.TableTh>Semester</TABLE.TableTh>
                <TABLE.TableTh>Section</TABLE.TableTh>
                <TABLE.TableTh></TABLE.TableTh>
              </TABLE.TableTR>

              {isAllocatedCourseData &&
                isAllocatedCourseData.length &&
                isAllocatedCourseData.map((course) => (
                  <TABLE.TableTRR>
                    <TABLE.TableTdd>{course[0][1].courseCode}</TABLE.TableTdd>
                    <TABLE.TableTdd>{course[0][1].courseName}</TABLE.TableTdd>
                    <TABLE.TableTdd>{course[0][0].semesterCode}</TABLE.TableTdd>
                    <TABLE.TableTdd>{course[0][2].sectionName}</TABLE.TableTdd>
                    <TABLE.TableTdd>
                      <button
                        onClick={() => toggleModal(0, course[0])}
                        className="py-2 px-4 rounded  bg-blue-400 mr-2 text-center text-white mb-4 hover:bg-blue-500 focus:outline-none"
                      >
                        Reference
                      </button>
                      <button
                        onClick={() => toggleModal(1, course[0])}
                        className="py-2 px-4 rounded  bg-blue-400 mr-2 text-center text-white mb-4 hover:bg-blue-500 focus:outline-none"
                      >
                        CO-PO Mapping
                      </button>
                      <button
                        onClick={() => toggleModal(2, course[0])}
                        className="py-2 px-4 rounded  bg-blue-400 mr-2 text-center text-white mb-4 hover:bg-blue-500 focus:outline-none"
                      >
                        Extra Class
                      </button>
                    </TABLE.TableTdd>
                  </TABLE.TableTRR>
                ))}
            </TABLE.TableWrapper>
          ) : (
            <div>Courses Not Assigned!</div>
          )}
        </div>
        {show && (
          <OperationsModal
            toggleModal={toggleModal}
            activeButton={activeButton}
            activeTabData={activeTabData}
            FacultyId={FacultyId}
          />
        )}
      </Layout>
    </React.Fragment>
  );
};

export default AllocatedCouses;
