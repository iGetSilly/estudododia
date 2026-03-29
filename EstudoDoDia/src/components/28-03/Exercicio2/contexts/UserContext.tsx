import { createContext, useContext } from "react";

export type UserContextType = {
  name: string;
  email: string;
  login: (name: string,  email:string) => void,
  logout: () => void
};

export const UserContext = createContext<UserContextType | null>(null);

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("O context deve ser usado dentro do userProvider");
  return ctx;
}
