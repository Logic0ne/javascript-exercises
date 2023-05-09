const removeFromArray = function() {
    let array = arguments[0];
    for(let i=0; i<(arguments.length-1); i++){
        for(let j=0; j<(arguments[0].length); j++){
            if (arguments[i+1]==arguments[0][j]
                &&typeof(arguments[i+1])==typeof(arguments[0][j])){
                array.splice(j,1);
            }
        }
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
