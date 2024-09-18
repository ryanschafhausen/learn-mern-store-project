import mongoose from 'mongoose';

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, clientOptions);
        await mongoose.connection.db.admin().command({ping: 1});
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error.message);
        await mongoose.disconnect();
    }
}