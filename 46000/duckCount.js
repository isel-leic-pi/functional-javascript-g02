function duckCount() {
    //since it quacks like an *array* why not pretend it's an array ? e.e 
    // My implementation -> does not meet requirements
    // arguments.foreach = (cb) => {
    //     let idx = 0;
    //     for (; idx < arguments.length; idx++) {
    //         cb(arguments[''+ idx]);
    //     }
    // }
    
    // let count = 0
    // arguments.foreach(elem => {
    //     if (Object.prototype.hasOwnProperty.call(elem, 'quack'))
    //         count++;
    // });
    // return count;
    
    return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length

}

module.exports = duckCount