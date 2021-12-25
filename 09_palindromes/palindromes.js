const palindromes = function (text) {
    text = text.toLowerCase();
    text = text.replace(/\W/g, "");
    console.log(text);

    let testText = '';

    for (let i = text.length - 1; i >= 0; i--) {
        testText += text[i];
    }

    console.log(testText);

    if (testText === text) return true;
    
    return false;

};

// Do not edit below this line
module.exports = palindromes;
