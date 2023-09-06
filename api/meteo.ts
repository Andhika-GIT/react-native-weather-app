import axios from 'axios';

interface coordinates {
  lat: string | number;
  lng: string | number;
}

interface city {}

export const fetchWeatherByCoordinates: (coordinates: coordinates | null | undefined) => Promise<any> = async (coordinates) => {
  const result = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates?.lat}&longitude=${coordinates?.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`);

  return result.data;
};

export const fetchCityByCoordinates: (coordinates: coordinates | null | undefined) => Promise<string> = async (coordinates) => {
  const result = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coordinates?.lat}&lon=${coordinates?.lng}`);

  const { city, village, town } = result.data.address;

  return city || village || town;
};
