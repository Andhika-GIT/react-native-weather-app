export const nowToHHMM: () => string = () => {
  const d = new Date();

  // change 12:7 to 12:07, by using padStart()

  return `${d.getHours()}:${d.getMinutes().toString().padStart(2, '0')}`;
};
