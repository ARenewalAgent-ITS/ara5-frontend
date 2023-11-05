export const toCsv = <T extends object>(data: T[]): string => {
  const csvRows = ['sep=,'];
  csvRows.push(Object.keys(data[0]).join(','));

  data.forEach((row) => {
    const modifiedRow = Object.values(row).map((cell) => `"${cell}"`);
    csvRows.push(modifiedRow.join(','));
  });

  return csvRows.join('\n');
};

export const getCsv = <T extends object>(
  data: T[],
  fileName?: string
): void => {
  const csv = toCsv(data);
  const csvDataUri = `data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`;

  const link = document.createElement('a');
  link.href = csvDataUri;
  link.download = fileName ?? 'data.csv';
  link.style.display = 'none';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
