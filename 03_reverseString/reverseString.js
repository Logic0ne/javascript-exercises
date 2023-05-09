const reverseString = function(word) {
    const returnString = "";
    const wordArray = [];
    let index=0;
    while (word.length>index){
        wordArray.push(word[index]);
        index++;
    }
    return wordArray.reverse().join("");

};

// Do not edit below this line
module.exports = reverseString;


