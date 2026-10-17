import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Retrieves all registered user accounts from the database
export const getUsers = async (req, res) => {

    try {

        const users = await User.find();
        res.status(200).json(users);
    } 
    catch (error) {
    
        res.status(500).json({ message: error.message });
    }
};

// Fetches a single user document matching the provided ID
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

// Registers a new user account and saves it to the database
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

// Finds a specific user by ID and updates their account profile
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

// Removes a single user account matching the specified ID
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

// Permanently deletes every user record from the collection
export const removeAllUsers = async (req, res) => {
    
    try {
        
        await User.deleteMany();
        res.status(200).json({ message: "All users deleted successfully" });
    } 
    catch (error) {
    
        res.status(500).json({ message: error.message });
    }
};

// Authenticates credentials and returns a valid signed JWT access token
export const signin = async (req,res) => {

    const {email, password } = req.body;

    try{
        
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message:"user not found"});

        const isPasswordRight = await user.comparePassword(password);
        if (!isPasswordRight) return res.status(400).json({message:"Invalid credentials"});

        const token = jwt.sign(
            { email: user.email, id: user._id},
            process.env.JWT_SECRET,
            { expiresIn: '1h' });
        
        res.status(200).json({ result: user, token });

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "an issue has occurred"})
    }}; 

// Invalidates the current user session context and returns a signout confirmation
export const signout = async (req, res) => {
    res.status(200).json({ message: "signed out"})}