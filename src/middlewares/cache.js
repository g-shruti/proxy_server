const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: (process.env.CACHE_TTL || 5) * 60 });

const cacheMiddleware = (req, res, next) => {
    const key = req.originalUrl;
    const cachedResponse = cache.get(key);

    if (cachedResponse) {
        return res.status(200).json(cachedResponse);
    }

    res.sendResponse = res.json;
    res.json = (body) => {
        cache.set(key, body);
        res.sendResponse(body);
    };

    next();
};

module.exports = cacheMiddleware;