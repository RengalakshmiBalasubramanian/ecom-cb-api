const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/signup.routes')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()


app.use(bodyParser.json())
app.get('/',(req,res) =>{
    res.send('First api')
})

app.use('/signup', router)

//PORT = 8080
//MONGOURI = `mongodb+srv://lakshmi:welcome123@cluster0.uobuuty.mongodb.net/ecommerce?retryWrites=true&w=majority`

mongoose.connect(process.env.MONGOURI)
.then(()=>{
    console.log("Connected to Database")
})
.catch((err)=>{
    console.log(err)
})
app.listen(process.env.PORT || 8080,() => {
    console.log(`Listening on 8080`)
})