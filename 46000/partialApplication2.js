module.exports = function(namespace) {
    // console must be first argument because it is the object to wich the log function is bound to.

    /*
        When a bound function is called, it calls internal method [[Call]] 
        on [[BoundTargetFunction]], with following arguments Call(boundThis, ...args).
        Where boundThis is [[BoundThis]], args is [[BoundArguments]],
        followed by the arguments passed by the function call.
    */
    return console.log.bind(console, namespace);
}

