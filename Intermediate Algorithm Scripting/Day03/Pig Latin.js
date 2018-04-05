let translatePigLatin = (str) => {
    let arr = str.split("");
    if (['a', 'e', 'i', 'o', 'u'].includes(arr[0])) {
        arr.push("way");
        return arr.join("");
    }
    else {
        while (!['a', 'e', 'i', 'o', 'u'].includes(arr[0])) {
            let char = arr.shift();
            arr.push(char);

        }
        arr.push("ay");

        return arr.join("");
    }
}

translatePigLatin("glove");