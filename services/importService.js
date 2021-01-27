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

export const uploadCourseOutcomeFile = async (fil) => {
  try {
    var data1 = new FormData();
    data1.append("file", fil);

    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/CourseOutComesDataForInsert`,
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

export const uploadSubjectExpFile = async (fil) => {
  try {
    var data1 = new FormData();
    data1.append("file", fil);

    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/HrFacSubjectExpDataForInsert`,
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

export const uploadPeoFile = async (fil) => {
  try {
    var data1 = new FormData();
    data1.append("file", fil);

    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/uploadPEOImportFile`,
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

export const uploadPopsoFile = async (fil) => {
  try {
    var data1 = new FormData();
    data1.append("file", fil);

    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/uploadPOPSOImportFile`,
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
