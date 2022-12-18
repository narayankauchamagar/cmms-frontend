export const dayDiff = (date1: Date, date2: Date) => {
  const diffInTime = date2.getTime() - date1.getTime();
  return Math.abs(Math.floor(diffInTime / (1000 * 3600 * 24))) - 1;
};
