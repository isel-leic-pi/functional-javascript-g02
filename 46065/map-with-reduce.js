module.exports = function arrayMap(arr, fn) {
    let mapped = []
    for (let index = 0; index < arr.length; index++) {
        mapped[index] = fn(arr[index])
    }
    return mapped
}