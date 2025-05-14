const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.get('/joedio', (req, res) => {
  res.send('Olá, Joédio!');
});

module.exports = router;
