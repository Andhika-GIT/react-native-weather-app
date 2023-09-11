export type ForecastsParams = {
  Home: undefined;
  Details: {
    city: string;
    time: Array<string>;
    weathercode: Array<number>;
    temperature_2m_max: Array<number>;
  };
};
