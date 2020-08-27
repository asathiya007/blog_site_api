const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express(); 

app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
connectDB();

app.get('/test', (req, res) => {
    res.json("Hello world!");
}); 

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));