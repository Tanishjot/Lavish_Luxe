 const mongoose=require("mongoose");
const User = require("./user.model");
 const AddressSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    streetAddress:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    zipCode:{
        type:Number,
        required:true,
    },
    user:{
        type:mongoose.Schema.ObjectId,
        // foriegn keygive as a ref of "users" table we used in user.model.js at last 
        ref:"users"
    },
    mobile:{
        type:String,
        required:true,
    },
 })
// here we create a table with name adddress that why er given addresses here that we used in User.model.js
 const Address=mongoose.model("addresses",AddressSchema);
 module.exports=Address;