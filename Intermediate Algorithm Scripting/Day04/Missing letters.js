
let fearNotLetter = str => {
  let firstChar = str.charAt(0);
  let lastChar = str.charAt(str.length-1);
  let sum = 0; var strSum = 0;
  for(let i = firstChar.charCodeAt(0); i <= lastChar.charCodeAt(0);i++){
    sum+= i;
  } 
  
  for(let j = 0;j<str.length;j++){
    strSum += str.charCodeAt(j);
  }
  
  if(sum > strSum){
    return String.fromCharCode(sum-strSum);
  }
  else {
    return undefined;
  }
}

fearNotLetter("abd");
