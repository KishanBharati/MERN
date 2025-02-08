const nums = [324, 28, 1, 82, 47, 9, 74]

// for array travarsing 
for( let i=0; i<nums.length; i++ ){
    console.log( nums[i] );    
}

// array traversing using for of loop
console.log('for of loop');
for( let n of nums ){
    console.log(n);    
}

//array traversing using forEach Function
console.log('for each function ');

nums.forEach( (n, a, b) => { console.log(n, a, b); } ); //first call for elements second call for index third call for print array

// WAP to print only even values 
nums.forEach( (n) => { 
    if(n%2 === 0){console.log(n);} 
} );

//WAP to multiply each element by 2
nums.forEach( (n) => { 
    console.log(n * 2); 
} );

// multiply and store in new array 

const nums2 = [];

nums.forEach( (n) => { 
    // console.log(n * 2); 
    nums2.push (n * 2);
} );

console.log(nums2);

//store all odd numbers in new array 

const odd = [];

nums.forEach( (n) => {
    if(n%2 !== 0){
        odd.push(n);
    }
});

console.log(odd);