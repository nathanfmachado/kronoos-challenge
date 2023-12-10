import lodash from 'lodash';

export const formatNumber = (value, field) => {
  if (lodash.isNaN(value)) {
    return [value, { field, message: 'Valor não é numérico' }];
  }
  return [Number(value)];
}