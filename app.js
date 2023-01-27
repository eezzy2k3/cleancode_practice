require("dotenv").config()
const express = require("express")
const connectDb = require("./config/config")
const {setup} = require("./awilix")
setup()
const userRoute = require("./routes/user")

const app = express()
app.use(express.json())

app.use("/user",userRoute)

connectDb()

app.listen(4001 ,()=>{
   console.log("app is listening on port 4001") 
})