const findTheOldest = function(people) {
    const date =  new Date();
    let year = date.getFullYear();
    let biggestDifference = 0;
    let runningDifference = 0;
    let keystore = 0;

    for (let key in people){

        if ("yearOfDeath" in people[key]){
            runningDifference = people[key].yearOfDeath-people[key].yearOfBirth;
        }
        else{
            runningDifference = year-people[key].yearOfBirth;
        }
        
        if (runningDifference>biggestDifference){
            keystore = key;
            biggestDifference=runningDifference;
        }
    } 
    return (people[keystore]);
} 


// Do not edit below this line
module.exports = findTheOldest;
