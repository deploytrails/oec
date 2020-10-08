import React from "react";
import { css } from "@emotion/core";
import { withRouter } from "next/router";
import Head from "next/head";

import App from "./App";
import SideNav from "./sidenav";
import Header from "./header";
import Footer from "./footer";
import { COLORS } from "../constants";

const Layout = props => {
  const title = props.description || "Page Description ";

  return (
    <App>
      <Head>
        <title>
          {props.title && props.title !== "" ? `${props.title}` : ""}
        </title>
        <meta name="description" content={title} />
        <meta name="robots" content={props.metaRobots || "index,follow"} />
      </Head>

      <div>
        <div
          id="sidenav"
          className="inline-block h-screen bg-gray-400 fixed top-0 left-o"
          css={css`
            width: 340px;
            background-color: ${COLORS.DARKBACKGROUND};
          `}
        >
          <SideNav />
        </div>

        <main
          className="block"
          id="sidewrap"
          css={css`
            margin-left: 340px;
            background-color: #eeeeee;
          `}
        >
          <Header />
          <div
            css={css`
              padding: 20px 25px;
            `}
          >
            {props.children}
          </div>
          <Footer />
        </main>
      </div>
    </App>
  );
};
export default withRouter(Layout);
