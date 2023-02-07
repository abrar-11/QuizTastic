import { mongoose } from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "please provide unique username"],
        unique: [true, "username already exits"],
    },
    password: {
        type: String,
        required: [true, "please provide password"],
    },
    email: {
        type: String,
        required: [true, "please provide email address"],
        unique: [true, "email already exits"],
    },
    fullName: {
        type: String,
    },
});

export default mongoose.model("User", UserSchema);
