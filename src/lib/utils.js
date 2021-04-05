import numeral from 'numeral';
import {
  format, add, sub,
  eachWeekOfInterval,
  getMonth,
  getDate
} from 'date-fns';

export const formatBalance = (balance) => (
  numeral(balance).format('0.00')
);

export const formatBalanceForBar = (balance) => (
  balance < 100
    ? formatBalance(balance)
    : numeral(balance).format('0')
);

const today = new Date();

export const weeklyData = eachWeekOfInterval({
  start: sub(today, { days: 400 }),
  end: today
})
  .map((sunday) => {
    const monday = add(sunday, { days: 1 });
    const nextMonday = add(monday, { days: 7 });
    return ({
      start:monday,
      end:nextMonday
    });
  })
  .map((i) => {
    const nextSunday = sub(i.end, { days:1 });
    const showYear = getMonth(i.start) === 0 && getDate(i.start) < 7;
    return ({
      ...i,
      label: `${format(i.start, 'dd')}-${format(nextSunday, 'dd')} ${format(i.start, ('MMM' + (showYear ? 'yy' : '')))}`
    });
  })
  .reverse();
