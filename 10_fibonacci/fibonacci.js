const fibonacci = function(index) {
    index= Number(index);
    if (index && index > 0) {
        let end = 1; 
        let previous = 1;
        let previousHolder = previous;

        if (index === 2) {
            return end;
        }

        for (let i = 0; i < index - 1; i++)
        {
            previousHolder = end;
            end = end + previous; 
            previous = previousHolder;

            //console.log(previous, end);
        }
        return previous;
    }
    return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
