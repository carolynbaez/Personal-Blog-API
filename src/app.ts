import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'

const app = express();

//Settings
app.set('PORT', process.env.PORT || 5000);

//Middlewars
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//Static Files
app.use('/uploads', express.static(path.resolve('/uploads')))

//Routers

export default app;