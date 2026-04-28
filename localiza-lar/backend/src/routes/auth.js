const express = require('express');
const { verifyGoogleToken } = require('../services/googleAuth');

const router = express.Router();



router.post('/google', async (req, res) => {
    try {
        const { credential } = req.body;

        const payload = await verifyGoogleToken(credential);

        const user = {
            googleId: payload.sub,
            email: payload.email,
            name: payload.name,
            picture: payload.picture,
        };

        return res.json(user);

    } catch (err) {
        res.status(401).json({ error: 'Invalid Google token '});
    }
})

module.exports = router;