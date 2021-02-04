const errorResult: any = {
    error: true,
    message: 'Something bad happend',
  };
  
  const successResult: any = {};
  
  export default {
    error: (message, res, status = 400, error = null) => {
        errorResult.error = true;
        errorResult.message = message;
        errorResult.data = null;
        if( error != null) {
            errorResult.errorDetails = error;
        }
      res.status(status).json(errorResult);
    },
  
    success: (message, response, res, status = 201, token = null) => {
        successResult.error = false;
        successResult.message = message;
        successResult.data = response;
        if(token != null) {
          successResult.token = token;
        }
        res.status(status).json(successResult);
    },
  };
