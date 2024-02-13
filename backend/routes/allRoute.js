const express = require('express');
const router = express.Router();

const authRouter = require("./authRoute");

router.use('/v1/auth', authRouter);

module.exports = router