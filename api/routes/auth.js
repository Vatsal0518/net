const router = require("express").Router();
const User = require("../modals/Users")
const CryptoJs = require("crypto-js")
const jwt = require("jsonwebtoken");

router.post("/register",async(req,res)=>{
    try{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJs.AES.encrypt(req.body.password,"Vaidu").toString()
    });
    const user  = await newUser.save().then(()=>{console.log("enter done succesfull")}).catch((err)=>{console.log(err)});
    res.status(200).json(user);
    }
    catch(e){
        console.log(e)
    }

})
router.post("/login",async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        !user&&res.status(401).json("wrong email");

        const bytes = CryptoJs.AES.decrypt(user.password,"Vaidu");
        const originalPassword = bytes.toString(CryptoJs.enc.Utf8);

        originalPassword !== req.body.password &&res.status(401).json("wrong password");
        const accessToken = jwt.sign({id:user._id,isAdmin:user.isAdmin},"Vaidu")
const {password,...info} = user._doc;
        res.status(200).json({...info,accessToken});

    }
    catch(e){
res.status(500).json(e);
    }
})


module.exports = router;