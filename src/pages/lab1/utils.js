import {factorial} from "../../utils/factorial";

export const calcLinear = (b, c) => {
  const left = b * Math.sqrt(c) / 2**b;
  const right = c * Math.sqrt(b) / 2**c;

  return (left - right).toFixed(3);
}

export const calcBranched = (x, a, b) => {
  if (x > 0) return a * x**3 - b * x**2;

  return (b * x**3 + a * x**2).toFixed(3);
};

export const calcCircular = (n, j, i) => {
  let left = 1;
  let right = 0;

  while(n > 0) {
    left *= factorial(j);
    right += factorial(i);
    j++;
    i++;
    n--;
  }

  return (left - right).toFixed(3);
};
