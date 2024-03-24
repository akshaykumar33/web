const router=require('express').Router();

router.get('/',(req,res)=>{
    res.render('index',{title:"Index page"});
    })
    
router.get('/about',(req,res)=>{
        res.render('about',{title:"About page"});
    })

    router.get('/product',(req,res)=>{
        res.render('product',{title:"Product page"});
    })

module.exports=router;