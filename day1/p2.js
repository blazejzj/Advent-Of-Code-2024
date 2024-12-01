const fs = require("node:fs");

fs.readFile("input.txt", "utf8", (err, dataString) => {
    let similarityScore = 0;
    let left = [];
    let right = [];
    let dataArray = [];

    if (err) {
        console.error(err);
        return;
    }

    dataArray = dataString.split("\n");
    dataArray.forEach((element) => {
        let pair = element
            .split(" ")
            .filter(Number)
            .map((element) => Number(element));

        left.push(pair[0]);
        right.push(pair[1]);
    });

    for (let i = 0; i < left.length; i++) {
        let instancesFound = 0;
        const leftNum = left[i];

        for (let j = 0; j < right.length; j++) {
            const rightNum = right[j];
            if (rightNum == leftNum) {
                instancesFound++;
            }
        }
        similarityScore += leftNum * instancesFound;
    }
    console.log(similarityScore);
});
