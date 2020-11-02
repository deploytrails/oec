import fetch from "cross-fetch";

export const getAssignedStudentsList = async facultyID => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AssignedStudentsServletStudentsData`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          facultyID
        })
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getStudentProfileData = async enrollID => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AssignedStudentsServletprofile`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          enrollID
        })
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getStudentCourseFacultyDetail = async (
  enrollID,
  sectionID,
  semesterID
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AssignedStudentsServletFacultyCourse`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          enrollID,
          sectionID,
          semesterID
        })
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getStudentDiscrepancyDetail = async enrollID => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AssignedStudentsServletDiscrepancyIssue`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          enrollID
        })
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getStudentFinanceDetail = async enrollID => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AssignedStudentsServletStudentFinance`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          enrollID
        })
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getStudentAttendanceDetail = async enrollID => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AssignedStudentsServletAttendanceDetails`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          enrollID
        })
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getStudentMarksDetail = async enrollID => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AssignedStudentsServletMarksDetails`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          enrollID
        })
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCommunicationDetail = async (enrollID, facultyID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AssignedStudentsServletCompletedCommun`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          enrollID,
          facultyID
        })
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSelectedComDetail = async (enrollID, facultyID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AssignedStudentsServletCommModal`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          enrollID,
          facultyID,
          options: "ForCommunicationModal"
        })
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateComDetail = async (
  communicationData,
  enrollID,
  recordStatus,
  facultyID,
  commuNo,
  communDate
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/AssignedStudentsServletCommUpdate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          communicationData,
          enrollID,
          recordStatus,
          facultyID,
          commuNo,
          communDate
        })
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSemSection = async facultyID => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/DiscrepancyServlet/Initial?FacultyID=${facultyID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getSemSectionStudents = async sectionID => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/DiscrepancyServlet/ForStudents?sectionID=${sectionID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getDiscrepancyModelDetails = async (enrollID, FacultyID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/DiscrepancyServlet/ForDiscrepancyDetails?enrollID=${enrollID}&FacultyID=${FacultyID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const raiseIssueReq = async (
  enrollID,
  FacultyID,
  courseCode,
  issuedetail,
  date
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/DiscrepancyServlet/ForIssueReq?studentID=${enrollID}&FacultyID=${FacultyID}&courseCode=${courseCode}&issuedetail=${issuedetail}&date=${date}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    console.log(response);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
