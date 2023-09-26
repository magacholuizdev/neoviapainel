import { createContext, useContext, useEffect, useState } from "react";
import { ToastType } from "components/ToastNotification";

export type ToastProps = {
  title: string;
  message: string;
  type: ToastType;
  durationInSeconds?: number;
};

interface ToastContextProps {
  showToast: boolean;
  currentToast: ToastProps;
  onClose: () => void;
  showToastNotification: (
    type: ToastType,
    title: string,
    message: string,
    durationInSeconds?: number
  ) => void;
}

interface ToastContextProviderProps {
  children: React.ReactNode;
}

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

const ToastContextProvider: React.FC<ToastContextProviderProps> = ({
  children,
}) => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [currentToast, setCurrentToast] = useState<ToastProps>({
    title: "",
    message: "",
    type: ToastType.INFO,
    durationInSeconds: 1,
  } as ToastProps);

  // useEffect(() => {
  //   if(currentToast.durationInSeconds && currentToast.durationInSeconds > 0) {
  //     setTimeout(() => {
  //       setShowToast(false);
  //     }, currentToast.durationInSeconds * 1000);
  //   }
  // }, [showToast])

  function showToastNotification(
    type: ToastType,
    title: string,
    message: string,
    durationInSeconds?: number
  ) {
    setCurrentToast({ type, title, message, durationInSeconds });
    setShowToast(true);
  }

  function close() {
    setShowToast(false);
  }

  return (
    <ToastContext.Provider
      value={{
        showToast,
        currentToast,
        onClose: close,
        showToastNotification,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

const useToastContext = (): ToastContextProps => {
  const context = useContext(ToastContext);
  return context;
};

export { ToastContextProvider, useToastContext };
