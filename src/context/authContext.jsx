import { createContext, useState, useMemo } from "react";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") ? true : false
  );

  const auth = useMemo(
    () => ({
      isAuthenticated,
      setIsAuthenticated: (isAuthenticated) => {
        setIsAuthenticated(isAuthenticated);
        localStorage.setItem("isAuthenticated", isAuthenticated);
      },
    }),
    [isAuthenticated]
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
