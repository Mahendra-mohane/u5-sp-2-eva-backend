function permitted(arr){return(req,res,next)=>{
    if(arr.includes(req.role)){
        next()
    }else{
        res.status(401).send({msg:"You are Not Authorized Person"})
    }
}
}
module.exports=permitted