const express = require('express')
const mongoose =require('mongoose')
const router=require('./routes/book-route')

const app= express()

//middlewares

app.use('/books', router)
app.use(express.json());


mongoose.connect
("mongodb+srv://jrkusha5:YLsMt4HEZRfALbLn@cluster0.v66xvn6.mongodb.net/?retryWrites=true&w=majority"
).then(()=> console.log("connected to DB"))
.then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err))




//YLsMt4HEZRfALbLn