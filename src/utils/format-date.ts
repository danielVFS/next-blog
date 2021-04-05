export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  return date.toLocaleString('pt-BR', {
    dateStyle: 'medium',
  });
};

console.log(formatDate('2021-03-02T15:16:09.246+00:00'));
