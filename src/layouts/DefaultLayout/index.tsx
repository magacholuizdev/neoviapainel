import { FC, ReactNode } from "react";

import { Container } from "./styles";
import { useIsMobile } from "hooks/useIsMobile";
import Header from "components/global/Header";
import { ToastNotification } from "components/ToastNotification";
import { useToastContext } from "context/ToastContext";

export interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const toast = useToastContext();

  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default DefaultLayout;
