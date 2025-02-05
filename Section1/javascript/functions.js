function addNums(a, b) {
    console.log(b);
    var c = a+b;
    console.log(c);  
}

addNums(2, 3);
addNums(2);
// addNums(20, 433);
// addNums(25, 3585);
// addNums(236, 743);

// console.log(c);

const getavg = function (a, b, c) {
    const avg  = (a + b + c) / 3;
    // console.log(avg);
    return avg;
    console.log('after result');
        
}

const result = getavg(21, 38, 43);

console.log(result);


//ES6 arrow fuction
const factorial = ( n ) => {
    let f = 1;
    for(let i=1; i<=n; i++){
        f = f * i;
    }
    return f;
}

const fact = factorial(5);
console.log(fact);