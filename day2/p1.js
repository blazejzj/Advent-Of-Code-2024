const { textFileToStringArray } = require("./fileReader");

const input = textFileToStringArray("input.txt", __filename);

let reports = input.map((element) => element.split(" ").map(Number));

reports = reports.filter((report) => {
    let safe = true;
    for (let i = 0; i < report.length - 1; i++) {
        const diff = Math.abs(report[i] - report[i + 1]);
        if (diff < 1 || diff > 3) {
            safe = false;
            break;
        }
    }
    return safe;
});

reports = reports.filter((report) => {
    const isAscending = report[0] < report[1];
    for (let i = 0; i < report.length - 1; i++) {
        if (isAscending) {
            if (report[i] >= report[i + 1]) return false;
        } else {
            if (report[i] <= report[i + 1]) return false;
        }
    }
    return true;
});
console.log("Safe reports: ", reports.length);
