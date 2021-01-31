import fetch from "cross-fetch";

export const getAttendanceList = async (facultyId, selectedDate, operation) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AttendanceServletInitial`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          facultyId,
          selectedDate,
          operation,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAttendanceListById = async (
  classDateId,
  courseId,
  coursecode,
  facultyId,
  operation,
  sectionId,
  semesterId
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AttendanceServletForStudents`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          classDateId,
          courseId,
          coursecode,
          facultyId,
          operation,
          sectionId,
          semesterId,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getallocatedcoursesData = async (facultyID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getAllocatedCourses2?facultyID=${facultyID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getPos = async (courseID, facultyID, options) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/COPOMappingServlet?courseID=${courseID}&facultyID=${facultyID}&options=${options}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getReferenceData = async (facultyID, courseID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getRefData?courseID=${courseID}&facultyID=${facultyID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const insertStudentAttendance = async (
  studentdataArray,
  facultyId,
  classdate,
  classStartTime,
  courseId,
  classDateId,
  semesterId,
  sectionId,
  selectedDate,
  operation
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AttendanceServletForInsertStudent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentdata: studentdataArray,
          facultyId,
          classdate,
          classStartTime,
          courseId,
          classDateId,
          semesterId,
          sectionId,
          selectedDate,
          operation,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateStudentAttendance = async (
  studentdataArray,
  coursecode,
  operation
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AttendanceServletForUpdateStudentAttendance`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentattendancedata: studentdataArray,
          coursecode,
          operation,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFacultyData = async (
  semesterId,
  employeeId,
  swapdate,
  getstartTime,
  getendTime,
  courseID,
  semsecID,
  dept
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AttendanceServletforSwapFaculties`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          semesterId: semesterId,
          employeeId: employeeId,
          swapdate: swapdate,
          getstartTime: getstartTime,
          getendTime: getendTime,
          courseID: courseID,
          semsecID: semsecID,
          dept: dept,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCoursesData = async (semesterId, employeeId) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AttendanceServletforAdjustPeriods?semID=${semesterId}&facID=${employeeId}`,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const insertAdjustPeriodtData = async (
  adjustFromObject,
  adjustFacultyID,
  adjustCourseID,
  facultyId,
  requestStatus,
  rquestClassDatePrimaryID
) => {
  try {
    const enc = encodeURIComponent(JSON.stringify(adjustFromObject));
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AttendanceServletforAdjustRequest`,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adjustFromObject: enc,
          adjustFacultyID: adjustFacultyID,
          adjustCourseID: adjustCourseID,
          facultyId: facultyId,
          requestStatus: requestStatus,
          rquestClassDatePrimaryID: rquestClassDatePrimaryID,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
