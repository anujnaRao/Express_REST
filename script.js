const express = require('express');
const Joi = require('joi'); 
const app = express(); // Express App is created on app
app.use(express.json()); // For using JSON file

// To give data to the server
const customers =[
    {title: 'Annie', id: 1},
    {title: 'Brad', id: 2},
    {title: 'Fred', id: 3},
    {title: 'Manny', id: 4},
    {title: 'Frank', id: 5},
];


// GET Operation

app.get('/', (req, res) => {
    res.send('Welcome to the Page');
});

app.get('/api/customers', (req, res) => {
    res.send(customers);
});

// Info of a particular customer
app.get('/api/customers/:id', (req, res) => {
    
});


// Port
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port} !`));
