function doubleAll(numbers) {
    // numbers.constructor.prototype => ir buscar via reflexão o metodo map de Array?
    return numbers
        .map(x => x * 2)
}

module.exports = doubleAll