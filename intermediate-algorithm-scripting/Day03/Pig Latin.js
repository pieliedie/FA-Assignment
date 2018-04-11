const translatePigLatin = (str) => {
  const arr = str.split('');
  if (['a', 'e', 'i', 'o', 'u'].includes(arr[0])) {
    arr.push('way');
    return arr.join('');
  }
  while (!['a', 'e', 'i', 'o', 'u'].includes(arr[0])) {
    const char = arr.shift();
    arr.push(char);
  }
  arr.push('ay');

  return arr.join('');
};

translatePigLatin('glove');
