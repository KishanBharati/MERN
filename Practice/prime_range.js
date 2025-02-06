/*for (let i = 40; i <= 130; i++) {
    let f = 0;
    for (let j = 2; j <= i; j++) {
        if (i % j === 0) {
            f += 1;
        } 
        
    }
    if (f === 1){
        console.log(i);            
    }
}*/

const prime = (a, b) => {
    for (let i = a; i <= b; i++) {
        let f = 0;
        for (let j = 2; j <= i; j++) {
            if (i % j === 0) {
                f += 1;
            } 
            
        }
        if (f === 1){
            console.log(i);            
        }
    }
    return prime
}

prime (40, 130)