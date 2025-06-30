import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  username: string;
  password: string; // Optional for simplicity, can be removed if not needed
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password:  string) => setUser({ username, password });

  const logout = () => setUser(null);

  console.log(`User logged in: ${user ? user.username : 'None'}`);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export  const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
