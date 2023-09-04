import { StyleSheet, Text, View } from 'react-native';
import React, { FunctionComponent } from 'react';

import { s } from './Text.style';

import { TxtProps } from './types';

const Txt: FunctionComponent<TxtProps> = ({ children, style }) => {
  return <Text style={[s.text, style]}>{children}</Text>;
};

export default Txt;
