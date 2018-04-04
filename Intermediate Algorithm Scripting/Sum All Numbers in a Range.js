let sumAll = arr => {
  let result = 0;
  let max  = Math.max(...arr);
  let min = Math.min(...arr);
  for(let i = min ; i <= max ; i++){
    result+=i;
  }
  return result;
}

sumAll([1, 4]);
