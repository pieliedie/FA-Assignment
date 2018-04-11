const fearNotLetter = (str) => {
  const firstChar = str.charAt(0);
  const lastChar = str.charAt(str.length - 1);
  let sum = 0;
  let strSum = 0;
  for (let i = firstChar.charCodeAt(0); i <= lastChar.charCodeAt(0); i++) {
    sum += i;
  }

  for (let j = 0; j < str.length; j++) {
    strSum += str.charCodeAt(j);
  }

  if (sum > strSum) {
    return String.fromCharCode(sum - strSum);
  }
  return undefined;
};

fearNotLetter('abd');
