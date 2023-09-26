import {
  GridColDef,
  GridRowSelectionModel,
  GridSortModel,
} from "@mui/x-data-grid";
import { ActionsButton, NameWrapper } from "./styles";
import Table from "components/reusables/Table";
import Avatar from "components/reusables/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import { User } from "models/page/users/User";
import { colors } from "../../../../styles/variables";

type UsersTableProps = {
  users: User[];
  totalRowCount: number;
  pageSize: number;
  currentPage: number;
  onEdit?: (user: User) => void;
  onPageChange: (page: number) => void;
  onSortModelChange?: (value: string) => void;
  loading?: boolean;
};

export const UsersTable: React.FC<UsersTableProps> = ({
  totalRowCount,
  pageSize,
  onPageChange,
  currentPage,
  loading,
  onEdit,
  onSortModelChange,
  ...props
}) => {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Nome",
      width: 350,
      align: "left",
      headerAlign: "left",
      type: "string",
      renderCell: (data) => showAvatarAndName(data.row),
    },
    {
      field: "username",
      headerName: "Usuário",
      width: 350,
      align: "left",
      headerAlign: "left",
      type: "string",
    },
    {
      field: "profileType",
      headerName: "Perfil",
      width: 250,
      align: "left",
      headerAlign: "left",
      type: "string",
    },
    {
      field: "actions",
      headerName: "Ações",
      width: 200,
      align: "center",
      headerAlign: "center",
      type: "actions",
      renderCell: (data) => showActionsButton(data.row),
    },
  ];
  function showActionsButton(row: any) {
    return (
      <ActionsButton onClick={() => onEdit && onEdit(row)}>
        <EditIcon htmlColor={colors.NEOVIA_BLACK} />
      </ActionsButton>
    );
  }

  function showAvatarAndName(row: User) {
    return (
      <NameWrapper>
        <Avatar image={row.avatar} />
        <span>{row.name}</span>
      </NameWrapper>
    );
  }

  // function handleSelection(selection: GridRowSelectionModel) {
  //   onSelectionModelChange(selection as string[]);
  // }

  function handleSort(sortModel: GridSortModel) {
    sortModel.length > 0 &&
      onSortModelChange &&
      onSortModelChange(`${sortModel[0].field},${sortModel[0].sort}`);
  }
  return (
    <Table
      onSortModelChange={handleSort}
      checkboxSelection={true}
      rowCount={totalRowCount}
      rows={props.users}
      columns={columns}
      autoHeight
      sortingMode="server"
      tableWidth="100%"
      paginationMode="server"
      pagination
      onPageChange={onPageChange}
      loading={loading}
    />
  );
};
