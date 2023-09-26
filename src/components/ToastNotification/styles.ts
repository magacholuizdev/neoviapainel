import styled from "styled-components";
import { ToastType } from ".";
import { colors } from "../../../styles/variables";

type ToastContainerProps = {
  show: boolean;
  type: ToastType;
};

export const ToastContainer = styled.main<ToastContainerProps>`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  left: 10%;
  bottom: 5%;
  width: 80%;
  height: fit-content;
  padding: 10px 20px;
  gap: 20px;
  z-index: 9999999;

  justify-content: space-between;
  align-items: center;

  border-radius: 4px;
  color: ${colors.WHITE};
  background-color: ${({ type }) =>
    type === ToastType.SUCCESS
      ? `${colors.NEOVIA_BLACK}`
      : type === ToastType.FAILURE
      ? `${colors.REDWARNNING}`
      : type === ToastType.WARNING
      ? `${colors.ORANGE}`
      : `${colors.INTERFACE_GRAY}`};
`;

export const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-left: 5px;
  overflow-wrap: break-word;
`;

export const ToastClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;
