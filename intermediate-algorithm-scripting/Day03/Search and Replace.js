const myReplace = (str, before, after) => {
  let afterr = after;
  const arr = str.split(' ');
  for (const i in arr) {
    if (arr[i] === before) {
      if (arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) {
        afterr = after.charAt(0).toUpperCase() + after.slice(1);
      }
      arr.splice(i, 1, afterr);
    }
  }
  return arr.join(' ');
};

myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting');
