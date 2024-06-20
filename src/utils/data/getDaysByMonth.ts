export const getDaysByMonth = (
  monthIndex: number,
  year: number = new Date().getFullYear()
) => new Date(year, monthIndex + 1, 0).getDate();
// 2024, 6 + 1, 0 - из-за этого вернется последний денб прошлого месяца, то есть 30, для июня
