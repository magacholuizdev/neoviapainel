import React, { useContext } from "react";

import { Logo } from "@/views/common";
import { PanelMenu } from "primereact/panelmenu";
import { useRouter } from "next/router";
import { AuthContext } from "@/contexts/AuthContext";
import { useMenu } from "@/hooks";

import { UserAvatar } from "@/views";

import { LeftPanel } from "@/components";
import ConfirmationDialog from "@/components/ConfirmationDialog/indexx";

/**
 * Layout component for the application.
 *
 * @param {Object} props - The props for the layout.
 * @param {React.ReactNode} props.children - The content to render inside the layout.
 */

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({
  children,
}: LayoutProps) {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const { items, ref } = useMenu();

  if (!user) return;
  const { name } = user;

  return (
    <div className="h-screen flex overflow-y-hidden">
      <LeftPanel>
        <Logo />
        <UserAvatar name={name} />
        <PanelMenu
          ref={ref}
          model={items}
          className="w-full md:w-20rem flex flex-column gap-2"
        />
        <ConfirmationDialog
          message="Você tem certeza que deseja sair?"
          header="Confirmação"
          icon="pi pi-info-circle"
          acceptLabel="Sim"
          rejectLabel="Não"
          onConfirm={logout}
        />
      </LeftPanel>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
