const rateLimit = require('express-rate-limit');

const rateLimitMiddleware = rateLimit({
    windowMs: (process.env.RATE_LIMIT_WINDOW || 1) * 60 * 1000,
    max: process.env.RATE_LIMIT_MAX || 5,
    handler: (req, res) => {
        res.status(429).json({ error: 'Too many requests. Please try again later.' });
    },
});

module.exports = rateLimitMiddleware;
