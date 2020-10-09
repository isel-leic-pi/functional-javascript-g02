function curryN(fn, n) {
    let argCount = n || fn.length

    return function aux(args, arg) {
        if (args.length + 1 >= argCount) return fn.apply(null, [...args, arg])

        return aux.bind(null, [...args, arg])
    }.bind(null, [])
}

module.exports = curryN