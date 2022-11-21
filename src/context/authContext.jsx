import { createContext, useState, useMemo } from "react";


const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const auth = useMemo(
    () => ({
      isAuthenticated,
      setIsAuthenticated
    }),
    [isAuthenticated]
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
