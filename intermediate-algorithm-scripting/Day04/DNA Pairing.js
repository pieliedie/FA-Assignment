const pairElement = (str) => {
  const arr = str.split('');
  const result = [];
  for (const elem of arr) {
    switch (elem) {
      case 'A':
        result.push([elem, 'T']);
        break;
      case 'T':
        result.push([elem, 'A']);
        break;
      case 'G':
        result.push([elem, 'C']);
        break;
      case 'C':
        result.push([elem, 'G']);
        break;
      default:
    }
  }
  return result;
};

pairElement('GCG');
