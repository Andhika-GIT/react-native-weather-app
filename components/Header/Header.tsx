import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { s } from './Header.style';

// components
import Txt from '../Txt/Txt';

// react-navigation
import { useNavigation } from '@react-navigation/native';

// types
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ city }) => {
  const navigate = useNavigation();
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.back_btn} onPress={() => navigate.goBack()}>
        <Txt>{'<'}</Txt>
      </TouchableOpacity>
      <View style={s.header_txt}>
        <Txt>{city.toUpperCase()}</Txt>
        <Txt style={s.subtitle}>7 day forecasts</Txt>
      </View>
    </View>
  );
};

export default Header;
