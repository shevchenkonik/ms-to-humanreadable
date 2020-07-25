export const msToMHS = (ms: number): string => {
  const sign = ms < 0 ? '-' : '';

  const abs = Math.abs(ms);

  const seconds = `0${Math.floor(abs / 1000) % 60}`.slice(-2);

  const minutes = `0${Math.floor(abs / 60000) % 60}`.slice(-2);

  const hours = Math.floor(abs / 3600000);

  return `${sign}${hours}:${minutes}:${seconds}`;
};
