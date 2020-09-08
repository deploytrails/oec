import React from "react";
import * as TABLE from "./styles/table.styles";
import PulseLoader from "react-spinners/PulseLoader";

const Attendance = ({ nonAttenData }) => {
  console.log("nonAttenData", nonAttenData);
  return (
    <React.Fragment>
      <TABLE.TableTypeSection>
        <TABLE.TBHeader>Non-Posted Attendance Dates</TABLE.TBHeader>
      </TABLE.TableTypeSection>
      {/*Table Starte */}

      <TABLE.TableWrapper>
        <TABLE.TableTR>
          <TABLE.TableTh>Date</TABLE.TableTh>
          <TABLE.TableTh>Course Name</TABLE.TableTh>
          <TABLE.TableTh>Semester</TABLE.TableTh>
          <TABLE.TableTh>Section</TABLE.TableTh>
          <TABLE.TableTh>Attendance Status</TABLE.TableTh>
        </TABLE.TableTR>

        {!nonAttenData && <PulseLoader size="10" color="#3aafa9" />}

        <TABLE.TableTR>
          <TABLE.TableTd>
            {nonAttenData?.dates &&
              nonAttenData.dates.map((date) => <span>{date}</span>)}
          </TABLE.TableTd>
          <TABLE.TableTd>
            {nonAttenData?.courses &&
              nonAttenData.courses.map((cource) => <span>{cource}</span>)}
          </TABLE.TableTd>
          <TABLE.TableTd>
            {nonAttenData?.semesters &&
              nonAttenData.semesters.map((semi) => <span>{semi}</span>)}
          </TABLE.TableTd>
          <TABLE.TableTd>
            {nonAttenData?.sections &&
              nonAttenData.sections.map((sec) => <span>{sec}</span>)}
          </TABLE.TableTd>
          <TABLE.TableTd>
            <button>Post Attendance</button>
          </TABLE.TableTd>
        </TABLE.TableTR>
      </TABLE.TableWrapper>
    </React.Fragment>
  );
};

export default Attendance;
