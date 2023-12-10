import { formatCurrency, formatCpfCnpj } from "./formatters/index.js";
import { getDataErrors } from "./get-data-errors.js";

const BRLformatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const dataMapper = (data) => {
  const formattedData = {
    vlTotal: formatCurrency(data.vlTotal, BRLformatter),
    vlPresta: formatCurrency(data.vlPresta, BRLformatter),
    vlMora: formatCurrency(data.vlMora, BRLformatter),
    qtPrestacoes: Number(data.qtPrestacoes),
    nrCpfCnpj: formatCpfCnpj(data.nrCpfCnpj),
  
  };

  const dataErrors = getDataErrors(data, formattedData)
  formattedData.rowErrors = dataErrors;

  return formattedData;
}
