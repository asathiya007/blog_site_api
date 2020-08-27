const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const cors = require('cors');

const app = express(); 

app.use(express.json());
app.use(cors());

const MONGO_URI = "mongodb+srv://test:test@hackgteeny2020blogsite.0oosm.mongodb.net/test?retryWrites=true&w=majority"; 
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
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

app.post('/posts', async (req, res) => {
    const payload = req.body; 
    let post = null; 
    if (payload.title && payload.body && payload.password === "hackgteeny") {
        post = new Post({
            title: payload.title,
            body: payload.body
        }); 
        await post.save(); 
    }
    res.json(post);
}); 

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));