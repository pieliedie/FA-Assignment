
let whatIsInAName = (collection, source) => {
    // What's in a name?
    let arr = [];
    // Only change code below this line
    let keys = Object.keys(source);
    let values = Object.values(source);
    for(let elem of collection){
      let count = 0;
      for(let i = 0 ; i < keys.length ; i++){
        
        if(elem.hasOwnProperty(keys[i])){
          count++;
        }
      }
      if(count == keys.length){
        let elemVal = Object.values(elem);
        let count = 0;
        for(let val of values){
          if(elemVal.includes(val)){
            count++;
          }
        }
        if(count == values.length){
          arr.push(elem);
        }
      }
    }
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  