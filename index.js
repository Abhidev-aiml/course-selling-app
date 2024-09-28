const express = require('express');
const userRouter = require('./routes/user'); // Import without destructuring
const courseRouter = require('./routes/course'); // Import without destructuring
const adminRouter = require('./routes/admin'); // Import without destructurings 
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Backend Live");
});

// User routes
app.use('/api/v1/user', userRouter);

// Course routes
app.use('/api/v1/course', courseRouter);

// admin routes
app.use('/api/v1/admin', adminRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
