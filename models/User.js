import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

// Defines the authentication schema for registered users
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

// Pre-save middleware hook that automatically hashes the password before storing it
userSchema.pre('save',async function(next) {

    if (!this.isModified('password')) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
});

// helper method to safely check login passwords against the hashed string
userSchema.methods.comparePassword = async function(candidatePassword) {
    
    return await bcrypt.compare(candidatePassword, this.password);
}

// Registers and compiles the User authentication schema configuration into a model
const User = mongoose.model("User", userSchema);


export default User;