const headers = require('../Config/headers')
module.exports={
   headers(_, res, next){
    res.header(headers.headers.AccesControllAllowOrigin, headers.headers.all);
    res.header(headers.headers.AccesControllAllowHeaders, headers.headers.various);
    next();
  }
}