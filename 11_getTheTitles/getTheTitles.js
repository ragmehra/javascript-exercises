const getTheTitles = function(arr) {
    let result =  [];

    for (let obj of arr) {
        result.push(obj.title);
    }

    console.log(result);

    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
