export const formatDate = (value, field) => {
  try {
    const year = value.substring(0,4);
    const month = value.substring(4,6);
    const day = value.substring(6,8);
    
    const date = new Date(year, month-1, day);
    return [date];
  } catch (error) {
    return [value, { field, message: 'Data inválida' }];
  }
}