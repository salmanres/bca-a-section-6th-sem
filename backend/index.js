const express = require('express');
const app = express();
let port = 3500;
const cors = require('cors');

let mydata = [];

app.use(express.json()); //middleware
app.use(cors());

app.get('/', (req, res)=>{
    res.send('server');
})

app.post('/register', (req, res)=>{
    console.log(req.body);
    mydata.push(req.body);
    console.log('updated data is: ', mydata);
    res.status(250).json({message: 'user registered successfully'});
})


app.listen(port);