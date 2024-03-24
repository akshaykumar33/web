const ErrorHandler = require("../error/ErrorHandler");

function apiKey(req,res,next){
    const api_key='1234567';
    //const apiKey = req.headers['api_key'];
 
    if(req.query.api_key && (req.query.api_key==api_key))
      next();
    else
    next(ErrorHandler.forbidden('Apikey is Invalid'));
    //  res.json({
    // message:'Not Allowed!!!'
    // });
}

module.exports=apiKey;