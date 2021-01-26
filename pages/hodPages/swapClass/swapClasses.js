import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  getSwapData,
  updateHODSwapRecord,
} from "../../../services/hodServices/swapClassService";
import * as TABLE from "../../../components/dashboards/styles/table.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";
import css from "@emotion/css";
import moment from "moment";
import { useSnackbar } from "react-simple-snackbar";

const SwapClasses = () => {
  const ProfileId = Cookies.get("employeeID");
  const [isSwapData, setIsSwapData] = useState([]);
  const [isSelectedData, setIsSelectedData] = useState([]);
  const [showSelected, setShowSelected] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar();
  useEffect(() => {
    loadSwapData();
  }, []);

  const loadSwapData = async () => {
    const cData = await getSwapData(ProfileId);
    setIsSwapData(cData?.swaps);
  };
  const showDetails = (swapdata) => {
    setIsSelectedData(swapdata);
    setShowSelected(true);
  };

  const updateHODSwapRecords = async (swapId, status) => {
    const cData = await updateHODSwapRecord(swapId, status);
    if (cData?.response === "Success") {
      openSnackbar("Updated Successfully");
      loadSwapData();
    } else {
      openSnackbar(cData?.responseReason);
    }
  };

  return (
    <React.Fragment>
      <div
        className={isSwapData ? "grid grid-flow-col auto-cols-max gap-2" : ""}
      >
        <div className={isSwapData ? "col-span-2" : ""}>
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
            </TABLE.TableTR>

            {/* {!isSwapData && <PulseLoader size="10" color="#3aafa9" />} */}

            {isSwapData &&
              isSwapData.length > 0 &&
              isSwapData.map((swapInfo) => (
                <TABLE.TableTRR
                  css={css`
                    cursor: pointer;
                  `}
                  key={swapInfo.swapPrimaryId}
                  onClick={() => showDetails(swapInfo)}
                >
                  <TABLE.TableTdd>{swapInfo.senderName}</TABLE.TableTdd>
                  <TABLE.TableTdd>
                    <FontAwesomeIcon icon={faArrowsAltH} />
                  </TABLE.TableTdd>
                  <TABLE.TableTdd>{swapInfo.receiverName}</TABLE.TableTdd>
                </TABLE.TableTRR>
              ))}
          </TABLE.TableWrapper>
        </div>

        {isSelectedData && showSelected && (
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
                  {isSelectedData?.senderName}
                </div>

                <div className="divide-y-2">
                  <div className="grid grid-cols-2 font-normal text-1xl text-purple-600 py-3">
                    <div className="text-left">Subject:</div>
                    <div className="text-left">
                      {isSelectedData?.senderCourse}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 font-normal text-1xl text-purple-600 py-3">
                    <div className="text-left">Class Time:</div>
                    <div className="text-left">
                      {moment(isSelectedData?.senderStartTime).format(
                        "hh:mm A"
                      )}
                      -{moment(isSelectedData?.senderEndTime).format("hh:mm A")}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 font-normal text-1xl text-purple-600 py-3">
                    <div className="text-left">Class Date:</div>
                    <div className="text-left">
                      {moment(isSelectedData?.senderDate).format("DD-MM-YYYY")}
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
                  {isSelectedData?.receiverName}
                </div>

                <div className="divide-y-2">
                  <div className="grid grid-cols-2 font-normal text-1xl text-purple-600 py-3">
                    <div className="text-left">Subject:</div>
                    <div className="text-left">
                      {isSelectedData?.receiverCourse}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 font-normal text-1xl text-purple-600 py-3">
                    <div className="text-left">Class Time:</div>
                    <div className="text-left">
                      {moment(isSelectedData?.receiverStartTime).format(
                        "hh:mm A"
                      )}
                      -
                      {moment(isSelectedData?.receiverEndTime).format(
                        "hh:mm A"
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 font-normal text-1xl text-purple-600 py-3">
                    <div className="text-left">Class Date:</div>
                    <div className="text-left">
                      {moment(isSelectedData?.receiverDate).format(
                        "DD-MM-YYYY"
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <br></br>
      {isSelectedData && showSelected && (
        <div>
          <button
            className=" float-right bg-red-400  mx-auto px-2 py-1 rounded"
            onClick={() =>
              updateHODSwapRecords(
                isSelectedData.swapPrimaryId,
                "Rejected by HOD"
              )
            }
          >
            Reject
          </button>

          <button
            className=" float-right  bg-green-400   mx-auto px-2 py-1 rounded"
            css={css`
              margin-right: 5px;
            `}
            onClick={() =>
              updateHODSwapRecords(
                isSelectedData.swapPrimaryId,
                "Accepted by HOD"
              )
            }
          >
            Approve
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default SwapClasses;
