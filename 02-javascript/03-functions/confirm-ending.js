function confirmEnding(str1, str2) {
    const keep = str1.slice(str1.length - str2.length, str1.length);

    if (keep == str2) {
        return true;
    } else return false;
}