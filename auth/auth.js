require('dotenv').config()
function verifyToken(req,res,next){
    const token = req.headers['authorization'];
    // console.log(token)
    if(token){
        jwt.verify(token,process.env.JWT_KEY,(err,val)=>{

            if(err){
                return res.status(403).send({result:"You are not authorized"})
            }
            else{
                next()
            }
        })
        
    }
    else{
        return res.status(401).send({result:"Pleae send the token"})
    }
  
}

module.exports = verifyToken