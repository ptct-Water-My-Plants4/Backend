const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router');
const userRouter = require('./users/users-router');
const plantsRouter = require('./plants/plants-router');
const restricted = require('./restricted');

const server =  express();

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/users',restricted, userRouter)
server.use('/api/plants', restricted, plantsRouter)
module.exports = server