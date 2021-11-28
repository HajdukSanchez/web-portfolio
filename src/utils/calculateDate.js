export const calculateMonthsBetweenDates = (startDate) => {
  const start = new Date()
  const end = new Date(startDate)
  const months = (end.getFullYear() - start.getFullYear()) * 12
  const monthsBetween = months - start.getMonth()
  return monthsBetween
}
