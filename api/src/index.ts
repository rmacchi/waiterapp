import express from 'express';

const app = express();

app.listen(3001, () => {
    console.log('Server is running on https://localhost:3001');
});
