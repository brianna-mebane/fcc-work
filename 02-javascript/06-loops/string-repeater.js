function repeatStringNumTimes(string, repetition) {
    let stringRepeated = "";
    
    for (let i = 0; i < repetition; i++) {
        stringRepeated += string;
    }

    return stringRepeated;
}