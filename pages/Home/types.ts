import { ReactNode } from 'react';

export interface HomeProps {
  children?: ReactNode;
  weather: any;
  city: string | null | undefined;
}
