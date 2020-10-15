function loadUsers(userIds, load, done) {
    //reduce with an empty array garantees the correct order and the expected resulting array
    return done(userIds.reduce( (prev, curr) => {
        load(curr, usr => prev.push(usr))
    }, []));
}

module.exports = loadUsers

//   function loadUsers(userIds, load, done) {
//     var completed = 0
//     var users = []
//     userIds.forEach(function(id, index) {
//       load(id, function(user) {
//         users[index] = user
//         if (++completed === userIds.length) return done(users)
//       })
//     })
//   }

//   module.exports = loadUsers
  