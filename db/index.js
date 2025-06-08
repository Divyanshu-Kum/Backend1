import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
try{
     await mongoose.connect(`&{process.env.MONGOOSE_URL}/${DB_NAME}`)
     console.log(`\n MongoDB connected !! DB HOST: $
        {connectionInstance.connection.host}`);
     
} catch (error) {
    console.log("MONGOOSE connection FAILED ", error);
    process.exit(1)
    
}default connectDB

}

export 