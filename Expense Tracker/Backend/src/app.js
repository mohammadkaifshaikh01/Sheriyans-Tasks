const express = require('express')
const connectDB = require('./config/db')

const app = express()

app.use(express.json())

connectDB()


app.get('/' ,(req,res) => {
   res.send("You Are In Page")
})

module.exports = app