import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

// style
import { s } from './Clock.style';

// components
import Txt from '../Txt/Txt';

// utils
import { nowToHHMM } from '../../utils/date-time';

const Clock = () => {
  const [time, setTime] = useState(nowToHHMM());
  //   const date = nowToHHMM();
  useEffect(() => {
    // run setInterval to always update the time every second
    const intervalId = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);

    // cleanup
    return () => {
      // remove the setInterval when component is unmounted
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <Txt style={s.time}>{time}</Txt>
    </>
  );
};

export default Clock;

const styles = StyleSheet.create({});
