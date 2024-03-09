const express=require('express');
const app=express();
const path=require('path');

app.use(express.static(path.join(__dirname,'Login-frontend')));
app.get('/',(req,res)=>{
    res.render('index')
});

app.use(express.urlencoded({extended:true}));
app.post('/submit_data',(req,res)=>{
    console.log(req.body)
    res.send(`username = ${req.body.username} \n password = ${req.body.password} \n email = ${req.body.email}\n Gender= ${req.body.gender}`);
});
app.listen(8080,()=>{
    console.log(`listening to port http://localhost:8080`);
});