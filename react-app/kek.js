function findLUSlength(a, b) {
    let first = Array.from(a) 
    let second = Array.from(b)
    let n= 0;
    let k = 0;
    for (let i = 0; i < first.length; ++ i) {
        if (JSON.stringify(first[i]) != JSON.stringify(second[i]) ) {
            n = n + 1
            if (n > k) {
                k = n
            }
        } else {
            n = 0
        }

    };
    console.log(k)
    return k 
};


findLUSlength('cdc','faf');
findLUSlength('cdc','faf');