import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Connected to Mongodb');
    } catch (error) {
        console.log(error);
    };

};

export default connectMongoDB;
