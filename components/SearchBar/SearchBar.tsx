import { View, Text, TextInput } from 'react-native';
import React from 'react';

import { s } from './SearchBar.style';
import { SearchBarProps } from './types';

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  return <TextInput onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)} style={s.input} placeholder="Type a city..." />;
};

export default SearchBar;
