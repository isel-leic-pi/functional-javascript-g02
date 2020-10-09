function getDependencies(tree) {
    let arr = [];

    (function aux(root) {
        if (!root || !Object.prototype.hasOwnProperty.call(root, "dependencies")) {
            return
        }

        Object.keys(root.dependencies).forEach(dep => {
            let serialized = dep + '@' + root.dependencies[dep].version

            if (!arr.some(other => other === serialized)) {
                arr.push(serialized)
            }

            aux(root.dependencies[dep])
        })
    })(tree)

    return arr.sort()
}

module.exports = getDependencies