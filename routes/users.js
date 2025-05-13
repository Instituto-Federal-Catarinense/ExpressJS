var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  // 3. Dados dinâmicos (nosso vetor de elementos)
  const meusUsers = [
    { id: 1, nome: 'Arthur', time: 'Inter' },
    { id: 2, nome: 'Léo', time: 'palmeiras' },
    { id: 3, nome: 'Márcio', time: 'Flamengo' },
    { id: 4, nome: 'Paralino', time: 'Gremio' },
    { id: 5, nome: 'Joelson', time: 'Vasco' },
    { id: 6, nome: 'Minerva', time: 'Boca Juniors Tocantins' },
    { id: 7, nome: 'Sarabtana', time: 'Nenhum' },
    { id: 8, nome: 'pindaiba', time: 'Nautico' }
  ];

  res.render('users', {
    titulo: 'meus users',
    usersParaView: meusUsers // Passando o array para a view
  });
});

module.exports = router;
