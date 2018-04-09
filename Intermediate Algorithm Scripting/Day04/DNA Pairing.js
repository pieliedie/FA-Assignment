let pairElement = (str) => {
  let arr = str.split('');
  let result = [];
  for(let elem of arr){
    switch(elem){
      case "A":
        result.push([elem,"T"]);
        break;
      case "T":
        result.push([elem,"A"]);
        break;
      case "G":
        result.push([elem,"C"]);
        break;
      case "C":
        result.push([elem,"G"]);
        break;
    }
  }
  return result;
}

pairElement("GCG");