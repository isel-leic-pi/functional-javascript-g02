
const a = 1; const b = 2; const c = 3;

(function firstFunction () {
    const b = 5; const c = 6;

    (function secondFunction () {
        const b = 8;

        (function thirdFunction () {
            const a = 7; const c = 9;
            
            (function fourthFunction () {
                const a = 1; const c = 8
            })()
        })(        
            // here right spot for a=1, b=8 and c=6
            console.log(`a: ${a}, b: ${b}, c: ${c}`))
    })()
})()