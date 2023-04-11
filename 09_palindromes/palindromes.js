const palindromes = function (str) {
    let strLower = str.toLowerCase();
    let puntuations = ["!", ",","."," "];

    let strFormatted = strLower.replace(/[,.! ]/g, "");

    let reverseStr = '';
    for(i = strFormatted.length -1; i>=0; i--){
        reverseStr += strFormatted[i];
    }

    if(strFormatted === reverseStr){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
