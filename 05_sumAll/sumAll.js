const sumAll = function(num1, num2) {

    if (typeof num1 === "number" && typeof num2 === "number" && num1 > 0 && num2 > 0) {

        let startingNum, endingNum;
        let sum = 0;

        if (num1 > num2) {
            startingNum = num2;
            endingNum = num1;
        }
        else 
        {
            startingNum = num1;
            endingNum = num2;
        }

        for (;startingNum <= endingNum; startingNum++)
        {
            sum += startingNum;
        }

        console.log(sum);
        return sum;
        
    }

    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
