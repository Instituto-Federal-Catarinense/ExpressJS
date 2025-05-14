const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Bem-vindo ao sistema' });
});

router.get('/sobre', (req, res) => {
  res.render('sobre', { title: 'Sobre Nós' });
});

router.get('/contato', (req, res) => {
  res.render('contato', { title: 'Contato' });
});

module.exports = router;
