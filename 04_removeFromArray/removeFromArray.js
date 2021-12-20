const removeFromArray = function(mainList) {
    let args = Array.from(arguments);
    args.shift();

    //Debugging code 1:
    //console.log("Args: " + args);
    //console.log("Main List: " + mainList);

    for (let repeat = 0; repeat < args.length; repeat++)
    {
        for (const item of mainList ) {
            if (args[repeat] === item) 
            {
                //Debugging code 2:
                //console.log(item);
                //console.log("Index of item to be removed: " + mainList.indexOf(item));
                mainList.splice(mainList.indexOf(item), 1);
            }
        }
    }

    console.log("Final Main List: " + mainList);
    return mainList;

};

// Do not edit below this line
module.exports = removeFromArray;
