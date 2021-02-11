import React, { useState, useEffect } from "react";
import * as TABLE from "../../../components/dashboards/styles/table.styles";
import { getPos } from "../../../services/allocateServices";
import Cookies from "js-cookie";

const CoPoModelData = ({ activeTabData, FacultyId }) => {
  const [allocatedCoursesPos, setAllocatedCoursesPos] = useState([]);
  const loadCourseFacultyData = async () => {
    const coursePoInfo = await getPos(
      activeTabData[1].courseCode.substring(
        0,
        activeTabData[1].courseCode.length - 2
      ),
      FacultyId,
      "ForGetPos"
    );
    setAllocatedCoursesPos(coursePoInfo.POS[0]);
    // console.log(coursePoInfo);
  };

  useEffect(() => {
    loadCourseFacultyData();
  }, []);
  return (
    <React.Fragment>
      {allocatedCoursesPos ? (
        <div>
          <label>
            <b>Course Code:</b>
          </label>
          <span>&nbsp;{activeTabData[1].courseCode}</span>
          <br></br>
          <label>
            <b>Course Name:</b>
          </label>
          <span>&nbsp;{activeTabData[1].courseName}</span>

          <TABLE.TableWrapper>
            <TABLE.TableTR>
              {allocatedCoursesPos && (
                <TABLE.TableTh>CO/PO & PSO</TABLE.TableTh>
              )}
              {allocatedCoursesPos.po1 && <TABLE.TableTh>PO1</TABLE.TableTh>}
              {allocatedCoursesPos.po2 && <TABLE.TableTh>PO2</TABLE.TableTh>}
              {allocatedCoursesPos.po3 && <TABLE.TableTh>PO3</TABLE.TableTh>}
              {allocatedCoursesPos.po4 && <TABLE.TableTh>PO4</TABLE.TableTh>}
              {allocatedCoursesPos.po5 && <TABLE.TableTh>PO5</TABLE.TableTh>}
              {allocatedCoursesPos.po6 && <TABLE.TableTh>PO6</TABLE.TableTh>}
              {allocatedCoursesPos.po7 && <TABLE.TableTh>PO7</TABLE.TableTh>}
              {allocatedCoursesPos.po8 && <TABLE.TableTh>PO8</TABLE.TableTh>}
              {allocatedCoursesPos.po9 && <TABLE.TableTh>PO9</TABLE.TableTh>}
              {allocatedCoursesPos.po10 && <TABLE.TableTh>PO10</TABLE.TableTh>}
              {allocatedCoursesPos.po11 && <TABLE.TableTh>PO11</TABLE.TableTh>}
              {allocatedCoursesPos.po12 && <TABLE.TableTh>PO12</TABLE.TableTh>}
              {allocatedCoursesPos.pso1 && <TABLE.TableTh>PSO1</TABLE.TableTh>}
              {allocatedCoursesPos.pso2 && <TABLE.TableTh>PSO2</TABLE.TableTh>}
              {allocatedCoursesPos.pso3 && <TABLE.TableTh>PSO3</TABLE.TableTh>}
              <TABLE.TableTh>Action</TABLE.TableTh>
            </TABLE.TableTR>
            <TABLE.TableTRR>
              <TABLE.TableTdd></TABLE.TableTdd>
              {allocatedCoursesPos.po1 && (
                <TABLE.TableTdd>Engineering knowledge</TABLE.TableTdd>
              )}
              {allocatedCoursesPos.po2 && (
                <TABLE.TableTdd>Problem analysis</TABLE.TableTdd>
              )}
              {allocatedCoursesPos.po3 && (
                <TABLE.TableTdd>Design/development of solutions</TABLE.TableTdd>
              )}
              {allocatedCoursesPos.po4 && (
                <TABLE.TableTdd>
                  Conduct investigations of complex problems
                </TABLE.TableTdd>
              )}
              {allocatedCoursesPos.po5 && (
                <TABLE.TableTdd>Modern tool usage</TABLE.TableTdd>
              )}
              {allocatedCoursesPos.po6 && (
                <TABLE.TableTdd>The engineer and society</TABLE.TableTdd>
              )}
              {allocatedCoursesPos.po7 && (
                <TABLE.TableTdd>Environment and sustainability</TABLE.TableTdd>
              )}
              {allocatedCoursesPos.po8 && (
                <TABLE.TableTdd>Ethics</TABLE.TableTdd>
              )}
              {allocatedCoursesPos.po9 && (
                <TABLE.TableTdd>Individual and team work</TABLE.TableTdd>
              )}
              {allocatedCoursesPos.po10 && (
                <TABLE.TableTdd>Communication</TABLE.TableTdd>
              )}
              {allocatedCoursesPos.po11 && (
                <TABLE.TableTdd>Project management and finance</TABLE.TableTdd>
              )}
              {allocatedCoursesPos.po12 && (
                <TABLE.TableTdd>Life-long learning</TABLE.TableTdd>
              )}
              {allocatedCoursesPos.pso1 && (
                <TABLE.TableTdd>{allocatedCoursesPos.pso1}</TABLE.TableTdd>
              )}
              {allocatedCoursesPos.pso2 && (
                <TABLE.TableTdd>{allocatedCoursesPos.pso2}</TABLE.TableTdd>
              )}
              {allocatedCoursesPos.pso3 && (
                <TABLE.TableTdd>{allocatedCoursesPos.pso3}</TABLE.TableTdd>
              )}
            </TABLE.TableTRR>
          </TABLE.TableWrapper>
        </div>
      ) : (
        <div>CO-PO Mapping not defined!</div>
      )}
    </React.Fragment>
  );
};

export default CoPoModelData;
