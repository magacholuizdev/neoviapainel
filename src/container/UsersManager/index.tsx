import { UsersTable } from "components/Tables/UserTable";
import { User } from "models/page/users/User";
import { useEffect, useState } from "react";
import { Filters, UsersService } from "services/UserService";
import { Pagination } from "../../../types/pagiantion";
import { MainContainer } from "./styles";
import PageHeader from "components/reusables/PageHeader";
import DefaultLayout from "layouts/DefaultLayout";

export function UserManagerComponent(): JSX.Element {
  const [users, setUsers] = useState<User[]>();
  const [selectedUser, setSelectedUser] = useState<User | undefined>();
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({ enabled: true } as Filters);

  const userMock: User[] = [
    {
      id: "1234",
      email: "email@teste.com",
      username: "luiz.magacho",
      name: "Luiz Magacho",
      profileType: "Admin",
      phone: "21987654321",
      enabled: true,
      avatar: "",
      createdAt: "2023-09-13",
      updatedAt: "2023-09-13",
    },
    {
      id: "1235",
      email: "email2@teste.com",
      username: "luiz.magacho2",
      name: "Luiz Magacho 2",
      profileType: "Finaceiro/Contabilidade",
      phone: "21987654322",
      enabled: true,
      avatar: "",
      createdAt: "2023-09-12",
      updatedAt: "2023-09-12",
    },
  ];
  // useEffect(() => {
  //   loadUsers();
  // }, []);

  function loadUsers() {
    setIsLoading(true);
    UsersService.listUsers({})
      .then((response) => {
        const page = response.data as Pagination<User>;
        setCurrentPage(page.pageable.pageNumber);
        setTotal(page.totalElements);
        setPageSize(page.size);
        setUsers(page.content);
        console.log(response);
      })
      .finally(() => setIsLoading(false));
  }
  function showMainPainel() {
    return (
      <>
        <PageHeader
          title="Usuários"
          subtitle="Controle acessos de cada membro dos times"
        ></PageHeader>
      </>
    );
  }

  function showUsersTable() {
    return (
      userMock && (
        <UsersTable
          users={userMock}
          totalRowCount={total}
          pageSize={pageSize}
          currentPage={currentPage}
          onEdit={setSelectedUser}
          onPageChange={() => loadUsers()}
          loading={isLoading}
        />
      )
    );
  }

  return (
    <DefaultLayout>
      {showMainPainel()}
      <MainContainer>{showUsersTable()}</MainContainer>
    </DefaultLayout>
  );
}
