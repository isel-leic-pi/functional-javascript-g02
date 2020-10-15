function Spy(target, method) {
    // SOLUTION GOES HERE
    let subject = target[method];
    let spy = {
        count:0
    }
    
    target[method] = function() {
        subject(arguments);
        spy.count++;
    }
    return spy;
}

module.exports = Spy