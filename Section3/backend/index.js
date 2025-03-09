const express = require('express');
const UserRouter = require('./routers/userRouter');

const app = express();
const port = 5000;

//middleware
app.use('/user', UserRouter);
app.use('/product', UserRouter);

// endpoint or route
app.get('/', (req, res) => {
    res.send('response from express')
});

//add
app.get('/add', (req, res) => {
    res.send('response from add')
});

//getall

app.listen(port, () => {
    console.log('server started'); 
});