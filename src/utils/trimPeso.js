export const trimPeso = peso => {
  return Number(peso.replace(/[₱,\s]/gi, ''))
}