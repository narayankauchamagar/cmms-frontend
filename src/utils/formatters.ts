export const formatSelectMultiple = (
  array: { label: string; value: string }[]
) => {
  return array
    ? array.map(({ value }) => {
        return { id: Number(value) };
      })
    : [];
};

export const formatSelect = (id: string) => {
  return id ? { id: Number(id) } : null;
};
