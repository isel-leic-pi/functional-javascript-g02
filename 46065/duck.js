function duckCount() {
    return [...arguments].filter(obj => Object.prototype.hasOwnProperty.call(obj, "quack")).length
}

module.exports = duckCount