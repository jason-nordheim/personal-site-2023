export const capitalizeFirstChar = (str: string) => {
  const firstChar = str[0].toUpperCase();
  const updatedStr = `${firstChar}${str.slice(1)}`;
  return updatedStr;
};
