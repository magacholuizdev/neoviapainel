import React, { useEffect, useState } from "react";
import { ToastClose, ToastContainer, ToastContent } from "./styles";

interface ToastNotificationProps {
  title: string;
  message: string;
  show: boolean;
  onClose: Function;
  type: ToastType;
}

export enum ToastType {
  SUCCESS,
  FAILURE,
  WARNING,
  INFO,
}

export const ToastNotification: React.FC<ToastNotificationProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   setIsOpen(props.show);
  // }, [props.show]);

  const handleCloseToast = () => {
    setIsOpen(false);
    if (props.onClose) props.onClose();
  };

  return (
    <ToastContainer show={isOpen} type={props.type}>
      <ToastContent>
        <h3>{props.title}</h3>
        <span>{props.message}</span>
      </ToastContent>
      <ToastClose onClick={handleCloseToast}></ToastClose>
    </ToastContainer>
  );
};
