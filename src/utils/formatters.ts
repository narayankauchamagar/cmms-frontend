export const formatSelect = (array: { label: string; value: string }[]) =>
  array.map(({ value }) => {
    return { id: Number(value) };
  });
