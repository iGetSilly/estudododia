import { createContext, useContext } from "react";

export type User = {
    name:string,
    email: string
}

export type UserContextType = {
  user: User | null
  login: (user: User) => void,
  logout: () => void
};

export const UserContext = createContext<UserContextType | null>(null);

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("O context deve ser usado dentro do userProvider");
  return ctx;
}
