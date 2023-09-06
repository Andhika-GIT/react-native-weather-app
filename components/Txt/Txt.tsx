import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React, { FunctionComponent } from 'react';

import { s } from './Text.style';

import { TxtProps } from './types';

// responsive ration text
const PHONE_RATIO = 0.0013882461823229986;

const Txt: FunctionComponent<TxtProps> = ({ children, style }) => {
  const fontSize = style?.fontSize || s.text.fontSize;
  const { height } = useWindowDimensions();
  console.log(Math.round(fontSize * PHONE_RATIO * height));
  return (
    <Text
      style={[
        s.text,
        style,
        {
          fontSize: Math.round(fontSize * PHONE_RATIO * height),
        },
      ]}
    >
      {children}
    </Text>
  );
};

export default Txt;
