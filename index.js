const express = require('express');

const app = express(); 

app.use(express.json());

app.get('/test', (req, res) => {
    res.json("Hello world!");
}); 

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));