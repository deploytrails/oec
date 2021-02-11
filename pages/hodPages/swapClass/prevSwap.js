import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import Cookies from "js-cookie";
import { getPrevSwapData } from "../../../services/hodServices/swapClassService";
import * as TABLE from "../../../components/dashboards/styles/table.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";
import css from "@emotion/css";
import moment from "moment";

const PrevSwap = () => {
  const ProfileId = Cookies.get("employeeID");
  const [isPrevSwapData, setIsPrevSwapData] = useState([]);
  const [isPrevSelectedData, setIsPrevSelectedData] = useState([]);
  const [showSelected, setShowSelected] = useState(false);
  useEffect(() => {
    loadPrevSwapData();
  }, []);

  const loadPrevSwapData = async () => {
    const cData = await getPrevSwapData(ProfileId);
    setIsPrevSwapData(cData.SwapRecords);
  };
  const showDetails = (swapdata) => {
    setIsPrevSelectedData(swapdata);
    setShowSelected(true);
  };

  return (
    <React.Fragment>
      <div
        className={
          isPrevSwapData ? "grid grid-flow-col auto-cols-max gap-2" : ""
        }
      >
        <div className={isPrevSwapData ? "col-span-2" : ""}>
          {" "}
          <TABLE.TableWrapper
            css={css`
              margin-top: 10px;
            `}
          >
            <TABLE.TableTR>
              <TABLE.TableTh>Sender Name</TABLE.TableTh>
              <TABLE.TableTh></TABLE.TableTh>
              <TABLE.TableTh>Recevier Name</TABLE.TableTh>
              <TABLE.TableTh>Status</TABLE.TableTh>
            </TABLE.TableTR>

            {isPrevSwapData &&
              isPrevSwapData.length > 0 &&
              isPrevSwapData.map((swapInfo) => (
                <TABLE.TableTRR
                  css={css`
                    cursor: pointer;
                  `}
                  onClick={() => showDetails(swapInfo)}
                >
                  <TABLE.TableTdd
                    css={css`
                      color: ${swapInfo.status === "Accepted by HOD"
                        ? "#22ba7c"
                        : "#e50914"};
                    `}
                  >
                    {swapInfo.senderEmployeeName}
                  </TABLE.TableTdd>
                  <TABLE.TableTdd
                    css={css`
                      color: ${swapInfo.status === "Accepted by HOD"
                        ? "#22ba7c"
                        : "#e50914"};
                    `}
                  >
                    <FontAwesomeIcon icon={faArrowsAltH} />
                  </TABLE.TableTdd>
                  <TABLE.TableTdd
                    css={css`
                      color: ${swapInfo.status === "Accepted by HOD"
                        ? "#22ba7c"
                        : "#e50914"};
                    `}
                  >
                    {swapInfo.receiverHrEmployeeName}
                  </TABLE.TableTdd>
                  <TABLE.TableTdd
                    css={css`
                      color: ${swapInfo.status === "Accepted by HOD"
                        ? "#22ba7c"
                        : "#e50914"};
                    `}
                  >
                    {swapInfo.status}
                  </TABLE.TableTdd>
                </TABLE.TableTRR>
              ))}
          </TABLE.TableWrapper>
        </div>
        {isPrevSelectedData && showSelected && (
          <>
            <div
              className="shadow-xl bg-green-100 rounded-md"
              css={css`
                margin-top: 10px;
              `}
            >
              <div
                css={css`
                  margin: 30px;
                `}
              >
                <div className="font-normal text-3xl text-black-600">
                  Requester
                </div>
                <div className="font-normal text-xl text-red-600">
                  {isPrevSelectedData?.senderEmployeeName}
                </div>

                <div className="divide-y-2">
                  <div className="grid grid-cols-2 font-normal text-1xl text-purple-600 py-3">
                    <div className="text-left">Subject:</div>
                    <div className="text-left">
                      {isPrevSelectedData?.senderCourse}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 font-normal text-1xl text-purple-600 py-3">
                    <div className="text-left">Class Time:</div>
                    <div className="text-left">
                      {moment(isPrevSelectedData?.senderStartTime).format(
                        "hh:mm A"
                      )}
                      -
                      {moment(isPrevSelectedData?.senderEndTime).format(
                        "hh:mm A"
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 font-normal text-1xl text-purple-600 py-3">
                    <div className="text-left">Class Date:</div>
                    <div className="text-left">
                      {moment(isPrevSelectedData?.senderDate).format(
                        "DD-MM-YYYY"
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="text-center"
              css={css`
                margin-top: 150px;
              `}
            >
              <FontAwesomeIcon icon={faArrowsAltH} />
            </div>

            <div
              className="shadow-xl bg-green-100 rounded-md"
              css={css`
                margin-top: 10px;
              `}
            >
              <div
                css={css`
                  margin: 30px;
                `}
              >
                <div className="font-normal text-3xl text-black-600">
                  Accepter
                </div>
                <div className="font-normal text-xl text-red-600">
                  {isPrevSelectedData?.receiverHrEmployeeName}
                </div>

                <div className="divide-y-2">
                  <div className="grid grid-cols-2 font-normal text-1xl text-purple-600 py-3">
                    <div className="text-left">Subject:</div>
                    <div className="text-left">
                      {isPrevSelectedData?.receiverCourse}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 font-normal text-1xl text-purple-600 py-3">
                    <div className="text-left">Class Time:</div>
                    <div className="text-left">
                      {moment(isPrevSelectedData?.receiverStartTime).format(
                        "hh:mm A"
                      )}
                      -
                      {moment(isPrevSelectedData?.receiverEndTime).format(
                        "hh:mm A"
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 font-normal text-1xl text-purple-600 py-3">
                    <div className="text-left">Class Date:</div>
                    <div className="text-left">
                      {moment(isPrevSelectedData?.receiverDate).format(
                        "DD-MM-YYYY"
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>{" "}
    </React.Fragment>
  );
};

export default PrevSwap;
