var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
  // Dados dinâmicos (nosso vetor de elementos)
  const meusItens = [
    { id: 1, nome: 'Pedro', caracteristicas: 'ser temperamental' },
    { id: 2, nome: 'Tiago', caracteristicas: 'ser um trovão' },
    { id: 3, nome: 'João', caracteristicas: 'ser o discípulo amado' },
    { id: 4, nome: 'Mateus', caracteristicas: 'ser bom com números' }
  ];

  // Renderizar a view 'lista.ejs' passando os dados
  res.render('users', {
    titulo: 'Discípulos de Jesus ;)',
    usersParaView: meusItens
  });
});

module.exports = router;
