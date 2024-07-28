const router = require("express").Router();
const verify = require("./verifyToken")
const User = require("../modals/Users");
const CryptoJs = require("crypto-js");
const Users = require("../modals/Users");
//update

router.put("/:id",verify, async(req,res)=>{
    if(req.User.id ===req.params.id||req.User.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJs.AES.encrypt(req.body.password,"Vaidu").toString()
        }
    }
    try{
       const updaeUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
       res.status(200).json(updaeUser)

    }
    catch(e)
    {
        res.status(500).json(err)
    }
})
// deleter

router.delete("/:id",verify, async(req,res)=>{
    if(req.User.id ===req.params.id||req.User.isAdmin){
      
    }
    try{
       const updaeUser = await User.findByIdAndDelete(req.params.id)
       res.status(200).json("user is deleted")

    }
    catch(e)
    {
        res.status(500).json(err)
    }
})

router.get("/find/:id",verify, async(req,res)=>{

    
    try{
       const user = await User.findById(req.params.id)
       const [password,...info] = user._doc;
       res.status(200).json(info)

    }
    catch(e)
    {
        res.status(500).json(e)
    }
})

router.get("/",verify, async(req,res)=>{
    const query = req.query.new;

    if(req.User.isAdmin){
       
    
    try{
        const users = query ? await User.find().sort({_id:-1}).limit(5):await User.find();
       res.status(200).json(users)

    }
    catch(e)
    {
        res.status(500).json(e)
    }
}
else{
    res.status(403).json("not proper");
}
})

router.get("/stats",async(req,res)=>{
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear()-1);
    const monthsArray =[
        "january",
        "february",
        "March",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december"
    ]

    try{
        const data = await User.aggregate([
            {
                $project:{
                    month:{$month:"$createdAt"}
                }
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:1}
                }
            }
        ])
        res.status(200).json(data);

    }
    catch(e)
    {console.log(e)}
})


module.exports = router