import express from "express";
import bodyParser from "body-parser";
import * as env from 'dotenv';

env.config();

//App Info
const appName = process.env.APP_NAME;
const appPort = parseInt(process.env.APP_PORT);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/ping', (req, res, next) => {
    res.status(200).send({ data: 'Hello World'});
});

app.listen(appPort, () => {
    console.log(`${appName} is running on port ${appPort}`);
});
