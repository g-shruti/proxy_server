const express = require('express');
const { proxyHandler } = require('../controllers/proxy-controller');
const rateLimitMiddleware = require('../middlewares/rate-limit');
const cacheMiddleware = require('../middlewares/cache');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.get('/proxy', authMiddleware, rateLimitMiddleware, cacheMiddleware, proxyHandler);

module.exports = router;
