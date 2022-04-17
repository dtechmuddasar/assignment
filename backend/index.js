const express=require('express');
let app=express();
const bodyParser = require('body-parser')
const cors = require('cors')
const route=require('./route');
const port=process.env.PORT || 4000

// middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api',route);


//create server
app.listen(port,function(err){
  if(!err){
      console.log('server successfully running in',port);
  }
}) 