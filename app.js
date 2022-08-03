const api = require("./api");
const express = require('express');

const serve = express();

serve.use(express.json());

serve.listen(3000, () => {
    console.log('Express API is running at port 3000');
})

//Get postcode data
serve.get('/getData/:postcode', async (req, res) => {
    const { postcode } = req.params;
    try {
        const { data } = await api.get(`${postcode}`);
        return res.send(data.result)
    } catch (error) {
        res.send({ error: error.message })
    }
})

//Validate postcode
serve.get('/validateCode/:postcode', async (req, res) => {
    const { postcode } = req.params;
    try {
        const { data } = await api.get(`${postcode}/validate`);
        return res.send(data.result)
    } catch (error) {
        res.send({ error: error.message })
    }
})