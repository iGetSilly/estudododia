import React, { useState } from "react";
import { UserContext } from "./userContext";

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const login = (nameIn: string, emailIn: string) => {
    setName(nameIn);
    setEmail(emailIn);
  };

  const logout = () => {
    setName("");
    setEmail("");
  };

  return (
    <UserContext.Provider value={{ name, email, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
