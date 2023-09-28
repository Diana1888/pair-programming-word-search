const wordSearch = (letters, word) => { 
    
    const horizontalJoin = letters.map(letter => letter.join(''))

    const verticalJoin = letters.map((value, index) => letters.map(row => row[index]).join(''))

    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }

    return false;
}


module.exports = wordSearch;