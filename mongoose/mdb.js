const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGODB_CONNECT_URL;
const tempConnection = {};

export default async function DbConnect(){
    if (!MONGO_URI) {
        throw new Error(
            'Please define the MONGO_URI environment variable inside .env.local'
        );
    }
    
    if(!tempConnection.connection){
        tempConnection.connection = await mongoose.connect(MONGO_URI);
    }

    return tempConnection.connection;
}