import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://RizkyFahmi:WAPF0440LA@cluster0.ffkyqu6.mongodb.net/food-del').then(() => console.log("DB Connected"));
}