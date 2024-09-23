const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const jwtProvider=require("../config/jwtProvider.js")

// userData is basically an object which we wil pass through the frontend and we will get these information like firstName EventCounts. from this object
// method or function to crate a user
const createUser=async(userData)=>{
    try{
        let{firstName,lastName,email,password}=userData;
        // now we will check that if the email provided by the user is already exist or Notification,as only one user can be formed through one email
        const isUserExist=await User.findOne({email});
        if(isUserExist){
            throw new Error("user already exist with email :",email)
        }
        password=await bcrypt.hash(password,8);
        const user=await User.create({firstName,lastName,email,password});
        
        console.log("created user",user)

        return user;
    }catch(error){
        throw new Error(error.message)
    }
};



// Method or Function to Find USER by ID
 const findUserById=async(userId)=>{
    try{
        // we populated address from user.model.js where address is a schema hava a ref addresses
        const user=await User.findById(userId)
        // .populate("address");
        if(!user){
            throw new Error("user not found with id :",userId)
        }
        return user;
    }catch(error){
        throw new Error(error.message)
    }
 }; 

//  Find USER by email
const getUserByEmail=async(email)=>{
    try{
        const user=await User.findOne({email});
        if(!user){
            throw new Error("user not found with email :",email)
        }
        return user;
    }catch(error){
        throw new Error(error.message)
    }
 };


//  Get USER Profile BY Token
const getUserProfileByToken=async(token)=>{
    try {
        const userId=jwtProvider.getUserIdFromToken(token);

        const user=await findUserById(userId)
        if(!user){
            throw new Error("user not found with id :",userId)
        }
        return user;
    } catch (error) {
        throw new Error(error.message)
    }
};
const getAllUsers=async()=>{
    try {
        const users=await User.find();
        return  users;
    } catch (error) {
        throw new Error(error.message)
    }
};

 module.exports={createUser,
                findUserById,
                getUserByEmail,
            getUserProfileByToken,
        getAllUsers,}



