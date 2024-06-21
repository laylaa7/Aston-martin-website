const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 8080;
const OPENAI_API_KEY = 'sk-proj-IuGp4VbMhIUIrN4y14mFT3BlbkFJgn2cQ1Ytz1I2mbXicKRI';

app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: userMessage,
            max_tokens: 150,
            n: 1,
            stop: null,
            temperature: 0.9,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            }
        });

        const botReply = response.data.choices[0].text.trim();
        res.json({ reply: botReply });
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong!');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
