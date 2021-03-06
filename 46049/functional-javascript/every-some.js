function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
     return submittedUsers
     .every(user => goodUsers.some(other => other.id == user.id)) 
    }
  }

  module.exports = checkUsersValid