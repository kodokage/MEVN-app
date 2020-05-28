/***
 * A test server
 * Testing the get method from the Member.js file
 * containing a hardcoded Json Api
 * 
 */
const express = require('express');
const app = express();
const Members = require('./Members');


app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/', (req, res)=>{
    res.send('Working');
});

app.get('/api/members', (req, res)=>{
    res.json(Members); 
});

app.post('/api/members', (req, res)=>{
    res.send(req.body);;
});

const Port = 5000;
app.listen(Port, ()=>console.log( `Server running on port ${Port}`)
)