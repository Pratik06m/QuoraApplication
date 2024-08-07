const express = require('express')
const cors = require('cors')
const path = require('path') 
const app = express()
const bodyParser = require('body-parser')
const PORT = 80
const db = require('./db/conn.js');

//database connection
try {
    db.connect();
  } catch (error) {
    console.log('Database connection error:', error);
    throw error; // Stop server if database connection fails
  }

//Middle Ware
app.use(bodyParser.json({limit:"50mb"}))
app.use(bodyParser.urlencoded({extended: true, limit:"50mb"}))

//cors
app.use((req,res,next)=>{
    req.headers("Access-Control-Allow-Origin","*")
    req.headers("Access-Control-Allow-Headers","*")
    next();  
})

//routes

app.use('/uploads',express.static(path.join(__dirname,"/../uploads")))
app.use('/uploads',express.static(path.join(__dirname,"/../frontend/build")))

app.get("*",(req,res)=>{
    try{
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))
    }catch(e){
        res.send("Oopss !! Unexpected error")
    }
})

app.use(cors())

//Server Listening
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Listening on port no ${PORT}`)
}) 