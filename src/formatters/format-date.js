export const formatDate = (value) => {
  const year = value.substring(0,4);
  const month = value.substring(4,6);
  const day = value.substring(6,8);

  return new Date(year, month-1, day);
}