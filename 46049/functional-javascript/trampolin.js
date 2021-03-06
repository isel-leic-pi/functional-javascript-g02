function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    operation()
    return operation.bind(operation, --num)
}

function trampoline(fn) {
    // You probably want to implement a trampoline!
    while (fn && fn instanceof Function)
        fn = fn()
}

module.exports = function (operation, num) {
    // You probably want to call your trampoline here!
    trampoline(() => repeat(operation, num))
}