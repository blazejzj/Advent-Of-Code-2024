const { textFileToStringArray } = require("./fileReader");

const input = textFileToStringArray("input.txt", __filename);

function multiplyMulArguments(input) {
    const regex = /mul\((\d{1,3}),\s*(\d{1,3})\)/g;
    let sum = 0;
    const matches = input.matchAll(regex);

    for (const match of matches) {
        sum += parseInt(match[1], 10) * parseInt(match[2], 10);
    }

    return sum;
}

console.log(multiplyMulArguments(input.join("")));
