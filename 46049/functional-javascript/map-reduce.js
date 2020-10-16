module.exports = function arrayMap(arr, fn) {
    let toReturn = []
    for (let i = 0; i < arr.length; i++) {
        toReturn[i] = fn(arr[i])
    }
    return toReturn
  }