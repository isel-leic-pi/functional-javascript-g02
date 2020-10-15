var slice = Array.prototype.slice

    function logger(namespace) {
        
        return function() {
            let arr = [];
            arr.push(namespace);
            arr.push.apply(arr, slice.call(arguments));
            console.log.apply(null,arr);

            //return function() {
            //    console.log.apply(console, [namespace].concat(slice.call(arguments)))
        }
    }

module.exports = logger