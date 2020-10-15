module.exports = function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    //simple callback with two arguments, the accumulator and the current element, 
    //and a initial value that's an empty array
    return arr.reduce((res, curr) => {
        res.push(fn(curr));
        return res;
    }, []); 
}
