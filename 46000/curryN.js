function curryN(fn, n, prevArgs = []) {
    n = n || fn.length;

    if (n == 0) {
        return fn.apply(null, prevArgs);   
    } else {
        return function(arg) {
            return curryN(fn, n-1, prevArgs.concat(arg))
        }
    }
}

module.exports = curryN