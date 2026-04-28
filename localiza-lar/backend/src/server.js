require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connect = require('./services/connectionMongo');

const authRoutes = require('./routes/auth');
//const mongoRoutes = require('./')
const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

async function start() {
    try{
        await connect();
        app.listen(3001, () => {
            console.log('Server running on port 3001');
        });
    } catch (err) {
        console.error(err);
        console.log(process.env.MONGODB_USERNAME);
        console.log(process.env.MONGODB_PASSWORD);
    }
}

start();