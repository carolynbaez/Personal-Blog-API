import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import config from './config/env.config';
import TestRouter from './routes/test.router';

const app = express();

//Settings
app.set('PORT', config.PORT);

//Middlewars
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//Static Files
app.use('/uploads', express.static(path.resolve('/uploads')))

//Routers
app.use('/api/test', TestRouter);
export default app;