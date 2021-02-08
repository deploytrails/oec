import React from "react";
import { css } from "@emotion/core";
import * as STYLES from "../../components/General/modalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as TABLE from "../../components/dashboards/styles/table.styles";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ViewMarksEntry = (
  {
  closeMarksView,
  studentMarks,
  questions,
  courseCode,
  courseName
}

) => {

const findMarks = (question,item) => {
//console.log(question,"   ",item);
const value = item.newMarks.filter((element) => {
  return element.questionNumber === question
   }
);
return value[0].marks;
}


  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper
        css={css`
          width: 95%;
          overflow: hidden;
          overflow-x: scroll;
        `}
      >
        <STYLES.PopupTitle>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={closeMarksView}
            style={{ float: "right" }}
          />
          <h2 className="font-sans text-lg font-bold">
            <p>Student Marks</p>
            <p>
              {courseName} {"(" + courseCode + ")"}{" "}
            </p>
          </h2>
        </STYLES.PopupTitle>
        {!studentMarks || studentMarks <= 0 ? (
          <div>No Data Available</div>
        ) : (
          <TABLE.TableWrapper>
            <React.Fragment>
              <TABLE.TableTR>
                <TABLE.TableTh>S.No</TABLE.TableTh>
                <TABLE.TableTh>Roll No.</TABLE.TableTh>
                <TABLE.TableTh>Student Name</TABLE.TableTh>
                {questions &&
                  questions.map((item, i) => (
                    <TABLE.TableTh>
                      {"Q"}
                      {item?.questionNumber}
                      {item?.questionName}
                    </TABLE.TableTh>
                  ))}
              </TABLE.TableTR>
              {studentMarks &&
                studentMarks.map((item, i) => (
                  <TABLE.TableTRR key={item?.enrollstudentId}>
                    <TABLE.TableTdd>{i + 1}</TABLE.TableTdd>
                    <TABLE.TableTdd>{item?.roll}</TABLE.TableTdd>
                    <TABLE.TableTdd>{item?.firstName}</TABLE.TableTdd>
                    {questions &&
                  questions.map((itemquesiton, i) => (
                    <TABLE.TableTdd>
                      {findMarks(itemquesiton?.questionNumber+itemquesiton?.questionName,item)}
                    </TABLE.TableTdd>
                  ))}
                    
                  </TABLE.TableTRR>
                ))}
            </React.Fragment>
          </TABLE.TableWrapper>
        )}
      </STYLES.PopupWrapper>
    </STYLES.PopupMask>
  );
};

export default ViewMarksEntry;
