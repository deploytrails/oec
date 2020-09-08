import fetch from "cross-fetch";
const APIBaseUrl = "http://15.206.245.247:8081/";
export const getProfileData = async (employeId) => {
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/ProfileServlet?employeeID=${employeId}`,
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

export const getQualificationDetails = async (employeId) => {
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/getDynamicQualification?employeeID=${employeId}`,
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

export const getWorkExpDetails = async (employeId) => {
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/getWorkExperience?employeeID=${employeId}`,
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

export const getBookPubDetails = async (employeId) => {
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/getBookPublications?employeeID=${employeId}`,
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

export const getResearchGuidlines = async (employeId) => {
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/getResearchGuidance?employeeID=${employeId}`,
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

export const getWorkshopDetails = async (employeId) => {
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/getWorkShops?employeeID=${employeId}`,
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

export const getgrantsDetails = async (employeId) => {
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/getGrantReceived?employeeID=${employeId}`,
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

export const getConferenceDetails = async (employeId) => {
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/getConferenceDetails?employeeID=${employeId}`,
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

export const getPhdDetails = async (employeId) => {
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/getPhdDetails?employeeID=${employeId}`,
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

//update profile api's
export const updatePhdDetails = async (
  employeId,
  dataObj = {
    researchTitle: researchTitle,
    university: university,
    registeredYear: registeredYear,
    phdstatus: phdstatus,
    dateAward: dateAward,
    supervisorName: supervisorName,
    supervisionAff: supervisionAff,
    deptId: deptId,
    phdDetailsId: phdDetailsId,
  }
) => {
  const enc = encodeURIComponent(JSON.stringify(dataObj));
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/insertPhdDetails?employeeID=${employeId}&insertData=${enc}`,
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
//delete phd Details
export const deletePhdDetails = async (phdDetailsId) => {
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/deletePhdDetails?phdDetailsID=${phdDetailsId}`,
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

//update conference
export const updateConfDetails = async (
  employeId,
  dataObj = {
    typeOfconferencename: typeOfconferencename,
    titleConference: titleConference,
    internationalNational: internationalNational,
    organizedBy: organizedBy,
    confMonYear: confMonYear,
    typeOfIssn: typeOfIssn,
    issnIsbnNo: issnIsbnNo,
    typeOfissue: typeOfissue,
    issueNo: issueNo,
    depart: depart,
    conferenceID: conferenceID,
  },
  deptId,
  state
) => {
  const enc = encodeURIComponent(JSON.stringify(dataObj));
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/insertConferenceDetails?employeeID=${employeId}&insertData=${enc}&deptId=${deptId}&state=${state}`,
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
//delete conference details
export const deleteConferenceDetails = async (conferenceID) => {
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/deleteConference?conferenceID=${conferenceID}`,
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

//update Grant
export const updateGrantDetails = async (
  employeId,
  dataObj = {
    department: department,
    grantrcvdID: grantrcvdID,
    nameco: nameco,
    scheme: scheme,
    amtsan: amtsan,
    sanlettr: sanlettr,
    utipostoday: utipostoday,
    uticerdet: uticerdet,
    yeargrant: yeargrant,
  },
  state
) => {
  const enc = encodeURIComponent(JSON.stringify(dataObj));
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/addGrantReceived?employeeID=${employeId}&insertData=${enc}&state=${state}`,
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

//delete Grant details
export const deleteGrantDetails = async (grantrcvdID) => {
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/deleteGrantReceived?grantrcvdID=${grantrcvdID}`,
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

//update Workshop
export const updateWorkshopDetails = async (
  employeId,
  dataObj = {
    workdeptId: workdeptId,
    workID: workID,
    typeOfWorkshopname: typeOfWorkshopname,
    orgnizedBy: orgnizedBy,
    duration: duration,
    monYear: monYear,
    place: place,
    typeOfworkshop: typeOfworkshop,
  },
  state
) => {
  const enc = encodeURIComponent(JSON.stringify(dataObj));
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/insertWorkShops?employeeID=${employeId}&insertData=${enc}&state=${state}`,
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

//delete Workshop details
export const deleteWorkshopDetails = async (workID, employeeID, state) => {
  try {
    const response = await fetch(
      `${APIBaseUrl}faculty/deleteWorkShops?workID=${workID}&employeeID=${employeeID}&state=${state}`,
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
