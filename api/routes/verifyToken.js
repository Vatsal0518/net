const jwt = require("jsonwebtoken");

function verify(req,res,next)
{
    const authHeader = req.headers.token
    if(authHeader)
    {
const token = authHeader.split(" ")[1];
jwt.verify(token,"Vaidu",(err,user)=>{
    if(err)res.status(403).json("tooken is not valid")
    req.User = user;
    next()
})
    }
    else{
        return res.status(401).json("Youare not authentiCATED")
    }
}
module.exports = verify