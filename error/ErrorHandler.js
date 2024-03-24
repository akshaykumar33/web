class ErrorHandler{

    constructor(status,msg){
        this.status=status;
        this.message=msg;
    }
    
    static validationError(message="All fields are requires!"){
        return new ErrorHandler(422,message);
    }

    static notFoundError(message='Not Found!'){
        return new ErrorHandler(404,message);
    }

    static serverError(message='Internal Error'){
        return new ErrorHandler(403,message);
    }

    static forbidden(message='Not allowed!'){
        return new ErrorHandler(403,message);
    }
}

module.exports=ErrorHandler;