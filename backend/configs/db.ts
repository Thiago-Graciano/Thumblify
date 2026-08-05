import dns from "node:dns";
import mongoose from "mongoose";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => console.log("MongoDB connected"));
        await mongoose.connect(process.env.MONGODB_URI as string)
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default connectDB;