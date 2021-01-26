import React, { useEffect } from "react";
import * as STYLES from "../../../components/General/modalStyles";
import css from "@emotion/css";

const FeedbackModal = ({ closeModal, data }) => {
  const ratingProperties = ["excellent", "good", "fair", "poor"];
  const ratingColor = ["#4CAF50", "#2196F3", "#f44336", "#808080"];
  const rating = ["Excellent", "Good", "Fair", "Poor"];
  useEffect(() => {
    console.log(data);
  }, []);
  const ratingStars = () => {
    var stars = [];

    for (var i = 0; i < 4; i++) {
      stars.push(
        <>
          <p>{rating[i]}</p>
          <div
            css={css`
              width: 100%;
              background-color: #ddd;
            `}
          >
            <div
              css={css`
                width: ${(data[ratingProperties[i]] / data.totalReq) * 100};
                background-color: ${ratingColor[i]};
                text-align: right;
                padding-top: 10px;
                padding-bottom: 10px;
                color: white;
              `}
            >
              {(data[ratingProperties[i]] / data.totalReq) * 100}%
            </div>
          </div>
        </>
      );
    }
    return stars;
  };

  const ratingPercent = () => {};

  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper>
        <STYLES.PopupTitle>
          Average based on {data?.totalReq} Record(s)
          <div
            css={css`
              cursor: pointer;
              float: right;
            `}
            onClick={() => closeModal()}
          >
            X
          </div>
        </STYLES.PopupTitle>
        {ratingStars()}
      </STYLES.PopupWrapper>
    </STYLES.PopupMask>
  );
};
export default FeedbackModal;
