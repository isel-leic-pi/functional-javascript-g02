function Spy(target, method) {
    let toReturn = { count: 0 }
    let baseFunction = target[method]

    target[method] = () => {
        toReturn.count++
        baseFunction.apply(target, arguments)
    }
    return toReturn
}

module.exports = Spy