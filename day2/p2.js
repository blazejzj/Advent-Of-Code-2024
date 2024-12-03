const { textFileToStringArray } = require("./fileReader");

const input = textFileToStringArray("input.txt", __filename);

let reports = input.map((element) => element.split(" ").map(Number));

function isSafe(report) {
    const isAscending = report[0] < report[1];
    for (let i = 0; i < report.length - 1; i++) {
        const diff = Math.abs(report[i] - report[i + 1]);
        if (diff < 1 || diff > 3) return false;
        if (isAscending && report[i] >= report[i + 1]) return false;
        if (!isAscending && report[i] <= report[i + 1]) return false;
    }
    return true;
}

reports = reports.filter((report) => {
    if (isSafe(report)) return true;

    // try removing and see if safe agan
    for (let i = 0; i < report.length; i++) {
        const modifiedReport = [...report.slice(0, i), ...report.slice(i + 1)];
        if (isSafe(modifiedReport)) return true;
    }
});

console.log("Safe reports: ", reports.length);
