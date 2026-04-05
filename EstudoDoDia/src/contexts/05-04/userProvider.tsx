import React, { useState } from "react";
import { UserContext, type User } from "./userContext";




export default function UserProvider({
  children,
} : {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null)

  const login = (userData: User) => setUser(userData)
  const logout = () => setUser(null)

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
