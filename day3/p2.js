const { textFileToStringArray } = require("./fileReader");

const input = textFileToStringArray("input.txt", __filename);

function multiplyMulArguments(input) {
    const regex = /mul\((\d{1,3}),\s*(\d{1,3})\)|do\(\)|don't\(\)/g;
    let sum = 0;
    let multiply = true;
    let match;

    while ((match = regex.exec(input)) !== null) {
        if (match[0] === "do()") {
            multiply = true;
        } else if (match[0] === "don't()") {
            multiply = false;
        } else if (match[1] && match[2]) {
            if (multiply) {
                sum += parseInt(match[1], 10) * parseInt(match[2], 10);
            }
        }
    }

    return sum;
}

console.log(multiplyMulArguments(input.join("")));
