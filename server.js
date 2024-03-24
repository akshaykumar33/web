const express=require('express');
const app=express();
const PORT= process.env.PORT || 5001;
const path= require('path');
const mainrouter=require('./router/index');
const productrouter=require('./router/product');
const middlewares=require('./middlewares/apiKey');
const ErrorHandler = require('./error/ErrorHandler');
app.set('view engine','ejs');//setting inform of key and value and ee can get it afterwards as well
console.log(app.get('view engine'),app.get('views'));//normally check inside views but want to change so 
app.set('views',path.resolve(__dirname)+'/templates')//now it will search under template directories for content

app.use(express.static('public'));//this is for static files if this is there then no need of below 2 gets
//this is called middleware
// app.get('/',(req,res)=>{
// res.sendFile(path.resolve(__dirname+'/index.html'));
// })
// app.get('/about',(req,res)=>{
//     res.sendFile(path.resolve(__dirname+'/about.html'))
// })


app.get('/download',(req,res)=>{
    res.download(path.resolve(__dirname)+'/home.html');//for downloading files
})

 //app.use(middlewares);//best to apply on all routes 
app.use(express.json());//bydefault express don't take json given by ajax
//app.use(express.urlencoded({extended:false}));in case u don't have ajax request like thing we do from form actions
//template engines
 //as in above templates are set
 //because it starts looking files inside given directory we can write without extension now
app.use(mainrouter)//adding prefix u want it or  else write directly if u don't want any prefix,u can also write amiddleware in this
app.use("/api",productrouter);
app.use((req,res,next)=>{
    return req.json({message:'page not found!'});
})
app.use((err,req,res,next)=>{
if(err instanceof ErrorHandler){
    res.status(err.status).json({
        error:{
            message:err.message,
           
        }

    })
}
else{
    res.status(500).json({
        error:{
            message:err.message,
            }

    })
}
})//for Error Handler
app.listen(PORT,()=>{
    console.log("listening on:",PORT);
})