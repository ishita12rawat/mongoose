const logger=(req,res,next)=>{
//todoos:
//lod timestamp
//log req.url
//log req.body
console.log({timestamp: new Date().toTimeString(),
    url: req.url,
    method: req.method,
    body:req.body,
})
next();
}
module.exports={logger}