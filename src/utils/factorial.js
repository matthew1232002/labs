export function factorial(n) {
  let answer = 1;

  if (n === 0 || n === 1){
    return answer;
  }

  for(let i = n; i >= 1; i--){
    answer = answer * i;
  }

  return answer;
}
