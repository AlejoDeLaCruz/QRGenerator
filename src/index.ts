import express from 'express';
import routes from './router.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.use('/api', routes)

export default router;