import styled from "@emotion/styled";
import { COLORS, FONT_FAMILY } from "../../constants";
export const Tabs = styled.div`
  //background: ${COLORS.WHITE};
  font-family: ${FONT_FAMILY};
  height: 3em;
  position:relative;
  top:-39.6px;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  //width: 40%;
  display: inline-block;
  position: relative;
  padding: 0px 10px;
  margin-right: 0.1em;
  font-size: 13px;;
  border-top: ${(props) => (props.active ? "3px solid #22ba7c" : "")};
  //border-bottom: ${(props) => (props.active ? "none" : "")};
  background-color: ${(props) => (props.active ? "white" : "#f5f5f5")};
  
  //height: ${(props) => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;
  height:3em;
  :focus {
    outline: none;
  }
  :hover {
    background-color: ${COLORS.WHITE};
  }
`;
export const Content = styled.div`
padding:10px;
  ${(props) => (props.active ? "" : "display:none")}
  
`;
