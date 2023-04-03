// Connect to database
// Error: mysql node module doesn't support new authentication method
// Have to use a more secure version with mysql2 node module
const mysql = require('mysql2');
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database: 'beer'
})

exports.db = db;


