const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
const categoryRoutes = require('./routes/categories');
const productRoutes = require('./routes/products');

app.use(`/api/category`, categoryRoutes);
app.use(`/api/products`, productRoutes);


// Database Connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');

    // Server
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port http://localhost:${process.env.PORT}`);
    });
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

