exports.error404 = function(req, res, next){
    next({message: 'Not Found', status: 404});
};
exports.error500 = function(error, req, res, next){
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
};
exports.logger = function(port){
    return function(){
        console.log(`Running on port: ${port}...`);
    }
}