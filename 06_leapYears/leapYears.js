const leapYears = function() {
    year = arguments[0];
    if (year%4==0&&year%100!=0){
        return true;
    }
    if (year%100==0&&year%400==0){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
