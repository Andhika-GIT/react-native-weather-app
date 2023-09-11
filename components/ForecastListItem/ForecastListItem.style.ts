import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  image: {
    width: 40,
    height: 40,
  },
  day: {
    fontSize: 15,
  },
  date: {
    fontSize: 15,
  },
  temperature: {
    fontSize: 20,
    minWidth: 50,
    textAlign: 'right',
  },
});
