const arr = [34, 'hello', true, null]; //define Array

console.log(arr);
console.log(Array.isArray(arr)); //check Array or Not 

const movies = ['Spiderman', 'Badass Ravi Kumar', 'Baazigar', 'Thor', '1920', 'Kanchana'];

console.log(movies.length ); //also works for Strings

//indexing
console.log(movies [1]); //also works for Strings
console.log( movies.indexOf('Baazigar')); //find Index  Also works for Strings 
// console.log(movies [-2]);
console.log(movies.at(-2)); //Also Works for Strings

movies[1] = 'Interstellar'
console.log(movies);

//Slicing
console.log(movies.slice(2,5));
console.log(movies.slice(2,50));
console.log(movies.slice(2));

//Adding and Removing Elements
movies.push('Ironman');  //Adds new element at the end 
movies.unshift('Dangal');  //Adds new element at the Begining 

console.log(movies);

movies.pop(); //Removes Last Elements
movies.shift(); //Removes First Element

console.log(movies);
// movies.splice(2, 2); //Remove Particular elements
// movies.splice(2, 2, 'Deadpool', 'Superman'); //Adding and Removing Particular elements At any Index Position
movies.splice(2, 0, 'Deadpool', 'Superman'); //Adding Particular elements At any Index Position

console.log(movies);
