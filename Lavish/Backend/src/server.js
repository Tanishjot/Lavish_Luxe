const { connect } = require("mongoose");
const app=require(".");
const { connectDb } = require("./config/db");

const PORT=5454;
// here we connected the server we create wiith express to the Database mongodb through module connectdb in Config
app.listen(PORT,async()=>{
    await connectDb();
    console.log("EcommerceAPI listening on PORT:",PORT);
})