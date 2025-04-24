import mongoose from "mongoose"

const mongoDBConnect = async ()=> {
    try {
        await mongoose.connect(`${process.env.URL}/compailer`)
        console.log("MongoDB connected")
    } catch (error) {
        console.log("mongodb connection error", error)
        process.exit(1);
    }
}

export default mongoDBConnect