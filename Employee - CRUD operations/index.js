import express from 'express'
import mongoose from 'mongoose'
import router from "./routes/employee.routes.js"
import dotenv from 'dotenv';
dotenv.config();
const app = express(); //Creates the Express application.
app.use(express.json()); // This is middleware that tells app to automatically parse incoming JSON requests.
// // It means if a client sends a request with a JSON body (like in a POST request), you can access it using req.body.
app.use("/employee",router);// It mounts all routes from the router under the /employee path, so routes like / inside the router become /employee/.
app.listen(3000, () => {
    console.log('Server running');
});
mongoose.connect(process.env.MONGODB_CONNECTION_STRING) //process.env.MONGODB_CONNECTION_STRING retrieves the MongoDB connection string stored in the environment variables, allowing secure database connection configuration.
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
