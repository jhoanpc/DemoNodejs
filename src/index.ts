import express, {Express, Request, Response}  from 'express';
import dotenv  from 'dotenv';


dotenv.config();
const app: Express = express();
const PORT =  process.env.PORT || 8000;


app.get('/', async function (req:Request, res:Response) {
    res.send("Express + TypeScriptServer is running with docker-compose")
});



app.listen(PORT,async function () {
    console.log(`App runnint on ${PORT}`)
});

