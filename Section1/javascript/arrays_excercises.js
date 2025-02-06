const fruits = ['apple', 'orange', 'banana', 'kiwi', 'mango'];

//access 2nd, 3rd, and 4th elements 
console.log(fruits.slice(1, 4));

//add two fruits after apple 

fruits.splice(1, 0, 'cherry', 'lichi');

console.log(fruits);

//remove 2nd Last element

console.log(fruits);

fruits.splice(-2, 1);

console.log(fruits);

//remove Orange, banana and insert pineapple 

fruits.splice(-3, 2, 'Pineapple');

console.log(fruits);


