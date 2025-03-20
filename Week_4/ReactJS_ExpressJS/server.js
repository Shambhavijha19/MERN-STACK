const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Welcome route
app.get('/welcome', (req, res) => {
    res.json({ message: 'Welcome to Express!' });
});

// In-memory user data
const users = [];

// CRUD routes
app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.status(201).json(user);
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index !== -1) {
        users[index] = { ...users[index], ...req.body };
        res.json(users[index]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index !== -1) {
        users.splice(index, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
