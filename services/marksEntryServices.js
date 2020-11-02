import fetch from "cross-fetch";


export const getMarksByFacultyId = async (facultyID) => {
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

export const getMarksToViewByCourseId = async (examScheduleID, courseCode, examTypeId) => {
    try {
        const response = await fetch(
            `${process.env.APIBaseUrl}faculty/MarksEntryServlet/ForGetMarks?examScheduleId=${examScheduleID}&courseCode=${courseCode}&examTypeId=${examTypeId}`,
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