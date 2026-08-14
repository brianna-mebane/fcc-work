const divideByFour = year => year % 4 === 0;
const divideByHundred = year => year % 100 === 0;
const divideByFourHundred = year => year % 400 === 0;

function isLeapYear(year) {
    let a = divideByFour(year);
    let b = divideByHundred(year);
    let c = divideByFourHundred(year);

    if (a && !b || a && c) {
        return `${year} is a leap year.`
    } else return `${year} is not a leap year.`
}