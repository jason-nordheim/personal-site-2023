/** case insensitive compare of two strings  */
export const sortAscending = (strA: string, strB: string) => {
  const lowerA = strA.toLowerCase();
  const lowerB = strB.toLowerCase();
  if (lowerA < lowerB) return -1;
  if (lowerA > lowerB) return 1;
  return 0;
};

/** case insensitive compare of two strings  */
export const sortDescending = (strA: string, strB: string) => {
  const lowerA = strA.toLowerCase();
  const lowerB = strB.toLowerCase();
  if (lowerA < lowerB) return 1;
  if (lowerA > lowerB) return -1;
  return 0;
};
