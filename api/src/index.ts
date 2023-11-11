import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        const app = express();
        const port = 3001;

        app.listen(port, () => {
            console.log(`Server is running on https://localhost:${port}`);
        });
    })
    .catch(() => console.log('Erro ao conectar ao mongo'));
