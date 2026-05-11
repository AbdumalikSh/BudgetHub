import { createContext, useState } from "react";

export const UserContext = createContext();
const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (userData) => {
    setUser(userData);
  };
  const clearUser = () => {
    setUser(null);
  };

  const value = { user, updateUser, clearUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default AppContextProvider;
