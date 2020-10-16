function reduce_aux(arr, idx, fn, curr) {
    if (idx >= arr.length)
        return curr

    curr = fn(curr, arr[idx], idx, arr)
    return reduce_aux(arr, ++idx, fn, curr)
}

function reduce(arr, fn, initial) {
    return reduce_aux(arr, 0, fn, initial)
}

module.exports = reduce