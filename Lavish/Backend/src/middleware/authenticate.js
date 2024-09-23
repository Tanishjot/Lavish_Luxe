const jwtProvider=require("../config/jwtProvider")
const userService=require("../services/user.service")


const authenticate = async(req,res,next)=>{
    //Bearerkeyword token.....
    try {
        const token=req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(404).send({message:"token not found"})
        }

        const userId=jwtProvider.getUserIdFromToken(token);
        const user=await userService.findUserById(userId);

        req.user=user;
    } catch (error) {
        // console.log(error);
        return res.status(500).send({error:error.message})
    }
    next();
}

module.exports=authenticate;

// const jwtProvider = require("../config/jwtProvider");
// const userService = require("../services/user.service");

// const authenticate = async (req, res, next) => {
//     try {
//         const token = req.headers.authorization?.split(" ")[1];
//         if (!token) {
//             return res.status(404).send({ message: "Token not found" });
//         }

//         const userId = jwtProvider.getUserIdFromToken(token);
//         if (!userId) {
//             return res.status(401).send({ message: "Invalid token" });
//         }

//         const user = await userService.findUserById(userId);
//         if (!user) {
//             return res.status(404).send({ message: "User not found" });
//         }

//         req.user = user;
//         next();
//     } catch (error) {
//         return res.status(500).send({ error: error.message });
//     }
// };

// module.exports = authenticate;
