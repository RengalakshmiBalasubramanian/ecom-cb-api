const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/signup.routes')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.get('/',(req,res) =>{
    res.send('First api')
})

app.use('/signup', router)
app.use('/signin', router)
app.use('/contact', router)

PORT = 3000
MONGOURI = `mongodb+srv://lakshmi:welcome123@cluster0.uobuuty.mongodb.net/ecommerce?retryWrites=true&w=majority`

mongoose.connect(MONGOURI)
.then(()=>{
    console.log("Connected to Database")
})
.catch((err)=>{
    console.log(err)
})
app.listen(PORT,() => {
    console.log(`Listening on ${PORT}`)
})