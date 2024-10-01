const express= require("express"); 
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const morgan = require("morgan")

const EmployeeRoute = require('./routes/employee')

// mongoose.connect('mongodb+srv://davine:cyuzuzo@cluster0.582y51b.mongodb.net/?retryWrites=true&w=majority/patient',{useNewUrlParser: true, useUnifiedTopology: true})
// const db = mongoose.connection
// db.on('error',(err)=>{
//     console.log(err)
// })
// db.once('open', ()=>{
//     console.log("Conncted to database successfully")
// })
mongoose.connect('mongodb+srv://davine:cyuzuzo@cluster0.582y51b.mongodb.net/?retryWrites=true&w=majority/patient', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
    .then(() => console.log('connected to mongodb successfully....'))
    .catch(err => console.log('failed to connect to mongodb', err));


const app= express();
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.listen(5000, ()=>{
    console.log("server is running ...")
});
app.use('/api/employee',EmployeeRoute)




















//app.use("/",require('./routes/employee.js'));