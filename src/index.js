module.exports = function toReadable(number) {
    let arrOne = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let arrTwo = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let arrThree = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number < 10) {
        return arrOne[number];
    }

    if (number >= 10 && number < 20) {
        let arr = number.toString().split("");
        let secondNumb = Number(arr[1]);
        return arrTwo[secondNumb];
    }

    if (number >= 20 && number < 100) {
        let arr = number.toString().split("");
        let firstNumb = Number(arr[0]);
        let secondNumb = Number(arr[1]);

        if (secondNumb == 0) {
            return arrThree[firstNumb];
        } else {
            return arrThree[firstNumb] + " " + arrOne[secondNumb];
        }
    }

    if (number >= 100 && number < 1000) {
        let arr = number.toString().split("");
        let firstNumb = Number(arr[0]);
        let secondNumb = Number(arr[1]);
        let thirdNumb = Number(arr[2]);

        if (secondNumb === 0 && thirdNumb === 0) {
            return arrOne[firstNumb] + " hundred";
        }

        if (secondNumb === 0) {
            return arrOne[firstNumb] + " hundred " + arrOne[thirdNumb];
        } else if (secondNumb === 1) {
            return arrOne[firstNumb] + " hundred " + arrTwo[thirdNumb];
        } else if (thirdNumb === 0) {
            return arrOne[firstNumb] + " hundred " + arrThree[secondNumb];
        } else {
            return (
                arrOne[firstNumb] +
                " hundred " +
                arrThree[secondNumb] +
                " " +
                arrOne[thirdNumb]
            );
        }
    }
};
