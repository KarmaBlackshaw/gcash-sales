export const trimPeso = peso => {
  return Number(peso.replaceAll('₱', ''))
}