import { createContext, useContext, useState } from "react";

interface DepartmentContextProps {
  selectedDepartment: string;
  setSelectedDepartment: (value: string) => void;
}

interface DepartmentContextProviderProps {
  children: React.ReactNode;
}

const DepartmentContext = createContext<DepartmentContextProps>(
  {} as DepartmentContextProps
);

const DepartmentContextProvider: React.FC<DepartmentContextProviderProps> = ({
  children,
}) => {
  const [selectedDepartment, setSelectedDepartment] = useState("");

  return (
    <DepartmentContext.Provider
      value={{ selectedDepartment, setSelectedDepartment }}
    >
      {children}
    </DepartmentContext.Provider>
  );
};

const useDepartmentContext = (): DepartmentContextProps => {
  const context = useContext(DepartmentContext);
  return context;
};

export { DepartmentContextProvider, useDepartmentContext };
