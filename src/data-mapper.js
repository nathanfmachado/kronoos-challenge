import { formatCurrency, formatCpfCnpj, formatDate, formatNumber } from "./formatters/index.js";
import { validateVlPresta } from "./validators/index.js";

const BRLformatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const dataMapper = (data) => {
  const dataErrors = [];

  const [vlTotal, vlTotalError] = formatCurrency(data.vlTotal, 'vlTotal', BRLformatter);
  const [vlPresta, vlPrestaError] = formatCurrency(data.vlPresta, 'vlPresta', BRLformatter);
  const vlPrestaCalcError = validateVlPresta(data);
  if (vlPrestaCalcError) {
    dataErrors.push(vlPrestaCalcError);
  }
  const [vlMora, vlMoraError] = formatCurrency(data.vlMora, 'vlMora', BRLformatter);
  const [qtPrestacoes, qtPrestacoesError] = formatNumber(data.qtPrestacoes, 'qtPrestacoes');
  const [nrCpfCnpj, nrCpfCnpjError] = formatCpfCnpj(data.nrCpfCnpj, 'nrCpfCnpj');
  const [dtContrato, dtContratoError] = formatDate(data.dtContrato, 'dtContrato');
  const [dtVctPre, dtVctPreError] = formatDate(data.dtVctPre, 'dtVctPre');

  dataErrors.push(vlTotalError, vlPrestaError, vlMoraError, qtPrestacoesError, nrCpfCnpjError, dtContratoError, dtVctPreError);

  const formattedData = {
    vlTotal,
    vlPresta,
    vlMora,
    qtPrestacoes,
    nrCpfCnpj,
    dtContrato,
    dtVctPre,
  
    rowErrors: dataErrors.filter((error) => error),
  };

  return formattedData;
}
