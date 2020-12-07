import React  from 'react';
import Link from "next/link";
import { css } from "@emotion/core";


const HodDashboard = ({dashBoardLinks}) => {


    return(
        <React.Fragment>
           <div className="clearfix">
          {dashBoardLinks &&
            dashBoardLinks.map((item) => (
              <div className="w-4/12 float-left text-center relative">
                <Link href={item.url} key={item.name}>
                  <a className=" p-4 bg-white shadow  box-border block m-1 font-bold hover:shadow-2xl hover:text-green-400">
                    <span
                      css={css`
                        display: block;
                      `}
                    >
                      <span css={css`
                        display:block;
                        margin:0px auto;
                        width:100px;
                      `}>{item.icon}</span>
                      {item.name}
                    </span>
                   
                  </a>
                </Link>
              </div>
            ))}
        </div>
        </React.Fragment>
    )
}

export default HodDashboard;