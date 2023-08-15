export const allPropertiesTruthy = (obj: object) => {
  return Object.values(obj).every((x) => x == true);
};
