import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';

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

//   const login = (username: string, password:  string) => setUser({ username, password });

const [loading, setLoading] = useState(false);
const login = async (username: string, password: string) => {
  if (!username || !password) {
    Alert.alert('Error', 'Please enter both username and password.');
    return;
  }

  try {
    setLoading(true);
    // const response = await axios.post('https://your-api.com/api/login', {
    //   username,
    //   password,
    // });

    // // Assuming response.data contains a user object or token
    // const user = response.data;

    // Save user in context
    setUser({ username:username , password }); // or setUser(user) if your context is more complex "user.username"
  } catch (error: any) {
    Alert.alert('Login Failed', error?.response?.data?.message || 'Invalid credentials');
  } finally {
    setLoading(false);
  }
};



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
