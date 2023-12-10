
export const validateVlPresta = ({ vlTotal, qtPrestacoes, vlPresta }) => {
  try {
    const vlTotalNumber = Math.round((vlTotal + Number.EPSILON) * 100) / 100;
    const qtPrestacoesNumber = Number(qtPrestacoes);
    const vlPrestaNumber = Math.round((vlPresta + Number.EPSILON) * 100) / 100;

    const vlPrestaCalc = vlTotalNumber / qtPrestacoesNumber;
    const vlPrestaRounded = Math.round((vlPrestaCalc + Number.EPSILON) * 100) / 100;
    
    // Compare floating point numbers with one cent tolerance
    if (vlPrestaRounded !== vlPrestaNumber) {
      return { field: 'vlPresta', error: 'O valor da prestação está incorreto' };
    }
  } catch (error) {
    return { field: 'vlPresta', error: error.message };
  }
}
