const { textFileToStringArray } = require("./fileReader");

const input = textFileToStringArray("example.txt", __filename);

console.log(input);

let reports = input.map((element) => element.split(" ").map(Number));
let safeReports = 0;

console.log(reports);

reports.forEach((report) => {
    let safe = true;
    for (let i = 0; i < report.length - 1; i++) {
        if (
            Math.abs(report[i] - report[i + 1]) > 3 ||
            Math.abs(report[i] - report[i + 1]) < 1
        ) {
            safe = false;
        }
    }
    if (safe) {
        safeReports++;
    }
});
