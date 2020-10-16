function curryN(fn, n) {
    let argCounter = n || fn.length

    return function curried(args, arg) {
        if (args.length + 1 >= argCounter)
            return fn.apply(null, [...args, arg])

        return curried.bind(null, [...args, arg])
    }.bind(null, [])
}

module.exports = curryN