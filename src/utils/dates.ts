export const dayDiff = (date1: Date, date2: Date) => {
  const difference_In_Time = Math.floor(date2.getTime() - date1.getTime());
  return difference_In_Time / (1000 * 3600 * 24);
};
