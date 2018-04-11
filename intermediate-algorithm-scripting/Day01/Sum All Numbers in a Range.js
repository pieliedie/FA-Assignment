const sumAll = (arr) => {
  let result = 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
};

sumAll([1, 4]);
