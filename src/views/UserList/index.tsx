import { UserContext } from "@/contexts/UserContext";
import { User } from "@/services/user/type";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { Toast } from "primereact/toast";
import { useState, useRef, useContext } from "react";

import { UserDialog } from '@/views'

interface Options {
  icon?: string;
  ariaLabel: string;
  tooltip?: string
  label?: string;
  onclick: (user: User) => void;
}

const columns = [
  {
    field: "name",
    header: "Nome"
  },
  {
    field: "email",
    header: "E-mail"
  }
]

function UserList() {
  const [currUser, setCurrUser] = useState<User | null>(null);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const { users, loading, totalElements, handleGetUsers } = useContext(UserContext);

  const toast = useRef<Toast>(null);
  const [first, setFirst] = useState<number>(0);

  const options: Options[] = [
    {
      ariaLabel: "Editar",
      label: "Editar",
      onclick: openDialog
    }
  ]

  const columnBodyOptions = {
    options: (user: User) => optionsBodyTemplate(options, user)
  }

  function openDialog(user: User) {
    setCurrUser(user);
    setShowDialog(true)
  }

  function closeDialog() {
    setShowDialog(showDialog => !showDialog)
    setCurrUser(null);
  }

  function onPageChange(event: PaginatorPageChangeEvent) {
    const { page, first } = event;
    handleGetUsers(page)
    setFirst(first)
  }

  return <section className="flex flex-column gap-4 p-5  w-full">
    <div className="flex align-items-center justify-content-between w-full">
      <h1 className="m-0">Usuários</h1>
    </div>

    <DataTable
      emptyMessage="Nenhum usuário encontrado."
      value={users}
      loading={loading}
      stripedRows
      showGridlines
      rows={10}
      totalRecords={totalElements}
      tableStyle={{ minWidth: '50rem' }}
      size="small">
      {columns.map((col) => {
        return (<Column sortable key={col.field} field={col.field} header={col.header} />)
      })}
      <Column header="Opções" body={columnBodyOptions.options} />
    </DataTable>

    <Paginator
      first={first}
      rows={10}
      totalRecords={totalElements}
      onPageChange={onPageChange}
    />

    {currUser && <UserDialog visible={showDialog} onHide={closeDialog} data={currUser} />}

    <Toast ref={toast} />
  </section>
}

function optionsBodyTemplate(elements: Options[], user: User) {
  return (
    <div className="flex gap-2">
      {elements.map((el, index) => {
        return (
          <Button
            key={index}
            icon={el.icon}
            label={el.label}
            aria-label={el.ariaLabel}
            tooltip={el.tooltip}
            tooltipOptions={{ position: 'top', className: 'text-xs' }}
            size="small"
            severity="danger"
            onClick={() => el.onclick(user)}
          />
        )
      })}
    </div>
  )
}

export default UserList;
