import fetch from "cross-fetch";
export const getProfileData = async employeId => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/ProfileServlet?employeeID=${employeId}`,
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getQualificationDetails = async employeId => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getDynamicQualification?employeeID=${employeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteQualificationDetails = async qualificationID => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/deleteQualificationData?qualificationId=${qualificationID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateQualificationDetails = async (
  employeeID,
  dataObj = {
    qualificationID: qualificationID,
    collegeName: collegeName,
    branchName: branchName,
    qualificationType: qualificationType,
    yearOfPass: yearOfPass
  }
) => {
  const state = "saveDynamicQualification";
  const fileName = "test.jpg";

  const enc = encodeURIComponent(JSON.stringify(dataObj));
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/saveDynamicQualification?&qualJsonData=${enc}&filename=${fileName}&state=${state}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWorkExpDetails = async employeId => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getWorkExperience?employeeID=${employeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//update work exp details
export const updateWorkExpDetails = async (
  employeId,
  dataObj = {
    workExperienceId: workExperienceId,
    employee: { employeePrimaryId: employeId },
    collegename: collegename,
    designation: designation,
    responsibilites: responsibilites,
    expFrom: expFrom,
    expTo: expTo
  },
  state
) => {
  const enc = encodeURIComponent(JSON.stringify(dataObj));
  const testFile = "testFile.jpg";
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/saveWorkExperience?workJsonData=${enc}&filename=${testFile}&state=${state}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//delete work Exp details
export const deleteWorkExpDetails = async workID => {
  try {
    console.log(workID);
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/deleteWorkExperience?workExpID=${workID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBookPubDetails = async employeId => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getBookPublications?employeeID=${employeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getResearchGuidlines = async employeId => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getResearchGuidance?employeeID=${employeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWorkshopDetails = async employeId => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getWorkShops?employeeID=${employeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getgrantsDetails = async employeId => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getGrantReceived?employeeID=${employeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getConferenceDetails = async employeId => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getConferenceDetails?employeeID=${employeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPhdDetails = async employeId => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/getPhdDetails?employeeID=${employeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
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
    phdDetailsId: phdDetailsId
  }
) => {
  const enc = encodeURIComponent(JSON.stringify(dataObj));
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/insertPhdDetails?employeeID=${employeId}&insertData=${enc}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
//delete phd Details
export const deletePhdDetails = async phdDetailsId => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/deletePhdDetails?phdDetailsID=${phdDetailsId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
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
    conferenceID: conferenceID
  },
  deptId,
  state
) => {
  const enc = encodeURIComponent(JSON.stringify(dataObj));
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/insertConferenceDetails?employeeID=${employeId}&insertData=${enc}&deptId=${deptId}&state=${state}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
//delete conference details
export const deleteConferenceDetails = async conferenceID => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/deleteConference?conferenceID=${conferenceID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
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
    yeargrant: yeargrant
  },
  state
) => {
  const enc = encodeURIComponent(JSON.stringify(dataObj));
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/addGrantReceived?employeeID=${employeId}&insertData=${enc}&state=${state}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//delete Grant details
export const deleteGrantDetails = async grantrcvdID => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/deleteGrantReceived?grantrcvdID=${grantrcvdID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
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
    typeOfworkshop: typeOfworkshop
  },
  state
) => {
  const enc = encodeURIComponent(JSON.stringify(dataObj));
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/insertWorkShops?employeeID=${employeId}&insertData=${enc}&state=${state}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
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
      `${process.env.APIBaseUrl}faculty/deleteWorkShops?workID=${workID}&employeeID=${employeeID}&state=${state}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//update Guidlience
export const updateResearchGuidlinesDetails = async (
  employeId,
  dataObj = {
    ResearchGuidanceID: ResearchGuidanceID,
    scholarName: scholarName,
    yearOfAdmission: yearOfAdmission,
    typeofAcademic: typeofAcademic,
    topic: topic,
    universityName: universityName,
    status: status
  },
  state
) => {
  const enc = encodeURIComponent(JSON.stringify(dataObj));
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/insertResearchGuidance?employeeID=${employeId}&insertData=${enc}&state=${state}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//delete Workshop details
export const deleteGuidlinesDetails = async (resrhGuidanceID, state) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/deleteResearchGuidance?resrhGuidanceID=${resrhGuidanceID}&state=${state}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//update Guidlience
export const updateBookPublicationsDetails = async (
  employeId,
  dataObj = {
    bookID: bookID,
    bookTitlePublication: bookTitlePublication,
    bookPublisherName: bookPublisherName,
    bookPublicationType: bookPublicationType,
    isbn: isbn,
    bookyear: bookyear,
    status: status
  },
  state
) => {
  const enc = encodeURIComponent(JSON.stringify(dataObj));
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/insertBookPublications?employeeID=${employeId}&insertData=${enc}&state=${state}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//delete Workshop details
export const deleteBookDetails = async (bookID, state) => {
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/deleteBookPublications?bookID=${bookID}&state=${state}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//update Guidlience
export const updateContactDetails = async (
  dataObj = {
    mobileNumber: mobileNumber,
    alternateMobile: alternateMobile,
    email: email,
    alternateEmail: alternateEmail,
    address: address,
    lastName: lastName,
    fatherName: fatherName,
    achievements: achievements,
    surName: surName,
    gender: gender,
    prefix: prefix,
    quinaryprogram: quinaryprogram,
    password: password,
    researchActivities: researchActivities,
    department: department,
    employeePrimaryId: employeePrimaryId,
    quaternaryprogram: quaternaryprogram,
    associationType: associationType,
    dateOfBirth: dateOfBirth,
    aadharNo: aadharNo,
    tertiaryprogram: tertiaryprogram,
    firstName: firstName,
    secondaryprogram: secondaryprogram,
    dateOfJoining: dateOfJoining,
    employeeType: employeeType,
    aicteId: aicteId,
    senaryprogram: senaryprogram,
    designation: designation,
    jntuhID: jntuhID,
    panCardNo: panCardNo,
    username: username,
    status: status,
    septenaryprogram: septenaryprogram,
    dept: dept,
    dept1: dept1,
    dept2: dept2,
    dept3: dept3,
    dept4: dept4,
    dept5: dept5
  },
  state
) => {
  const enc = encodeURIComponent(JSON.stringify(dataObj));
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/updateRec?updateData=${enc}&state=${state}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//update Profile
export const updateProfileDetails = async (
  dataObj = {
    prefix: prefix,
    firstName: firstName,
    lastName: lastName,
    surName: surName,
    gender: gender,
    dateOfBirth: dateOfBirth,
    fatherName: fatherName,
    employeeType: employeeType,
    associationType: associationType,
    dateOfJoining: dateOfJoining,
    dateOfLeaving: dateOfLeaving,
    aadharNo: aadharNo,
    panCardNo: panCardNo,
    jntuhID: jntuhID,
    aicteId: aicteId,
    achievements: achievements,
    researchActivities: researchActivities,
    mobileNumber: mobileNumber,
    quinaryprogram: quinaryprogram,
    password: password,
    department: department,
    email: email,
    employeePrimaryId: employeePrimaryId,
    alternateEmail: alternateEmail,
    quaternaryprogram: quaternaryprogram,
    address: address,
    tertiaryprogram: tertiaryprogram,
    secondaryprogram: secondaryprogram,
    alternateMobile: alternateMobile,
    senaryprogram: senaryprogram,
    designation: designation,
    username: username,
    status: status,
    septenaryprogram: septenaryprogram,
    dept: dept,
    dept1: dept1,
    dept2: dept2,
    dept3: dept3,
    dept4: dept4,
    dept5: dept5
  },
  state
) => {
  const enc = encodeURIComponent(JSON.stringify(dataObj));
  try {
    const response = await fetch(
      `${process.env.APIBaseUrl}faculty/updateRec?updateData=${enc}&state=${state}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
