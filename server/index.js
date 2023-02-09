import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// check if express is working
app.get('/', (req, res) => {
    res.send('Welcome to Netflix Clone Backend!');
});

// CONNECT TO MONGODB
mongoose.set('strictQuery', true);
const connect = () => {
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        throw err;
    })
}

app.listen(5001, () => {
    console.log('Listening on 5001');
    connect();
})
