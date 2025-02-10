const nums = [3, 7, 5, 1, 9, 34, 38];

//WAP to print get an array of squares of all numbers //Using Map Fuction
console.log('get an array of square of all numbers using map function');

const sqrNums = nums.map( (n) => {
    return n ** 2;
} ); 

console.log(sqrNums);

//using Map function //convert into integer
console.log('convert String into Integer');

const prices = ['23.432', '245.21', '4565', '999'];
console.log(parseInt ('767868'));
const intprices = prices.map( (n) => {
    return parseInt(n);
});
console.log(prices);
console.log(intprices);

//Using Filter Function //find even numbers
console.log('Find Even Numbers ');

const evenNums = nums.filter( (n) => {
    return n % 2 === 0;
});
console.log(nums)
console.log(evenNums);

//prices between 2000 & 5000
console.log('Filter Prices Between 2000 & 5000');

const prices2 = [12999, 4500, 2000, 9700, 3400, 1500];
const budgetPrices = prices2.filter( (n) => {
    return n>=2000 && n<=5000;
});
console.log(prices2);
console.log(budgetPrices);

//filter String
console.log('filter Strings using filter Fuction');
const brands = ['Samsung', 'Apple', 'Motorola', 'Oppo', 'Nokia', 'Xiaomi'];
const searchBrands = brands.filter( (b) => {
    return b.toLowerCase().includes('pp'); //include fuction //used to compare 
});
console.log(brands);
console.log(searchBrands);

console.log('covert strings into Uppercase Letters');
const upperBrands = brands.map( (b) => {
    return b.toUpperCase();
});
console.log(brands);
console.log(upperBrands);