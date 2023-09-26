import HeaderTemplateComponent from "components/HeaderTemplateComponent";
import { StyledLayoutContainer } from "./styles";
import SidebarComponent from "components/SidebarComponent";
import React from "react";
import { FragmentComponent } from "container/Fragments";

type LayoutComponentProps = {
  children?: React.ReactNode;
};

export default function LayoutComponent({
  children,
}: LayoutComponentProps): JSX.Element {
  return (
    <StyledLayoutContainer>
      <SidebarComponent></SidebarComponent>
      <FragmentComponent />
      {children}
    </StyledLayoutContainer>
  );
}
