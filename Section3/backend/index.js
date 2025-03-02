const express = require('express');
const UserRouter = require('./routers/userRouter');

const app = express();
const port = 5000;

//middleware
app.use('/user', UserRouter);

// endpoint or route
app.get('/', (req, res) => {
    res.send('response from express')
});

app.get('/add', (req, res) => {
    res.send('response from add')
});

//add
//getall

app.listen(port, () => {
    console.log('server started'); 
});