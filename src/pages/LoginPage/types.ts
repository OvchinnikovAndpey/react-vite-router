import { ReactNode } from 'react';

export interface LoginPageProps {
  data: LoginPageData | null;
  error: string | null;
  onSubmit: (email: string, password: string) => void;
}

export interface LoginPageData {
  message: string;
}