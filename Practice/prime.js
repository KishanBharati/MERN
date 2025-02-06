//Prime Number 

// let n = 17;
// let f = 0;
// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         f += 1;
//     }
// }
// if (f === 2) {
//     console.log(" Given number is prime");
// } else {
//     console.log(" Given number is not prime");
// }

// function prime(a){
//     let f =0 
//     for(let i = 2; i<= a; i++){
//         if(a % i === 0){
//             f += 1;
//         }
//     }
//     if( f === 1) {
//         console.log('Given Number is Prime');       
//     } else {
//         console.log(' Given Number is not Prime');
//     }
// }
//  prime(17);


//  const prime = function (a){
//     let f =0 
//     for(let i = 2; i<= a; i++){
//         if(a % i === 0){
//             f += 1;
//         }
//     }
//     if( f === 1) {
//         console.log('Given Number is Prime');       
//     } else {
//         console.log(' Given Number is not Prime');
//     }
//     return prime;
//  }

//  prime (17)

const prime = (a) => {
    let f =0 
    for(let i = 2; i<= a; i++){
        if(a % i === 0){
            f += 1;
        }
    }
    if( f === 1) {
        console.log('Given Number is Prime');       
    } else {
        console.log(' Given Number is not Prime');
    }
    return prime;
 }

 prime (47)



