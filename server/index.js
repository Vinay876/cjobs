import express, { application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import Connection from './connection/connection.js'
import router from './routes/router.js';


dotenv.config({path:'./data.env'})

const app = express()
const PORT = process.env.PORT || 8000


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', router);


Connection(process.env.DB_URL)
app.listen(PORT,()=>console.log('Server is running at '+PORT))