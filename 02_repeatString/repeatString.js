const repeatString = function(word,num) {
    if (isNaN(num)||num<0){
        return "ERROR";
    }
    returnString = "";
    count = 0;
    while (count<num){
        returnString = returnString + word;
        count++;
    }
    return returnString;
};



// Do not edit below this line
module.exports = repeatString;
