import express from 'express';

import v1Routes from './v1/index.js';

const router = express.Router();

router.use('/v1', (req, res, next) => {
    console.log(`Request received at ${req.originalUrl} with method ${req.method}`);
    next();
}, v1Routes);

export default router;


