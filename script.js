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
    const customer = customers.find(c => c.id === parseInt(req.params.id) );
    
    //Invalid ID
    if(!customer) res.status(404).send('<h3 style ="color: blue;">Sorry, Did not find that</h3>');
    res.send(customer);
});

//POST Opearation
app.post('/api/customers', (req, res) => {

    const {error} = validateCustomer(req.body);
    if(error){
        res.status(400).send(error.details[0].message)
        return;
    }
    const customer = {
        id: customers.length + 1,
        title: req.body.title
    };

    customers.push(customer);
    res.send(customer);
});

// PUT Operation


function validateCustomer(customer){
    const schema = {
        title: Joi.string().min(3).required()
    };
    return Joi.validate(customer, schema);
}


// Port
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port} !`));
