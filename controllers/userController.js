import User from '../models/User.js';

export const getUsers = async (req, res) => {

    try {

        const users = await User.find();
        res.status(200).json(users);
    } 
    catch (error) {
    
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req, res) => {
    
    try {
    
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } 
    catch (error) {
    
        res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    
    const { name, email, password } = req.body;
    
    try {
    
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } 
    catch (error) {
    
        res.status(400).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
    
    try {
    
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            { ...req.body, updated: Date.now() }, 
            { new: true, runValidators: true } );

        if (!updatedUser) return res.status(404).json({ message: "User not found" });
        
        res.status(200).json(updatedUser);
    } 
    catch (error) {
    
        res.status(400).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    
    try {
    
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User deleted successfully" });
    } 
    catch (error) {
    
        res.status(500).json({ message: error.message });
    }
};

export const removeAllUsers = async (req, res) => {
    
    try {
        
        await User.deleteMany();
        res.status(200).json({ message: "All users deleted successfully" });
    } 
    catch (error) {
    
        res.status(500).json({ message: error.message });
    }
};
