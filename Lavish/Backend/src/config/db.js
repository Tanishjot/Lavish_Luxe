const mongoose = require("mongoose")

const mongodbUrl="mongodb+srv://yogeshKont004:qiHOZLxxSRiOlpyL@cluster0.0t9wp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb=()=>{
    return mongoose.connect(mongodbUrl);
}

module.exports={connectDb}