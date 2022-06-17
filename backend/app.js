const express = require('express');
const errorMiddleware = require('./middleware/error');
const app = express();

// Routes
const products = require('./Routes/productRoute');
const users = require('./Routes/userRoute');

app.use(express.json());

app.use('/api/v1/product', products);
app.use('/api/v1/user', users);

// Middleware register
app.use(errorMiddleware);
module.exports = app;