import styled from "@emotion/styled";
import { COLORS, FONT_FAMILY } from "../../constants";
export const PopupMask = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PopupWrapper = styled.div`
  background-color: ${COLORS.WHITE};
  margin: auto;
  padding: 20px;
  border: 1px solid #888;

  border-radius: 0.5rem;
`;

export const PopupBody = styled.div`
  min-height: 100px;
  overflow: auto;
`;

export const PopupTitle = styled.div`
  font-size: 25px;
  color: ${COLORS.BLACK};
  margin: 0px 0px 10px 0px;
  padding: 0px 0px 10px 0px;
  border-bottom: 1px solid ${COLORS.GRAY};
`;

export const PopupFooter = styled.div`
  font-size: 15px;
  color: ${COLORS.BLACK};
  margin: 10px 0px 0px 0px;
  padding: 10px 0px 0px 0px;
  min-height: 40px;
  border-top: 1px solid ${COLORS.GRAY};
`;
