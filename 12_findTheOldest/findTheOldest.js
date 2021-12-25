const findTheOldest = function(arr) {

    let result = arr.sort((obj1, obj2) => {
        let d = new Date;
        if (!obj1.yearOfDeath) obj1.yearOfDeath = d.getFullYear();
        if (!obj2.yearOfDeath) obj2.yearOfDeath = d.getFullYear();

        let age1 = obj1.yearOfDeath - obj1.yearOfBirth;
        let age2 = obj2.yearOfDeath - obj2.yearOfBirth;

        return age1 > age2 ? -1 : 1;
    
    });

    return result[0];

};

// Do not edit below this line
module.exports = findTheOldest;
