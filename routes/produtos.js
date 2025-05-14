const express = require('express');
const router = express.Router();

const produtos = [
  { nome: 'Legume', imagem: 'https://cdn-icons-png.flaticon.com/512/2909/2909763.png' },
  { nome: 'Câmera', imagem: 'https://cdn-icons-png.flaticon.com/512/1187/1187530.png' },
  { nome: 'Hambuguer', imagem: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png' },
  { nome: 'Hambuguer', imagem: 'https://cdn-icons-png.flaticon.com/512/1046/1046787.png' },
  { nome: 'Sal', imagem: 'https://cdn-icons-png.flaticon.com/512/1046/1046794.png' },
  { nome: 'Notebook', imagem: 'https://cdn-icons-png.flaticon.com/512/924/924915.png' },
  { nome: 'Refrigerante', imagem: 'https://cdn-icons-png.flaticon.com/512/1046/1046782.png' },
  { nome: 'Coxinha', imagem: 'https://cdn-icons-png.flaticon.com/512/1046/1046778.png' },
  { nome: 'Bolacha', imagem: 'https://cdn-icons-png.flaticon.com/512/1046/1046758.png' },
  { nome: 'Mostarda', imagem: 'https://cdn-icons-png.flaticon.com/512/1046/1046780.png' }
];

router.get('/', (req, res) => {
  res.render('produtos', { produtos });
});

module.exports = router;
