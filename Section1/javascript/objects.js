const user = {
    name : 'Ramu',
    email : 'ramu@mail.com',
    password : 'ramu123'
};

console.log( user.name );
console.log(user['email']);

user.address = 'lucknow';
user.password = 'xyz123';

console.log(user);

console.log( Object.keys(user) );
console.log( Object.values(user) );