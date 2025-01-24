const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRouter = require('./routes/authRouter')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyPharser = require('body-parser')
dotenv.config()
const PORT = process.env.PORT
const DBURL = process.env.MONGO_URL


app.use(express.json())
app.use(cors())
app.use(bodyPharser.json())



mongoose.connect(DBURL)
.then(()=>{
    console.log('Mongoose is connected')
})
.catch((err)=>{
    console.log(`DB Connected error : ${err}`)
})

app.use(authRouter)

app.listen(PORT, ()=>{
    console.log('app is listening on port :', PORT);
})