'use strict' 

// Write middleware that runs on every route that will run a console.log() 
// containing the method, path, and the new property requestTime from the request

module.exports = function(req, res, next) {
    console.log('method, ', req.method, 'time, ', req.requestTime, 'path ',  req.path);
    next();
}