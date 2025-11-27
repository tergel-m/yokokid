import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = (email, password) => {
    // Simulate login - In real app, call API
    const mockUser = {
      id: 1,
      name: 'Болд',
      email: email,
      orders: [],
      addresses: []
    };
    setUser(mockUser);
    return mockUser;
  };

  const register = (name, email, password) => {
    // Simulate registration - In real app, call API
    const newUser = {
      id: Date.now(),
      name,
      email,
      orders: [],
      addresses: []
    };
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
