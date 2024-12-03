const fs = require("node:fs");

fs.readFile("input.txt", "utf8", (err, dataString) => {
    let totalDistance = 0;
    let left = [];
    let right = [];
    let dataArray = [];

    dataArray = dataString.split("\n");
    dataArray.forEach((element) => {
        let pair = element
            .split(" ")
            .filter(Number)
            .map((element) => Number(element));

        left.push(pair[0]);
        right.push(pair[1]);
    });

    left.sort();
    right.sort();

    for (let i = 0; i < left.length; i++) {
        const rightNum = right[i];
        const leftNum = left[i];

        totalDistance += Math.abs(rightNum - leftNum);
    }
    console.log(totalDistance);
});
