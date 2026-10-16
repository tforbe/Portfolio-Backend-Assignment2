import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import qualificationRoutes from './routes/qualificationRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config()

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {

    res.json({ message: "my portfolio"});
});

app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

});