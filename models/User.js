import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {

        type: String,
        required: true,
    },

    email: {

        type: String,
        Required: true,
        unique: true,
        trim: true
    },

    created: {

        type: Date,
        default: Date.now
    },

    updated: {

        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("User", userSchema);

export default User;