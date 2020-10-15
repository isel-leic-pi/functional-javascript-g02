function reduce(arr, fn, initial) {
    if (arr.length == 0)
        return initial;
    
    let head = arr[0];
    let tail = arr.slice(1);
    fn(initial, head, 0, arr)
    return reduce(tail, fn,initial);
}

module.exports = reduce