const repeatString = function(repeatedString, numOfRepeats) {
    let result = '';

    if (numOfRepeats < 0) {
        return "ERROR";
    }

    for (let repeats = 0; repeats < numOfRepeats; repeats++) {
        result += repeatedString;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
