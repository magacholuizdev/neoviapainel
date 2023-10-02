import { User } from "@/services/user/type";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

interface UserDialog {
  visible: boolean;
  onHide: () => void;
  data: User;
}

function UserDialog({ visible, onHide, data }: UserDialog) {
  return <Dialog
    header="Editar usuário"
    visible={visible}
    onHide={onHide}
    className="w-25rem"
  >
    <div>
      <div className="field flex flex-column gap-2">
        <label htmlFor="name" className="font-semibold">
          Nome
        </label>
        <span>{data?.name || 'Nome não informado.'}</span>
      </div>

      <div className="field flex flex-column gap-2">
        <label htmlFor="email" className="font-semibold">
          E-mail
        </label>
        <span>{data?.email || 'E-mail não informado.'}</span>
      </div>
    </div>
    <div className="flex gap-2">
      <Button className="w-full" label="Cancelar" outlined onClick={onHide} />
      <Button className="w-full" label="Salvar" severity="danger" />
    </div>
  </Dialog>
}

export default UserDialog;
