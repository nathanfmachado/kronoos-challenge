
export const validateVlPresta = ({ vlTotal, qtPrestacoes, vlPresta }) => {
  try {
    const vlTotalNumber = Number(vlTotal);
    const qtPrestacoesNumber = Number(qtPrestacoes);
    const vlPrestaNumber = Number(vlPresta);

    const vlPrestaCalc = vlTotalNumber / qtPrestacoesNumber;
    
    // Compare floating point numbers with one cent tolerance
    if (vlPrestaCalc < vlPrestaNumber - 0.01 || vlPrestaCalc > vlPrestaNumber + 0.01) {
      return { field: 'vlPresta', error: 'O valor da prestação está incorreto' };
    }
    console.log('foi')
    return;
  } catch (error) {
    return { field: 'vlPresta', error: error.message };
  }
}
