import Reading from '../models/owns/reading';
import { dayDiff } from './dates';

export const canAddReading = (
  readings: Reading[],
  updateFrequency: number
): boolean => {
  return (
    (readings.length &&
      dayDiff(new Date([...readings].reverse()[0].createdAt), new Date()) >
        updateFrequency) ||
    !readings.length
  );
};
