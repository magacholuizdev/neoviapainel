import { ReactNode, createContext, useEffect, useState } from "react";
import { User } from "@/services/user/type";
import { useRouter } from "next/router";
import { getUsers } from "@/services/user";

interface ProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  users: User[];
  loading: boolean;
  totalElements: number;
  handleGetUsers: (page?: number) => Promise<void>;
}

export const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({ children }: ProviderProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [bufferedUsers, setBufferedUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [totalElements, setTotalElements] = useState<number>(0);

  const router = useRouter();

  async function handleGetUsers(page: number = 0) {
    setLoading(true);

    try {
      const { content, totalElements } = await getUsers({ page, size: 10 });
      setBufferedUsers(content || []);
      setUsers(content || [])
      setTotalElements(totalElements)
      console.log(totalElements)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleGetUsers();
  }, [])

  return (
    <UserContext.Provider value={{
      users,
      loading,
      totalElements,
      handleGetUsers
    }}>
      {children}
    </UserContext.Provider>
  );
}
