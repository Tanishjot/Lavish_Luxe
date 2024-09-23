const jwt=require("jsonwebtoken")

// just give random keys in it
const SECRET_KEY="sdtyjghbvbnuelccvbnmlkjhgfdsa4rdxh7843iwjxnvgthjnietgcxoumyrxoeicmutiuriu"

const generateToken=(userId)=>{
    const token=jwt.sign({userId},SECRET_KEY,{expiresIn:"48h"})
    return token;
}

const getUserIdFromToken=(token)=>{
    const decodedToken=jwt.verify(token,SECRET_KEY)
    return decodedToken.userId;
}

module.exports={generateToken,getUserIdFromToken}