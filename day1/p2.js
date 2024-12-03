const fs = require("node:fs");

fs.readFile("input.txt", "utf8", (err, dataString) => {
    let similarityScore = 0;
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

    let frequencyMap = new Map();
    right.forEach((num) => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });

    for (let i = 0; i < left.length; i++) {
        const leftNum = left[i];
        const instancesFound = frequencyMap.get(leftNum) || 0;
        similarityScore += leftNum * instancesFound;
    }

    console.log(similarityScore);
});
