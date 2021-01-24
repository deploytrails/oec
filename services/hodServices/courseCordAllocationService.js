import fetch from "cross-fetch";

export const getRegulations = async () => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getRegulationsFromCourses`,
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

export const getCoursesForAllocation = async (
  semesterID,
  hodEmployeeID,
  regulation
) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getSemesterSectionCoursesForAllocation?semesterID=${semesterID}&hodEmployeeID=${hodEmployeeID}&regulation=${regulation}`,
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

export const getListOfFaculties = async (employeeID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getDetailsOfAllocatedCourseCoordinator?employeeID=${employeeID}`,
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

export const getAllocatedCourses = async (employeeID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getCourseDetailsAllocatedToFaculty?employeeID=${employeeID}`,
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

export const deteleAllocatedCourses = async (coordinatorID) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/deleteCourseCoordinatorAllocatedCourse?coordinatorID=${coordinatorID}`,
      {
        method: "POST",
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
