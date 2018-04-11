const diffArray = (arr1, arr2) => {
  const newArr = [];
  const onlyInFirst = (firstArr, secondArr) => {
    for (let i = 0; i < firstArr.length; i++) {
      if (!secondArr.includes(firstArr[i])) {
        newArr.push(firstArr[i]);
      }
    }
  };

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
};

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
