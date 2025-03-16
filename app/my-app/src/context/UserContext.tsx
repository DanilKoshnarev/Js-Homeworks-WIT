import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
  id: number;
  email: string;
  name: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  isAuthenticated: () => boolean;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const response = await axios.post('/api/login', { email, password });
    const token = response.data.token;
    localStorage.setItem('token', token);
    await fetchUser();
  };

  const register = async (name: string, email: string, password: string) => {
    const response = await axios.post('/api/register', { name, email, password });
    const token = response.data.token;
    localStorage.setItem('token', token);
    await fetchUser();
  };

  const fetchUser = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await axios.get('/api/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.data);
    }
  };

  const isAuthenticated = () => !!user;

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, login, register, isAuthenticated, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
