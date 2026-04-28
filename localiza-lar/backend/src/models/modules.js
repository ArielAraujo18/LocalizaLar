const express = require('express');
const User = require('../models/User');

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
    try{
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/users", async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

app.patch("/users/:id", async (req, res) => {
    const id = req.params.id;
})