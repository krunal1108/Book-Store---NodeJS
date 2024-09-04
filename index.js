const express = require('express');
const app = express();
const env = require('dotenv');
env.config()

const PORT = process.env.PORT || 3001

const path = require('path')

const myPath = path.join(__dirname , "/views") 
const bodyParser = require('body-parser')
const Router = require('./routes/routes');
const database = require('./config/database')

app.set('view engine','ejs')
app.set('views',myPath)

app.use(express.static(myPath))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/',Router);




app.listen(PORT , (err)=>{
    if(!err){
        console.log(`Server is running on port http://localhost:${PORT}`)
    }
})