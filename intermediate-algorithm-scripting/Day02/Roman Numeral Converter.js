const convertToNumberArray = (num) => {
  const arr = String(num).split('');
  const result = [];
  for (const i in arr) {
    let length = arr.length - i;
    while (length > 1) {
      arr[i] += '0';
      length--;
    }
    result.push(arr[i]);
  }
  return result;
};

const convertToRoman = (num) => {
  const arr = convertToNumberArray(num);
  const result = [];
  const romanMap = new Map();
  romanMap.set('1', 'I');
  romanMap.set('2', 'II');
  romanMap.set('3', 'III');
  romanMap.set('4', 'IV');
  romanMap.set('5', 'V');
  romanMap.set('6', 'VI');
  romanMap.set('7', 'VII');
  romanMap.set('8', 'VIII');
  romanMap.set('9', 'IX');
  romanMap.set('10', 'X');
  romanMap.set('20', 'XX');
  romanMap.set('30', 'XXX');
  romanMap.set('40', 'XL');
  romanMap.set('50', 'L');
  romanMap.set('60', 'LX');
  romanMap.set('70', 'LXX');
  romanMap.set('80', 'LXXX');
  romanMap.set('90', 'XC');
  romanMap.set('100', 'C');
  romanMap.set('200', 'CC');
  romanMap.set('300', 'CCC');
  romanMap.set('400', 'CD');
  romanMap.set('500', 'D');
  romanMap.set('600', 'DC');
  romanMap.set('700', 'DCC');
  romanMap.set('800', 'DCCC');
  romanMap.set('900', 'CM');
  romanMap.set('1000', 'M');
  romanMap.set('2000', 'MM');
  romanMap.set('3000', 'MMM');

  for (const elem of arr) {
    if (romanMap.has(elem)) {
      result.push(romanMap.get(elem));
    }
  }
  return result.join('');
};

convertToRoman(55);
