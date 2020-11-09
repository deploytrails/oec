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
    console.log(activeTabData);
  };

  useEffect(() => {
    loadCourseFacultyData();
  }, []);
  return (
    <React.Fragment>
      {allocatedCoursesPos.length > 0 ? (
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
              {allocatedCoursesPos[0] && (
                <TABLE.TableTh>CO/PO & PSO</TABLE.TableTh>
              )}
              {allocatedCoursesPos[0] && <TABLE.TableTh>PO1</TABLE.TableTh>}
              {allocatedCoursesPos[1] && <TABLE.TableTh>PO2</TABLE.TableTh>}
              {allocatedCoursesPos[2] && <TABLE.TableTh>PO3</TABLE.TableTh>}
              {allocatedCoursesPos[3] && <TABLE.TableTh>PO4</TABLE.TableTh>}
              {allocatedCoursesPos[4] && <TABLE.TableTh>PO5</TABLE.TableTh>}
              {allocatedCoursesPos[5] && <TABLE.TableTh>PO6</TABLE.TableTh>}
              {allocatedCoursesPos[6] && <TABLE.TableTh>PO7</TABLE.TableTh>}
              {allocatedCoursesPos[7] && <TABLE.TableTh>PO8</TABLE.TableTh>}
              {allocatedCoursesPos[8] && <TABLE.TableTh>PO9</TABLE.TableTh>}
              {allocatedCoursesPos[9] && <TABLE.TableTh>PO10</TABLE.TableTh>}
              {allocatedCoursesPos[10] && <TABLE.TableTh>PO11</TABLE.TableTh>}
              {allocatedCoursesPos[11] && <TABLE.TableTh>PO12</TABLE.TableTh>}
              {allocatedCoursesPos[12] && <TABLE.TableTh>PSO1</TABLE.TableTh>}
              {allocatedCoursesPos[13] && <TABLE.TableTh>PSO2</TABLE.TableTh>}
              {allocatedCoursesPos[14] && <TABLE.TableTh>PSO3</TABLE.TableTh>}
            </TABLE.TableTR>
            <TABLE.TableTRR>
              <TABLE.TableTdd></TABLE.TableTdd>
              {allocatedCoursesPos[0] && (
                <TABLE.TableTdd>Engineering knowledge</TABLE.TableTdd>
              )}
              {allocatedCoursesPos[1] && (
                <TABLE.TableTdd>Problem analysis</TABLE.TableTdd>
              )}
              {allocatedCoursesPos[2] && (
                <TABLE.TableTdd>Design/development of solutions</TABLE.TableTdd>
              )}
              {allocatedCoursesPos[3] && (
                <TABLE.TableTdd>
                  Conduct investigations of complex problems
                </TABLE.TableTdd>
              )}
              {allocatedCoursesPos[4] && (
                <TABLE.TableTdd>Modern tool usage</TABLE.TableTdd>
              )}
              {allocatedCoursesPos[5] && (
                <TABLE.TableTdd>The engineer and society</TABLE.TableTdd>
              )}
              {allocatedCoursesPos[6] && (
                <TABLE.TableTdd>Environment and sustainability</TABLE.TableTdd>
              )}
              {allocatedCoursesPos[7] && (
                <TABLE.TableTdd>Ethics</TABLE.TableTdd>
              )}
              {allocatedCoursesPos[8] && (
                <TABLE.TableTdd>Individual and team work</TABLE.TableTdd>
              )}
              {allocatedCoursesPos[9] && (
                <TABLE.TableTdd>Communication</TABLE.TableTdd>
              )}
              {allocatedCoursesPos[10] && (
                <TABLE.TableTdd>Project management and finance</TABLE.TableTdd>
              )}
              {allocatedCoursesPos[11] && (
                <TABLE.TableTdd>Life-long learning</TABLE.TableTdd>
              )}
              {allocatedCoursesPos[12] && (
                <TABLE.TableTdd>{allocatedCoursesPos[12]}</TABLE.TableTdd>
              )}
              {allocatedCoursesPos[13] && (
                <TABLE.TableTdd>{allocatedCoursesPos[13]}</TABLE.TableTdd>
              )}
              {allocatedCoursesPos[14] && (
                <TABLE.TableTdd>{allocatedCoursesPos[14]}</TABLE.TableTdd>
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
