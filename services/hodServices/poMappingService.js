import fetch from "cross-fetch";

export const getProgrmPOData = async (employeeID) => {
    try {
      const response = await fetch(
        `${process.env.APIBaseUrl}faculty/getDepartmentData?employeeID=${employeeID}`,
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

export const getVisionMissionPOData = async (departId) => {
    try {
      const response = await fetch(
        `${process.env.APIBaseUrl}faculty/getvmData?departmentID=${departId}`,
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

  export const insertPOVission = async ( values ) => {
    try {
      const response = await fetch(
        `${process.env.APIBaseUrl}faculty/setVmData`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            vmID:values.vmID,
            vision:values.vision,
            mission:values.mission,
            departmentID:values.Program
            }),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };  


  export const getPoPsoData = async (departId) => {
    try {
      const response = await fetch(
        `${process.env.APIBaseUrl}faculty/getpopsoData?departmentID=${departId}`,
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

  export const insertPoPSoData = async ( values ) => {
    try {
      const response = await fetch(
        `${process.env.APIBaseUrl}faculty/setPopsoData`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            popsoID:values.popsoID,
            po1:values.po1,
            po2:values.po2,
            po3:values.po3,
            po4:values.po4,
            po5:values.po5,
            po6:values.po6,
            po7:values.po7,
            po8:values.po8,
            po9:values.po9,
            po10:values.po10,
            po11:values.po11,
            po12:values.po12,
            pso1:values.pso1,
            pso2:values.pso2,
            pso3:values.pso3,
            departmentID:values.Program
            }),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };  


  export const getPEOData = async (departId) => {
    try {
      const response = await fetch(
        `${process.env.APIBaseUrl}faculty/getpeoData?departmentID=${departId}`,
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


  export const insertPEOData = async ( values ) => {
    try {
      const response = await fetch(
        `${process.env.APIBaseUrl}faculty/setPeoData`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            peoID:values.peoID,
            peo1:values.peo1,
            peo2:values.peo2,
            peo3:values.peo3,
            peo4:values.peo4,
            peo5:values.peo5,
            departmentID:values.Program
            }),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };    

