const mongoose=require("mongoose");
const connectDB=async()=>{
    try{
     await mongoose.connect(process.env.MONGO_URI);
     console.log("MongoDB is connected succesfully"); 
   }
   catch(error){
    console.error("MongoDB has not connected succesfully",error);
    process.exit(1);
   }
}
module.exports=connectDB;
