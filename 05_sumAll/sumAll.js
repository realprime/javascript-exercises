const sumAll = function(num1,num2) {

    function addall(x,y){
        sum = 0;
        for (let i = x; i <= y; i++){
            sum += i;
        }
        return sum;
    }

    if (num1 < num2 && num1 > 0 && num2>0 && typeof(num1) === "number" && typeof(num2) === "number"){
        x = num1;
        y = num2;
        return addall(x,y);
    }
    else if(num1 > num2 && num1 > 0 && num2>0  && typeof(num1) === "number" && typeof(num2) === "number"){
        x = num2;
        y = num1;
        return addall(x,y);
    }
    else{
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = sumAll;
