import styled from "@emotion/styled";
export const title = styled.p`
  font-size: 1rem;

  color: #4aa1f3;
  font-weight: bold;
`;

export const content = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const containerP = styled.p`
  color: red;
  text-align: center;
`;

export const dropContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 600px;
  height: 200px;
  border: 2px dashed #4aa1f3;
`;

export const uploadIcon = styled.div`
  width: 50px;
  height: 50px;
  background: url(/import-icon-1.png) no-repeat center center;
  background-size: 100%;
  text-align: center;
  margin: 0 auto;
  padding-top: 50px;
`;

export const dropMessage = styled.div`
  text-align: center;
  color: #4aa1f3;
  font-family: Arial;
  font-size: 20px;
`;

export const fileDisplayContainer = styled.div`
  width: 600px;
`;

export const fileStatusBar = styled.div`
  width: 100%;
  vertical-align: top;
  margin-top: 10px;
  margin-bottom: 20px;
  position: relative;
  line-height: 50px;
  height: 50px;
`;
export const fileType = styled.div`
  display: inline-block !important;
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  line-height: 13px;
  margin-top: 25px;
  padding: 0 4px;
  border-radius: 2px;
  box-shadow: 1px 1px 2px #abc;
  color: #fff;
  background: #0080c8;
  text-transform: uppercase;
`;
export const fileName = styled.span`
  display: inline-block;
  vertical-align: top;
  margin-left: 50px;
  color: #4aa1f3;
`;
export const fileError = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 50px;
  color: #9aa9bb;
`;
export const fileErrorMessage = styled.span`
  color: red;
`;
export const fileTypeLogo = styled.div`
  width: 50px;
  height: 50px;
  background: url(/import-icon-2.png) no-repeat center center;
  background-size: 100%;
  position: absolute;
`;
export const fileSize = styled.span`
  display: inline-block;
  vertical-align: top;
  color: #30693d;
  margin-left: 10px;
  margin-right: 5px;
  margin-left: 10px;
  color: #444242;
  font-weight: 700;
  font-size: 14px;
`;
export const fileRemove = styled.div`
  position: absolute;
  top: 20px;
  right: 10px;
  line-height: 15px;
  cursor: pointer;
  color: red;
  margin-right: -10px;
`;

export const uploadModal = styled.div`
  z-index: 999;
  display: none;
  overflow: hidden;
`;
export const progressContainer = styled.div`
  background: white;
  width: 500px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;
export const progress = styled.div`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #efefef;
  height: 20px;
  border-radius: 5px;
`;
export const progressBar = styled.div`
  position: absolute;
  background-color: #4aa1f3;
  height: 20px;
  border-radius: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
`;

export const close = styled.button`
  color: #f1f1f1;
  font-size: 40px;
  margin-right: 15px;
  transition: 0.3s;
  float: right;
`;
