const getTheTitles = function(books) {
    a=[];
    for (key in books){
        a.push((books[key].title))
    }
    return a;
};
// Do not edit below this line
module.exports = getTheTitles;
