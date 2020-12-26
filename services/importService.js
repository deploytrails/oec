import fetch from "cross-fetch";

export const uploadCourseObjectiveFile = async (fil) => {
  try {
    var data1 = new FormData();
    data1.append("file", fil);

    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/CourseObjectivesDataForInsert`,
      {
        method: "POST",
        body: data1,
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
