function confirmEnding(str1, str2) {
    const keep = str1.slice(str1.length - str2.length, str1.length);

    if (keep == str2) {
        return true;
    } else return false;
}

const result1 = confirmEnding("Bastian", "n");
console.log(result1);

const result2 = confirmEnding("Congratulation", "on");
console.log(result2);

const result3 = confirmEnding("Bastian", "n");
console.log(result3);