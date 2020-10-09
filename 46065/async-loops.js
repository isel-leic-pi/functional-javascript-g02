function loadUsers(userIds, load, done) {
    var users = []
    let count = 0

    for (var i = 0; i < userIds.length; i++) {
        load(userIds[i], user => {
            users[i] = user
            if (count >= userIds.length)
                done(users)
        })
    }
}

module.exports = loadUsers