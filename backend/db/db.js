const mongoose= require('mongoose')

const connectDb =async()=>
{
    try{
        const connectDB= await mongoose.connect(process.env.MONGO_URI)
        console.log("Database is connected");
        
    }
    catch(error)
    {
        console.error({message : error.message})
    }
}

module.exports = connectDb