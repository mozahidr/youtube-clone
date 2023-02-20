import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './routes/auth.js';
import userRouts from './routes/users.js';
import moviesRoutes from './routes/movies.js';
import listsRoutes from './routes/lists.js';

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
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        throw err;
    })
}

app.use("/api/auth", authRoute);
app.use("/api/users", userRouts);
app.use("/api/movies", moviesRoutes);
app.use("/api/lists", listsRoutes);

app.listen(5001, () => {
    console.log('Listening on 5001');
    connect();
})
