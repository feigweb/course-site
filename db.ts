import mongoose from "mongoose";

const Path = 'mongodb://localhost:27017/course-db';

mongoose.connect(Path);
export type User = {
    _id: mongoose.Types.ObjectId;
    name: string;
    phoneNumber: string;
    password: string;
    securityEmail: string;
    birthday: Date;
    profile?: string | null | undefined;
};
export const user = mongoose.model("users", new mongoose.Schema({
    name: {
        type: String,
        default: `新用户`
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    securityEmail: {
        type: String,
        unique: true,
        required: true
    },
    birthday: {

        type: Date,
        default: Date.now
    },
    profile: String
}));
export const courses = mongoose.model("courses", new mongoose.Schema({
    createdUser: {
        type: String,
        required: true
    },
    coverPath: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    contents: {
        type: Array<String>,
        required: true
    },
    //是否收费
    isPaid: {
        type: Boolean,
        default: false,
        required: true
    },
    price: {
        required: false,
        type: Number,
        default: 0
    },
    like: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    }
}));
export const questions = mongoose.model("questions", new mongoose.Schema({
    createdUser: {
        type: String,
        required: true
    },
    content: String,
    answers: {
        type: Array<String>,
        default: []
    },
    likes: {
        type: Number,
        default: 0
    }
}));
