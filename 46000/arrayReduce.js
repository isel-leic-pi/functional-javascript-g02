function countWords(inputWords) {
    return inputWords.reduce((acc, curr) => {
        if(acc[curr] == undefined)
            acc[curr] = 0;
        acc[curr]++;
        return acc;
    },{})
}

module.exports = countWords