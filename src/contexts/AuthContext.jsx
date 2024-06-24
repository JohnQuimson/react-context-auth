import { Children, createContext, useContext } from 'react';

const AuthContext = createContext();

const values = {};

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const value = useContext(AuthContext);
  if (value === undefined) {
    throw new Error('Non sei dentro all Auth Provider');
  }
  return value;
};

export { AuthProvider, useAuth };
