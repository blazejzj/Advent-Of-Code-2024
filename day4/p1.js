const { textFileToStringArray } = require("./fileReader");

const input = textFileToStringArray("input.txt", __filename);

let newInput = input.map((line) => {
    return line.split("");
});

const directions = [
    { rowStep: 0, colStep: 1 }, // right
    { rowStep: 1, colStep: 0 }, // down
    { rowStep: 0, colStep: -1 }, // left
    { rowStep: -1, colStep: 0 }, // up
    { rowStep: 1, colStep: 1 }, // diagonal down-right
    { rowStep: 1, colStep: -1 }, // diagonal down-left
    { rowStep: -1, colStep: 1 }, // diagonal up-right
    { rowStep: -1, colStep: -1 }, // diagonal up-Left
];

function countXMASOccurrences(grid) {
    const word = "XMAS";
    const numRows = grid.length;
    const numCols = grid[0].length;
    let xmasCounter = 0;

    function isWordAtPosition(startRow, startCol, direction) {
        for (let index = 0; index < word.length; index++) {
            const currentRow = startRow + direction.rowStep * index;
            const currentCol = startCol + direction.colStep * index;

            // check outofbounds
            if (
                currentRow < 0 ||
                currentRow >= numRows ||
                currentCol < 0 ||
                currentCol >= numCols
            ) {
                return false;
            }

            // does current pos match the pos of the character?
            if (grid[currentRow][currentCol] !== word[index]) {
                return false;
            }
        }
        return true;
    }

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (grid[row][col] === word[0]) {
                for (const direction of directions) {
                    if (isWordAtPosition(row, col, direction)) {
                        xmasCounter++;
                    }
                }
            }
        }
    }

    return xmasCounter;
}

console.log(countXMASOccurrences(newInput));
