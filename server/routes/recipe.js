const express = require("express");
const router = express.Router();
const constants = require('../helper/utils');

router.get('/:query', async (req, res) => {
    const { params: { query } } = req;
    const isQuery = query && query != '' ? `&query=${query}` : '';
    const apiUrl = `${constants.RECIPE_SEARCH_API}?apiKey=${constants.API_KEY}${isQuery}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data from the API');
        }
        const data = await response.json();
        const recipes = data?.results;
        res.json(recipes);
    } catch (error) {
        console.error('Error fetching data from the API:', error.message);
        res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
});

router.get('/detail/:id', async (req, res) => {
    const { params: { id } } = req;
    const apiUrl = `${constants.RECIPE_DETAIL_API}${id}/information?apiKey=${constants.API_KEY}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data from the API');
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data from the API:', error.message);
        res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
});

router.get('/instructions/:id', async (req, res) => {
    const { params: { id } } = req;
    const apiUrl = `${constants.RECIPE_DETAIL_API}${id}/analyzedInstructions?apiKey=${constants.API_KEY}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data from the API');
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data from the API:', error.message);
        res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
});

module.exports = router;
