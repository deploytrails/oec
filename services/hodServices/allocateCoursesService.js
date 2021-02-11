import fetch from "cross-fetch";

export const getAcadProgrmFacultyData = async (employeeID) => {
    try {
      const response = await fetch(
        `${process.env.APIBaseUrl}faculty/getAllocatedFaculty?employeeID=${employeeID}`,
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

  export const getSemsterData = async (academicID,departmentID) => {
    try {
      const response = await fetch(
        `${process.env.APIBaseUrl}faculty/getAllocatedSemesters?academicID=${academicID}&departmentID=${departmentID}`,
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
  
  export const getSectionsData = async (semesterID) => {
    try {
      const response = await fetch(
        `${process.env.APIBaseUrl}faculty/getAllocatedSemestersSections?semesterID=${semesterID}`,
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

  export const getCoursesData = async (semesterID,sectionID,hodEmployeeID) => {
    try {
      const response = await fetch(
        `${process.env.APIBaseUrl}faculty/getAllocatedSemesterSectionCourses?semesterID=${semesterID}&sectionID=${sectionID}&hodEmployeeID=${hodEmployeeID}`,
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

  export const getSubjExpData = async (courseCode,academicYearID,employeeID) => {
    try {
      const response = await fetch(
        `${process.env.APIBaseUrl}faculty/getAllocatedFacultySubjectExp?courseCode=${courseCode}&academicYearID=${academicYearID}&employeeID=${employeeID}`,
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

  export const getFacultyCoursesData = async (employeeID) => {
    try {
      const response = await fetch(
        `${process.env.APIBaseUrl}faculty/getFacultyAllocatedCourses?employeeID=${employeeID}`,
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

  export const insertAllocateCouse = async ( values ) => {
    try {
      const response = await fetch(
        `${process.env.APIBaseUrl}faculty/allocateCourseToFaculty`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            primaryEmployeeID:values.Faculty,
            secondaryEmployeeID:values.SecondaryFaculty,
            tertiaryEmployeeID:values.TertiaryFaculty,
            quaternaryEmployeeID:values.QuaternaryFaculty,
            courseID:values.courseId,
            semesterID:values.Semester,
            experience:values.experience,
            academicID:values.AcadYear,
            courseCode:values.courseCode,
            courseName:values.courseName
          }),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };