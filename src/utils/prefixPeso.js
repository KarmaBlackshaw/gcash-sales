export const prefixPeso = peso => {
  if (isNaN(peso)) {
    return '₱0'
  }

  return `₱${Number(peso).toLocaleString() }`
}