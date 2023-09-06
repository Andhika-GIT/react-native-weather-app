import { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface TxtProps {
  children: ReactNode;
  style?: {
    fontSize?: number;
  };
  // style?: StyleProp<ViewStyle | TextStyle>;
}
