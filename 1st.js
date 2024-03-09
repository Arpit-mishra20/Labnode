const express=require('express')
const path=require('path')
const app=express()
app.use(express.static(path.join(__dirname,"static")))
app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname+"/index.html"))
})

app.get('/clothes/type',(req,res,next)=>{
    res.send(req.query.color)
})
app.listen('6060');