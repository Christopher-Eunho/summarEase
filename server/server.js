import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from "morgan"; // logging middleware

import summaryRouter from './routes/summaryRouter.js';
import extensionRouter from './routes/extensionRouter.js';
const app = express();
const logger = morgan("dev"); 

app.use(cors());
app.use(logger); 
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/summaries', summaryRouter);
app.use('/extension', extensionRouter);

export default app