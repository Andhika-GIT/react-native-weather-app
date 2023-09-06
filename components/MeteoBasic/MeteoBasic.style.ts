import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {},
  clock: {
    alignItems: 'flex-end',
  },
  city: {},
  interpretation: {
    alignSelf: 'flex-end',
    transform: [
      {
        rotate: '-90deg',
      },
    ],
  },
  temperature_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  temperature: {
    fontSize: 100,
  },
  image: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
  },
});
