var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  // 3. Dados dinâmicos (nosso vetor de elementos)
  const meusProdutos = [
    { id: 1, nome: 'maçã', preco: '10' },
    { id: 2, nome: 'pera', preco: '7' },
    { id: 3, nome: 'manga', preco: '80' },
    { id: 4, nome: 'goiaba', preco: '2' },
    { id: 5, nome: 'ameixa', preco: '100' },
    { id: 6, nome: 'carambola', preco: '10000' },
    { id: 7, nome: 'banana', preco: 'gratis' },
    { id: 8, nome: 'larana', preco: '3' }
  ];

  res.render('produtos', {
    titulo: 'meus produtos',
    produtosParaView: meusProdutos // Passando o array para a view
  });
});

module.exports = router;
