import { View, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export interface SearchBarProps {
  onSubmit: (e: string) => void;
}
