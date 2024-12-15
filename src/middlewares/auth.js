module.exports = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    console.log(apiKey);
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};