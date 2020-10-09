module.exports = function Spy(target, method) {
    let spy = {count: 0}
    let fn = target[method]

    target[method] = function () {
        spy.count++
        fn.apply(target, arguments)
    }

    return spy
}