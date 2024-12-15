const axios = require('axios');

exports.fetchExternalApiData = async (query) => {
    try {
        const response = await axios.get("https://reqres.in/api/users?page=2");
        return response.data;
    } catch (error) {
        throw { status: error.response?.status || 500, message: error.message };
    }
};
