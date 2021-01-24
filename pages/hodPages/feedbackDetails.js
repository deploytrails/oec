import React, { useState } from "react";
import Layout from "../../components/layout";
import CommSelect from "./commAttribs/commSelect";
import {
  getHodFeedBackDetails,
  getFeedRecDetails,
} from "../../services/hodServices/feedBackDetService";
import TableTh from "../../components/TableUtilities/TableTh";
import * as TABLE from "../../components/dashboards/styles/table.styles";
import css from "@emotion/css";
import Cookies from "js-cookie";

const FeedbackDetails = () => {
  const [isFeedbackArr, setIsFeedbackArr] = useState([]);
  const [isSecChangeObj, setSecChangeObj] = useState({
    semesterID: "",
    sectionID: "",
  });
  const hodID = Cookies.get("employeeID");
  const [isModalData, setIModalData] = useState([]);

  const onChange = async (obj) => {
    const cData = await getHodFeedBackDetails(obj.semester, obj.section);

    setSecChangeObj({ semesterID: obj.semester, sectionID: obj.section });

    console.log(cData);
    setIsFeedbackArr(cData?.feedbackdetails);
  };

  const onTdClick = async (selectedEmployeeID, courseID) => {
    console.log(obj);
    // const cData = await getFeedRecDetails(
    //   hodID,
    //   selectedEmployeeID,
    //   courseID,
    //   isSecChangeObj.semesterID,
    //   isSecChangeObj.sectionID
    // );
    // console.log(cData);
    //setIModalData(cData?.feedbackdetails);
  };

  const starPropertiesArray = ["star1", "star2", "star3", "star4", "star5"];
  const ratingStars = (feedBackObj) => {
    var stars = [];

    for (var i = 0; i < starPropertiesArray.length; i++) {
      stars.push(
        <label
          css={css`
            cursor: pointer;
            display: inline-block;
            padding: 3px;
            vertical-align: middle;
            line-height: 1;
            font-size: 1.5em;
            color: ${feedBackObj[starPropertiesArray[i]] === ""
              ? "#ababab"
              : "#FFD700"};
          `}
        >
          ★
        </label>
      );
    }
    return stars;
  };

  const thValues = ["Course Code", "Faculty Name", "Feedback Rating", "Status"];

  return (
    <React.Fragment>
      <Layout>
        <CommSelect onSectionChange={onChange} />
        <br></br>
        <div>
          <TABLE.TableWrapper
            css={css`
              margin-top: 20px;
            `}
          >
            <TableTh thValues={thValues} />
            <TABLE.TableTbody>
              {isFeedbackArr &&
                isFeedbackArr.length > 0 &&
                isFeedbackArr.map((value, i) => (
                  <TABLE.TableTRR key={i}>
                    <TABLE.TableTdd>{i + 1}</TABLE.TableTdd>
                    <TABLE.TableTdd>{value.courseName}</TABLE.TableTdd>
                    <TABLE.TableTdd>{value.employeeName}</TABLE.TableTdd>
                    <TABLE.TableTdd
                      css={css`
                        cursor: pointer;
                      `}
                      onClick={() =>
                        onTdClick(value.employeeid, value.courseid)
                      }
                    >
                      {ratingStars(value)}
                    </TABLE.TableTdd>
                    <TABLE.TableTdd>{value.status}</TABLE.TableTdd>
                  </TABLE.TableTRR>
                ))}
            </TABLE.TableTbody>
          </TABLE.TableWrapper>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default FeedbackDetails;
