
export const formatCpfCnpj = (value) => {
  const cpfCnpj = value.replace(/\D/g, '');
  
  if (cpfCnpj.length === 11) {
    return cpfCnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3-\$4");
  } 
  
  return cpfCnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3/\$4-\$5");
}