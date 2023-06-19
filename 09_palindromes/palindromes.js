const palindromes = function (str) {
    let strLower = str.toLowerCase();
    let puntuations = ["!", ",","."," "];

    let strFormatted = strLower.replace(/[,.! ]/g, "");

    let reverseStr = strFormatted.split("").reverse().join("");//reverse is an array method

    if(strFormatted === reverseStr){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
