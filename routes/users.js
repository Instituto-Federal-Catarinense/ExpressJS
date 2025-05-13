var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  // 3. Dados dinâmicos (nosso vetor de elementos)
  const meusItens = [
    { id: 1, nome: 'Item Arthur', time: 'Inter' },
    { id: 2, nome: 'Item Léo', time: 'palmeiras' },
    { id: 3, nome: 'Item Márcio', time: 'Flamengo' },
    { id: 4, nome: 'Item Paralino', time: 'Gremio' },
    { id: 5, nome: 'Item Joelson', time: 'Vasco' },
    { id: 6, nome: 'Item Minerva', time: 'Boca Juniors Tocantins' },
    { id: 7, nome: 'Item Sarabtana', time: 'Nenhum' },
    { id: 8, nome: 'Item pindaiba', time: 'Nautico' }
  ];

  res.render('users', {
    titulo: 'meus users',
    usersParaView: meusUsers // Passando o array para a view
  });
});

module.exports = router;
