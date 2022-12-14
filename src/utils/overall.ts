import Reading from '../models/owns/reading';
import { dayDiff } from './dates';
import { FileType } from '../models/owns/file';

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

export const getImageAndFiles = (
  files: { id: number; type: FileType }[],
  imageFallback?
) => {
  return {
    image: files.find((file) => file.type === 'IMAGE')
      ? { id: files.find((file) => file.type === 'IMAGE').id }
      : imageFallback ?? null,
    files: files
      .filter((file) => file.type === 'OTHER')
      .map((file) => {
        return { id: file.id };
      })
  };
};
