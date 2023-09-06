import { ReactNode } from 'react';

export interface MeteoProps {
  children?: ReactNode;
  temperature: number;
  interpretation:
    | {
        codes: number[];
        label: string;
        image: any;
      }
    | undefined;
  city: string | null | undefined;
}
