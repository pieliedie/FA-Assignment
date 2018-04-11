function uniteUnique(...args) {
  const newArr = [];
  for (const element of args) {
    newArr.push(...element);
  }

  const set = new Set();

  newArr.map((elem) => {
    set.add(elem);
  });
  return Array.from(set);
}

module.exports = uniteUnique;
