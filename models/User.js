import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

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

    password: {

        type: String,
        Required: true
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

userSchema.pre('save',async function(next) {

    if (!this.isModified('password')) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    
    return await bcrypt.compare(candidatePassword, this.password);
}

const User = mongoose.model("User", userSchema);


export default User;