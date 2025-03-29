'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

type AuthContextType = {
  isAuthenticated: boolean;
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          api.defaults.headers.Authorization = `Bearer ${token}`;
          // Optionally fetch user data here
          // const { data } = await api.get('/auth/me');
          // setUser(data.user);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    api.defaults.headers.Authorization = `Bearer ${data.token}`;
    setUser(data.user); // Or fetch user data
    router.push('/dashboard');
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.Authorization;
    setUser(null);
    router.push('/login');
  };

  const value = {
    isAuthenticated: !!user,
    user,
    login,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}