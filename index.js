const express=require("express")
require("dotenv").config()
const connection=require("./connection/db")
const userrouter=require("./routes/user.router")

// const noterouter=require("./routes/note.router")
const cookieParser=require("cookie-parser")
const blogsrouter=require("./routes/blogs.router")
const app=express()
app.use(express.json())
const auth=require("./middleware/auth")
app.use(cookieParser())

app.use("/user",userrouter)

app.use("/blog",blogsrouter)


app.listen(process.env.port,async()=>{
    await connection 
    console.log("Connected")
})