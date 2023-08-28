import { useDepartmentContext } from "context/DepartmentContext";
import { StyledContainerFragment } from "./styles";
import { ProfileData } from "components/MicrosoftSignIn/ProfileData";

export function FragmentComponent(): JSX.Element {
  const { selectedDepartment, setSelectedDepartment } = useDepartmentContext();
  return (
    <StyledContainerFragment>
      <h3>{selectedDepartment}</h3>
    </StyledContainerFragment>
  );
}
