import { validateVlPresta } from "./validators/index.js";

export const getDataErrors = (data, formattedData) => {
  const dataErrors = [];

  const vlPrestaError = validateVlPresta(data);
  if (vlPrestaError) {
    dataErrors.push(vlPrestaError);
  }

  

  return dataErrors;
}
