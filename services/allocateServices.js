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

export const insertTextBook = async (
  facultyID,
  courseID,
  bookName,
  authorName
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/insertRefBook?courseID=${courseID}&facultyID=${facultyID}&bookName=${bookName}&authorName=${authorName}`,
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

export const updateTextBook = async (courseBookID, bookName, authorName) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/updateCourseBook?courseBookID=${courseBookID}&bookName=${bookName}&authorName=${authorName}`,
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

export const removeTextBook = async (refBookID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/deleteRefBook?refBookID=${refBookID}`,
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

export const insertRefBook = async (
  facultyID,
  courseID,
  bookName,
  authorName,
  units
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/insertRefBook2?courseID=${courseID}&facultyID=${facultyID}&bookName=${bookName}&authorName=${authorName}&units=${units}`,
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

export const updateRefTextBook = async (
  courseRefBookID,
  bookName,
  authorName,
  units
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/updateRefBook2?courseRefBookID=${courseRefBookID}&bookName=${bookName}&authorName=${authorName}&units=${units}`,
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

export const removeRefBook = async (courseRefBookID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/deleteRefBook2?courseRefBookID=${courseRefBookID}`,
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

export const insertRefLink = async (
  facultyID,
  courseID,
  priorityNo,
  refLink,
  refDesc,
  unitSelect,
  typeSelect
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/insertRefLink?facultyID=${facultyID}&courseID=${courseID}&priorityNo=${priorityNo}&refLink=${refLink}&refDesc=${refDesc}&unitSelect=${unitSelect}&typeSelect=${typeSelect}`,
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

export const removeRefLink = async (courseResourceID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/deleteRefLink?courseResourceID=${courseResourceID}`,
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

export const updateRefLink = async (
  courseResourceID,
  priorityNo,
  refLink,
  refDesc,
  unitSelect,
  typeSelect
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/updateRefLink?courseResourceID=${courseResourceID}&priorityNo=${priorityNo}&refLink=${refLink}&refDesc=${refDesc}&unitSelect=${unitSelect}&typeSelect=${typeSelect}`,
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

export const getAllocatedPeriods = async (
  semesterId,
  date,
  courseId,
  FacultyID,
  section
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getPeriods?semesterId=${semesterId}&date=${date}&courseId=${courseId}&FacultyID=${FacultyID}&section=${section}`,

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

export const saveExtraClasses = async (
  roomId,
  facultyID,
  period,
  selectedDate
) => {
  try {
    const encPeriods = encodeURIComponent(JSON.stringify(period));
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/saveExtraClass?roomId=${roomId}&period=${encPeriods}&selectedDate=${selectedDate}&facultyID=${facultyID}`,

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
