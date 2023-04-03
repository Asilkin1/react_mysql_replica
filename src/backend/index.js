const db = require('./mysql_');
// Create API for MYSQL connection
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Get Beer
app.get('/beers', (req, res) => {
   
    // 1. read from the database
    db.db.query('SELECT * from kindOf', (err, rows, fields) => {
        if (err) throw err
        res.json({rows})
        console.log('Beer available: ', rows)
    })
})

// Post beer
app.post('/beer', (req,res) =>{
    return res.send('Data insert');
})

// Update beer
app.put('/beers/:id', (req,res) =>{
    return res.send(`Data update : ${req.params.id}`);
})

// Delete beer
app.delete('/beers/:id', (req,res) =>{
    return res.send(`Data delete : ${req.params.id}`);
})

// Replica method to see all replicated rows
app.get('/replica', (req,res) => {
    ///
})




app.listen(8000,() => {
    console.log('Server is running');
})