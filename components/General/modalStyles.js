import styled from "@emotion/styled";
import { COLORS, FONT_FAMILY } from "../../constants";
export const PopupMask = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: auto;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

export const PopupWrapper = styled.div`
  background: ${COLORS.WHITE};
  font-family: ${FONT_FAMILY};
  position: absolute;
  width: 720px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
`;
export const PopupTitle = styled.div`
  font-size: 20px;
  color: ${COLORS.BLACK};
  margin: 0px 0px 10px 0px;
  padding: 0px 0px 10px 0px;
  border-bottom: 1px solid ${COLORS.GRAY};
`;
