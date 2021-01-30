import React from "react";
import css from "@emotion/css";
import { COLORS } from "../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUnderline,
  faStar,
  faAddressCard,
  faCode,
  faSuitcase,
  faList,
  faInfo,
  faDatabase,
  faShieldAlt,
  faAward,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
const RightInfo = ({ pInfo }) => {
  const rhProfileData = pInfo && pInfo.profile;
  return (
    <React.Fragment>
      <div
        className="block"
        css={css`
          background-color: #e6e6e6;
        `}
      >
        <div className="block p-4">
          {rhProfileData &&
            rhProfileData.length > 0 &&
            rhProfileData.map((rhp) => (
              <React.Fragment>
                <div
                  key={rhp}
                  css={css`
                    background-color: #728498;
                  `}
                >
                  <img
                    className="w-40 m-auto block py-4"
                    src="https://image.flaticon.com/icons/svg/848/848006.svg"
                    alt="profile"
                    title="profile"
                  />
                  <p className="bg-white w-6/12 m-auto text-center p-2 shadow uppercase text-blue-400">
                    {rhp.firstName}
                  </p>
                  <p
                    className="block px-10 mt-6 text-white clearfix text-sm"
                    css={css`
                      & > span {
                        float: left;
                        width: 50%;
                        padding: 8px 0px;
                        & > svg {
                          margin-right: 5px;
                        }
                      }
                    `}
                  >
                    <span>
                      <FontAwesomeIcon icon={faAddressCard} /> Faculty Number :
                    </span>
                    <span>{rhp.username}</span>
                    <span>
                      <FontAwesomeIcon icon={faCode} /> Programme :
                    </span>
                    <span>{rhp.department.departmentName}</span>
                    <span>
                      <FontAwesomeIcon icon={faSuitcase} /> Designation :
                    </span>
                    <span>{rhp.designation}</span>
                    <span>
                      <FontAwesomeIcon icon={faDatabase} /> Additional Programs
                      :
                    </span>
                    <span>-</span>
                  </p>
                </div>

                <div
                  className="mt-2 pt-8 pb-4"
                  key={rhp}
                  css={css`
                    background-color: #728498;
                  `}
                >
                  <p className="bg-white w-6/12 m-auto text-center p-2 shadow uppercase text-blue-400">
                    About Me
                  </p>
                  <p
                    className="block px-10 mt-6 text-white clearfix text-sm"
                    css={css`
                      & > span {
                        float: left;
                        width: 50%;
                        padding: 8px 0px;
                        & > svg {
                          margin-right: 5px;
                        }
                      }
                    `}
                  >
                    <span>
                      <FontAwesomeIcon icon={faAddressCard} /> Highest
                      Qualification :
                    </span>
                    <span>-</span>
                    <span>
                      <FontAwesomeIcon icon={faShieldAlt} />
                      Years of Experience :
                    </span>
                    <span>-</span>
                    <span>
                      <FontAwesomeIcon icon={faAward} />
                      Achievements :
                    </span>
                    <span>-</span>
                    <span>
                      <FontAwesomeIcon icon={faSearch} />
                      Research Activities :
                    </span>
                    <span>-</span>
                  </p>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default RightInfo;
