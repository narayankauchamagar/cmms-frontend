export const formatSelect = (array: { label: string; value: string }[]) => {
  return array
    ? array.map(({ value }) => {
        return { id: Number(value) };
      })
    : [];
};
