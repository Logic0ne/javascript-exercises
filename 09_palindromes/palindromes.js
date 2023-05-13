const palindromes = function (pal) {
    palindrome = [];
    for (let x in pal){
        let lower = pal[x].toLowerCase();

        if ((lower.length === 1) && (lower.match(/[a-z]/i))){
            palindrome.push(lower);
        }
    }
    let emordnilap = palindrome.slice().reverse();
    
    for (let i in palindrome){
        if (palindrome[i]!=emordnilap[i]){
            return false;
        }
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
