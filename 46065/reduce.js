module.exports = function countWords(inputWords) {
    return inputWords.reduce((prev, curr) => {
        if(Object.keys(prev).includes(curr)) {
            prev[curr]++
        } else {
            prev[curr] = 1
        }

        return prev;
    }, {})
}