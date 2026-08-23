function mutation(array) {
    let verdict = true;

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toLowerCase();
        array[i] = array[i].split("");
    }

    for (let j = 0; j < array[1].length; j++) {
        if (!array[0].includes(array[1][j])) {
            return verdict = false;
        }
    }

    return verdict;
}

console.log(mutation(["Tiger", "Zebra"]));