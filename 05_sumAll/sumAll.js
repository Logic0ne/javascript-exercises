const sumAll = function() {
    let total=0;
    for (let i=0;i<arguments.length;i++){
        if ((typeof(arguments[i])!="number")||(arguments[i]<0)){
            return "ERROR";
        }
    }
    if (arguments[0]<arguments[1]){
        var high = arguments[1];
        var low = arguments[0];
    }
    else if(arguments[1]<arguments[0]){
        var high = arguments[0];
        var low = arguments[1];
    }

    for (let i=0;i<=(high-low);i++){
        total+=low+i;
    }
    return total;
}

// Do not edit below this line
module.exports = sumAll;

