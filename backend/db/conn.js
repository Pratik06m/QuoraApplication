const mongoose = require('mongoose')

const url ="mongodb+srv://pratikpatil2872:<Pratik@2002>@cluster0.98drfq3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

module.exports.connect = ()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('MongoDB Connected Successfully')
    }).catch((error)=> console.log("Error:",error))
}