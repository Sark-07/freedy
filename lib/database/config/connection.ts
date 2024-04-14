import mongoose, { Mongoose } from "mongoose";

interface MongoDBConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null

}

let cached: MongoDBConnection = (global as any).mongoose

if (!cached) {
    cached = (global as any).mongoose = {
        conn: null, promise: null
    }
}

export const connectDB = async () => {

    if (cached.conn) {
        return cached.conn
    }

    if (!process.env.MONGO_URI) {
        throw new Error('Error in the uri.')
    }

    cached.promise = cached.promise || mongoose.connect(process.env.MONGO_URI, {
        dbName: 'freedy',
        bufferCommands: false
    })

    cached.conn = await cached.promise
    return cached.conn
}