
import "reflect-metadata";
import {createConnection} from "typeorm";

var express = require('express')
var morgan = require('morgan')

var cors = require('cors')


import userRoutes from './routes/userRoute'

import noteRoutes from './routes/noteRoute'

import sharedNoteRoutes from './routes/sharedNoteRoute'

const app = express();
createConnection();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

userRoutes
app.use(userRoutes);

noteRoutes
app.use(noteRoutes)

sharedNoteRoutes
app.use(sharedNoteRoutes)



app.listen(5000);
console.log('Server on port', 5000);
