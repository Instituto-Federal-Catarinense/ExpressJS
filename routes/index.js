const express = require('express');
const path = require('path');
const router = express.Router();

// Rota para Home
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
});

module.exports = router;
