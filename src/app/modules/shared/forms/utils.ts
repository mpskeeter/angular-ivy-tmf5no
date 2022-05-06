export const convertDate = (inDate: Date | string): string => {
  let date = inDate as Date;

  const checkDate = (date, type) =>
    Object.prototype.toString.call(date) === `[object ${type}]`;

  const padStr = (i: number): string => {
    return i < 10 ? '0' + i : '' + i;
  };

  if (!checkDate(inDate, 'Date')) {
    if (!checkDate(inDate, 'String')) return;
    date = new Date(inDate);
  }

  const year = padStr(date.getFullYear());
  const month = padStr(date.getMonth() + 1);
  const day = padStr(date.getDate());
  const newDate = year + '-' + month + '-' + day;
  return newDate;
};
