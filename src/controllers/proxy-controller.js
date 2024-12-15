const { fetchExternalApiData } = require('../services/external-api-service');

exports.proxyHandler = async (req, res) => {
    try {
        const data = await fetchExternalApiData(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
};
