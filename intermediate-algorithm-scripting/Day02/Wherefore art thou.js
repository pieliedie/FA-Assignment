const whatIsInAName = (collection, source) => {
  // What's in a name?
  const arr = [];
  // Only change code below this line
  const keys = Object.keys(source);
  const values = Object.values(source);
  for (const elem of collection) {
    let count = 0;
    for (let i = 0; i < keys.length; i++) {
      if (elem.hasOwnProperty(keys[i])) {
        count++;
      }
    }
    if (count === keys.length) {
      const elemVal = Object.values(elem);
      let countt = 0;
      for (const val of values) {
        if (elemVal.includes(val)) {
          countt++;
        }
      }
      if (countt === values.length) {
        arr.push(elem);
      }
    }
  }
  // Only change code above this line
  return arr;
};

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' },
);
