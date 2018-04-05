let myReplace = (str, before, after) => {
    let arr = str.split(" ");
    for (let i in arr) {
        if (arr[i] === before) {
            if (arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) {
                after = after.charAt(0).toUpperCase() + after.slice(1);
            }
            arr.splice(i, 1, after);
        }
    }
    return arr.join(" ");
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");