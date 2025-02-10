const smartphone = {
    brand : 'Samsung',
    model : 'Galaxy M31',
    price : 14999, 
    colors : ['blue', 'White', 'black']
};

console.log(smartphone.brand);
console.log(smartphone);

//access price of the phone
console.log('price of the phone = '+ smartphone.price);

//change model of the phone to 'Galaxy M32'
smartphone.model= 'Galaxy M32'
console.log(smartphone.model);

//add new key ram and assign 6GB value
smartphone.ram = '6GB'
console.log(smartphone);