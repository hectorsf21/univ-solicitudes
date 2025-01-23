"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definimos la estructura del user (ajustar según lo que uses en tu aplicación)
interface User {
  id: number;
  name: string;
}

// Interfaz para el contexto
interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

// Creamos el contexto, con valor por defecto como null
const UserContext = createContext<UserContextType | undefined>(undefined);

// Componente proveedor del contexto
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => setUser(user);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para consumir el contexto
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
