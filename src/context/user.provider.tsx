import { getCurrentUser } from "@/services/Auth";
import { TUser } from "@/types";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { toast } from "sonner";

export interface IMeta {
  total: number;
  totalPage: number;
  limit: number;
  page: number;
}

interface IUserProviderValues {
  user: TUser | null;
  isLoading: boolean;
  setUser: (user: TUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  handleLoginExpiry: () => void;
}

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    const user = await getCurrentUser();

    setUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  const handleLoginExpiry = () => {
    setUser(null);
    setIsLoading(false);
    toast("Your session has been expired. Please log in again.");
  };

  const providerValues = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    handleLoginExpiry,
  };

  return (
    <UserContext.Provider value={providerValues}>
      {children}
    </UserContext.Provider>
  );
};

// Hook
export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within the UserProvider context");
  }

  return context;
};

export default UserProvider;
