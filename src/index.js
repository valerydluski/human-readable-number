module.exports = function toReadable(number) {
    let arr0_9 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr10_19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr3 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const first = (n) => arr0_9[n];
    if (number >= 0 && number < 10) return first(number);
    if (number > 9 && number < 20) return arr10_19[number % 10];
    if (number > 19 && number < 100) {
        let remainder = number % 10;
        let decade = Math.floor(number / 10);
        if (remainder == 0) return arr3[decade];
        if (remainder > 0) return arr3[decade] + ' ' + first(remainder);
    }
    if (number > 99 && number < 1000) {
        let hundred = Math.floor(number / 100);
        let remainderHundred = number % 100;
        let decade = Math.floor(remainderHundred / 10);
        let remainder = remainderHundred % 10;

        if (remainderHundred == 0) return arr0_9[hundred] + ' hundred';
        if (remainderHundred > 0 && remainderHundred < 10) return first(hundred) + ' hundred ' + first(remainderHundred);
        if (remainderHundred > 9 && remainderHundred < 20) {
            let remainder = remainderHundred % 10;
            return first(hundred) + ' hundred ' + arr10_19[remainder];
        }
        if (remainderHundred > 19 && remainderHundred < 100) {
            if (remainder == 0) return first(hundred) + ' hundred ' + arr3[decade];
            if (remainder > 0) return first(hundred) + ' hundred ' + arr3[decade] + ' ' + first(remainder);
        }
    }
}
