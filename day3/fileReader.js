const { readFileSync } = require("fs");
const path = require("path");

exports.textFileToStringArray = (fileName, metaURL, delimiter = "\n") => {
    const __dirname = path.dirname(metaURL);
    const dataString = readFileSync(path.join(__dirname, fileName), {
        encoding: "utf8",
    });

    return dataString.split(delimiter);
};
