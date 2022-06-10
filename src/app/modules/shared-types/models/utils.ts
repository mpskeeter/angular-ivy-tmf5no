export const padStr = (i: number): string => {
  return i < 10 ? '0' + i : '' + i;
};

export const convertDate = (date: Date): string => {
  // console.log('convertDate:pre:', date);
  if (!date) return;
  const year = padStr(date.getFullYear());
  const month = padStr(date.getMonth() + 1);
  const day = padStr(date.getDate());
  const newDate = year + '-' + month + '-' + day;
  // console.log('convertDate:post:', newDate);
  return newDate;
};
