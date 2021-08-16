'use strict';

const express = require('express');
const app = express();
const notFoundHandler=require('./error-handlers/404');
const errorHandler=require('./error-handlers/500');
const logger=require('./middleware/logger');
const validator=require('./middleware/validator');

app.get('/' , (req,res)=>{
 
    res.status(200).send('Hello Mahmoud');
});




app.get('/bad' , (req,res,next)=>{
    next('error from bad end point');
});

app.get('/person', validator,(req,res)=>{
    res.json({
        name:req.name
    })
});

app.use('*',notFoundHandler);
app.use(errorHandler);

function start(port) {
    app.listen(port,()=> console.log(`Server started on port ${port}`))
    
}

module.exports = {
    start,
    app
}

