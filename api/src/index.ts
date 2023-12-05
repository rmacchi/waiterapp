import { MongoClient, ServerApiVersion } from 'mongodb';
import path from 'node:path';
import http from 'node:http';
import express from 'express';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

import { router } from './router';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);
dotenv.config();

const port = 3001;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();
});
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(express.json());
app.use(router);

server.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});


const uri = `${process.env.MONGODB_URL}`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        await client.db('admin').command({ ping: 1 });
        console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } finally {
        await client.close();
    }
}
run().catch(console.dir);

