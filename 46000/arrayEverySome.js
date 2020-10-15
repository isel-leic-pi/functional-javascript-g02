function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(submited => 
            goodUsers.some(goodUsr => 
                goodUsr.id === submited.id
            )
        );
    };
}

module.exports = checkUsersValid