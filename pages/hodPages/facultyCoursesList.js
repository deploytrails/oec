import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { getAllocatedCoursesData } from "../../services/hodServices/facultyCoursesListService";
import Cookies from "js-cookie";
import TableWrap from "../../components/TableUtilities/TableWrap";
// import Pagination from "../../components/TableUtilities/pagination";
import PulseLoader from "react-spinners/PulseLoader";
const FacultyCoursesList = () => {
  const ProfileId = Cookies.get("employeeID");
  const [isAllocatedCoursesData, setIsAllocatedCoursesData] = useState([]);
  const [isNonAllocatedCoursesData, setIsNonAllocatedCoursesData] = useState(
    []
  );
  const [isButtonText, setIsButtonText] = useState();
  const [ispulseLoader, setIspulseLoader] = useState(true);

  // const [countPerPage] = useState(10);
  // const [currentPage, setCurrentPage] = useState(1);
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const indexOfLastPost = currentPage * countPerPage;
  // const indexOfFirstPost = indexOfLastPost - countPerPage;
  useEffect(() => {
    loadAllocatedCoursesData();
  }, []);

  const loadAllocatedCoursesData = async () => {
    const cData = await getAllocatedCoursesData(ProfileId);
    setIsAllocatedCoursesData(cData?.allocatedCourseList);
    setIsNonAllocatedCoursesData(cData?.nonAllocatedCourseList);
    setIspulseLoader((IspulseLoader) => !IspulseLoader);
  };

  const tdValuesAllocatedCourses = [
    { valueProperty: "employeeNumber" },
    { valueProperty: "employeeName" },
    { valueProperty: "courseCode" },
    { valueProperty: "courseName" },
    { valueProperty: "courseType" },
    { valueProperty: "academicYear" },
    { valueProperty: "departmentCode" },
    { valueProperty: "semesterCode" },
    { valueProperty: "sectionName" },
    { valueProperty: "facultyLevel" },
  ];

  const thValuesAllocatedCourses = [
    "Faculty Number",
    "Faculty Name",
    "Course Code",
    "Course Name",
    "Course Type",
    "Academic Year",
    "Program",
    "Semester",
    "Section",
    "Faculty Level",
  ];

  const tdValuesNonAllocatedCourses = [
    { valueProperty: "courseCode" },
    { valueProperty: "courseName" },
    { valueProperty: "courseType" },
  ];

  const thValuesNonAllocatedCourses = [
    "Course Code",
    "Course Name",
    "Course Type",
  ];

  return (
    <React.Fragment>
      <Layout>
        <div className="grid grid-rows-1 grid-flow-col gap-4">
          <div>
            <h1 className="text-2xl font-bold leading-tight text-gray-900">
              {!isButtonText ? "Allocated Courses" : "Non-Allocated Courses"}
            </h1>
          </div>
          <div>
            <button
              type="button"
              className=" float-right bg-blue-400 block  mx-auto px-2 py-1 rounded"
              onClick={() => setIsButtonText(!isButtonText)}
            >
              {!isButtonText ? "Allocated Courses" : "Non-Allocated Courses"}
            </button>
          </div>
        </div>

        {ispulseLoader ? (
          <PulseLoader size="10" color="#3aafa9" />
        ) : (
          <>
            {!isButtonText ? (
              <div>
                {isAllocatedCoursesData && isAllocatedCoursesData.length > 0 ? (
                  <TableWrap
                    thValues={thValuesAllocatedCourses}
                    tdValues={tdValuesAllocatedCourses}
                    data={isAllocatedCoursesData}
                  />
                ) : (
                  <div
                    className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                    role="alert"
                  >
                    <p className="font-bold">
                      {" "}
                      Allocated Courses are Not Avaliable
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {isNonAllocatedCoursesData &&
                isNonAllocatedCoursesData.length > 0 ? (
                  <TableWrap
                    thValues={thValuesNonAllocatedCourses}
                    tdValues={tdValuesNonAllocatedCourses}
                    data={isNonAllocatedCoursesData}
                  />
                ) : (
                  <div
                    className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                    role="alert"
                  >
                    <p className="font-bold">
                      Non-Allocated Courses are Not Avaliable
                    </p>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </Layout>
    </React.Fragment>
  );
};

export default FacultyCoursesList;
