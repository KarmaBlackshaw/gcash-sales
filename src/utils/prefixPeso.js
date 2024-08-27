export const prefixPeso = peso => {
  return `₱${Number(peso).toLocaleString() }`
}