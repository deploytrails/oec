import styled from "@emotion/styled";
import { BREAKPOINTS, COLORS, FONT_FAMILY } from "../../../constants";

export const TableTypeSection = styled.div`
  display: block;
  background-color: ${COLORS.BLACK};
  padding: 10px;
`;
export const TBHeader = styled.h3`
  font-size: 20px;
  color: ${COLORS.WHITE};
  padding: 0px;
  margin: 0px;
  text-align: center;
`;
export const TableWrapper = styled.table`
  border-top: 1px solid ${COLORS.WHITE};
  border-bottom: 1px solid ${COLORS.WHITE};
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 0.5rem;
`;
export const TableTheader = styled.thead`
  padding: 0px;
`;
export const TableTR = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;
export const TableTh = styled.th`
  background-color: ${COLORS.TABLEBG};
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  border-right: 1px solid ${COLORS.WHITE};
  padding: 10px;
  &:nth-of-type(last) {
    border: none;
  }
`;
export const TableTbody = styled.tbody`
  padding: 0px;
`;
export const TableTd = styled.td`
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  color: ${COLORS.BLACK};
  border-right: 1px solid ${COLORS.WHITE};

  &:nth-of-type(5) {
    border: none;
  }

  & > span {
    padding: 10px;
    display: block;
    &:nth-of-type(even) {
      background-color: ${COLORS.WHITE};
    }
    &:nth-of-type(odd) {
      background-color: ${COLORS.GRAY_LIGHTER};
    }
  }
`;

export const TableTRR = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;

  &:nth-of-type(even) {
    background-color: ${COLORS.GRAY_LIGHTER};
  }
  &:nth-of-type(odd) {
    background-color: ${COLORS.WHITE};
  }
`;

export const TableTdd = styled.td`
  color: #fff;
  font-weight: 400;
  text-align: center;
  font-size: 14px;
  padding: 12px 5px;
  color: ${COLORS.BLACK};
  border-right: 1px solid ${COLORS.WHITE};
`;
