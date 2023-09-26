import { useDepartmentContext } from "context/DepartmentContext";
import { StyledContainerFragment } from "./styles";
import { ProfileData } from "components/MicrosoftSignIn/ProfileData";
import { UserManagerComponent } from "container/UsersManager";

export function FragmentComponent(): JSX.Element {
  const { selectedDepartment, setSelectedDepartment } = useDepartmentContext();
  return (
    <StyledContainerFragment>
      {selectedDepartment === "Usuários" && (
        <>
          <UserManagerComponent></UserManagerComponent>
        </>
      )}
    </StyledContainerFragment>
  );
}
