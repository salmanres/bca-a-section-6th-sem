const express = require('express');

const routes = express.Router();

//api endpoint
routes.get('/', (req, res) => {
    res.send('default server response dfjdbjfbdjfbdjbfdj');
})

routes.get('/login', (req, res)=>{
    res.send('this is login endpoint');
});

module.exports = routes;