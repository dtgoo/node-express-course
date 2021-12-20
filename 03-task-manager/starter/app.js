const express = require('express');
const app = express();



//routes

app.get('/', (req,res) => {
    res.send("Welcome!")
});


app.get('/hello', (req, res) => {
    res.send("Task Manager says hello!");
});



const port = 3000; 

app.listen(port, console.log(`SERVER IS LISTENING ON ${port}...`));

