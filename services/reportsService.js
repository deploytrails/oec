export const getCourseCodeListInfo = async (facultyID) => {
    try {
        const response = await fetch(
            `${process.env.APIBaseUrl}faculty/MarksEntryServlet/ForCourse?FacultyID=${facultyID}`,
            {
                method: "GET",
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
//getDownloadCourseRegisterReport(empName,courseId,startDate,endDate,ProfileId,courseCode,deptName,courseName);
export const getDownloadCourseRegisterReport=async (empName,courseId,startDate,endDate,ProfileId,courseCode,deptName,courseName)=>{
    try{
        const name="courseregister";
        const operation="downloadreport";

        const response = await fetch(`${process.env.APIBaseUrl}faculty/DownloadAttendenceServlet/?name=${name}&operation=${operation}&empName=${empName}&courseparam=${courseId}&param2=${startDate}&param3=${endDate}&empID=${ProfileId}&coursecode=${courseCode}&coursename=${courseName}&deptname=${deptName}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/vnd.ms-excel",
            },
        });
    }catch (error) {
        console.log(error);
    }
};
export const getCourseCodeDetails= async (facultyID) => {
    try {
        const response = await fetch(
            `${process.env.APIBaseUrl}faculty/getInitialCourse/?FacultyID=${facultyID}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const getStudentDetails= async (rollNo) => {
    try {
        const response = await fetch(
            `${process.env.APIBaseUrl}faculty/getStudentDetails/?rollNo=${rollNo}`,
            {
                method: "GET",
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
export const getCoursesData= async (facultyNo) => {
    try {
        const response = await fetch(
            `${process.env.APIBaseUrl}faculty/fetchAllocatedCourses/?employeeID=${facultyNo}`,
            {
                method: "GET",
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
export const getFacultyData= async (facultyNo) => {
    try {
        const response = await fetch(
            `${process.env.APIBaseUrl}faculty/getFacultyDataForFacultyHandlingReport/?facNumber=${facultyNo}`,
            {
                method: "GET",
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
export const getDeptFacultyDataForTimeTable= async (deptID) => {
    try {
        const response = await fetch(
            `${process.env.APIBaseUrl}faculty/getAllFacultiesForHODTT/?departmentID=${deptID}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                },
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
