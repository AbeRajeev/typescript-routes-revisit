import express, {Express, Response, Request} from 'express';
const port = 8000;

const app: Express = express();

app.get('/', (req: Request , res: Response) => {
    res.send('Hello World! This app says hello to you! in TypeScript!');
});

app.get('/api', (req: Request , res: Response) => {
    res.send('Test endpoint, with concurently watch-running server!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
