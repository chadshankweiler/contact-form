import mongoose from "mongoose";


const MONGODB_URI = process.env.MONGODB_URI ;

export const connectToMongo = async () => {
    // if(MONGODB_URI){
        try {
            console.log("Debug: About to connect")
            await mongoose.connect("mongodb://localhost:27017/contact_form_test")
            console.log("Debug: Should be Connected")
        } catch (error) {
        console.error("Unable to connect to the db", error) 
        }
    // } else {
    //     console.log("no uri")
    // }
    
}