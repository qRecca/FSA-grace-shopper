const express = require('express');
const router = express.Router();

// ROUTER: /api/users
const usersRouter = require('./users');
router.use('/users', usersRouter);
