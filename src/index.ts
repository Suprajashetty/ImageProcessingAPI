import express from 'express';
import resizeImg from './routes/imageresize';
import cacheImg from './routes/cacheCheck';

const app = express();
const port = 3000;

app.use('/resize', cacheImg, resizeImg);

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});

export default app;
