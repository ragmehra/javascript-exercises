const reverseString = function(str) {
    let result = '';
    let backwardsIndex = str.length -1;

    for (let repeats = 0; repeats < str.length; repeats++) 
    {
        result += str[backwardsIndex];
        backwardsIndex -= 1;
    }

    console.log(result);
    return result;
};

// Do not edit below this line
module.exports = reverseString;
