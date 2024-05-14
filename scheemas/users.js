import mongoose from 'mongoose';

const UserScheema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        require: false
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    bio: {
        type: String,
        require: false
    },
});

const User = mongoose.models.users ?? mongoose.model('users', UserScheema);
export default User;