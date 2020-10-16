function loadUsers(userIds, load, done) {
    let users = []
    let counter = 0

    for (let i = 0; i < userIds.length; i++) {
        load(
            userIds[i],
            user => {
                users[i] = user
                if (count >= userIds.length)
                    done(users)
            }
        )
    }
}

module.exports = loadUsers