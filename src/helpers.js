export const TEST = 'placeholder to prevent eslint';

export function declension(number, one, two, five) {
  let num = number;

  num = Math.abs(num);
  num %= 100;

  if (num >= 5 && num <= 20) {
    return five;
  }

  num %= 10;
  if (num === 1) {
    return one;
  }

  if (num >= 2 && num <= 4) {
    return two;
  }

  return five;
}
