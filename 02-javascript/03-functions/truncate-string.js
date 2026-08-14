function truncateString (str, num) {
    if(str.length <= num) {
        return str;
    } else {
        const newString = str.slice(0, num);
        return `${newString}...`
    }
}