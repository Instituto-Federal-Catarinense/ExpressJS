var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/joedio', function(req, res, next) {
  res.send('Olá, Joédio!');
});

module.exports = router;
var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const produtos = [
      { id: 1, nome: 'Armário', código: '21754510' },
      { id: 2, nome: 'Bancada', código: '35548188' },
      { id: 3, nome: 'Cadeira', código: '118484545' },
      { id: 4, nome: 'Dado', código: '2481854845' },
      { id: 5, nome: 'Estante', código: '15484844' },
      { id: 6, nome: 'Frigideira', código: '744515485451' },
      { id: 7, nome: 'Garrafa', código: '444145151' },
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('produtos', {
      titulo: 'Meus prdutos',
      produtosParaView: produtos // Passando o array para a view
    });
  });

  module.exports = router;
