const repeatString = function(str, num) {
    i = 0;
    output = '';
    if(num > 0){
        while(i < num){
            output += str;
            i++;
        }
    } else if(num < 0) {
        output = 'ERROR';
    } else {
        output = '';
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;